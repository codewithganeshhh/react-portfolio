import React, { useEffect, useRef } from "react";

export const Canvas3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Retina / High-DPI screen adjustment
    const setSize = () => {
      const parent = canvas.parentElement;
      width = canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      height = canvas.height = parent ? parent.offsetHeight : window.innerHeight;
    };
    setSize();

    const handleResize = () => {
      setSize();
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking with smooth spring inertia
    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
      active: false,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width * 0.5;
      mouse.targetY = height * 0.5;
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // 3D Perspective Wave Grid Configuration
    // Spanning the entire width and depth of the hero
    const cols = 48; // Number of longitudinal columns
    const rows = 32; // Number of latitude rows
    const gridSpacingX = 45;
    const gridSpacingZ = 45;

    // Ambient floating 3D dust particles across hero
    const numDust = 60;
    const dustParticles = [];
    for (let i = 0; i < numDust; i++) {
      dustParticles.push({
        x: (Math.random() - 0.5) * 1600,
        y: (Math.random() - 0.5) * 800,
        z: Math.random() * 1000 + 100,
        size: Math.random() * 1.5 + 0.6,
        speed: Math.random() * 0.4 + 0.2,
        baseAlpha: Math.random() * 0.6 + 0.2,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.016;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      const centerX = width * 0.5;
      const horizonY = height * 0.52; // Horizon placed elegantly behind the hero
      const focalLength = 480;

      // Mouse influence on camera tilt
      const mouseTiltX = ((mouse.x - centerX) / (width * 0.5)) * 0.12;
      const mouseTiltY = ((mouse.y - horizonY) / (height * 0.5)) * 0.08;

      // Compute 3D grid points
      const gridPoints = [];

      for (let r = 0; r < rows; r++) {
        const rowPoints = [];
        // Z distance from camera (near to far)
        const z = (r + 1) * gridSpacingZ;

        for (let c = 0; c < cols; c++) {
          // X spread relative to center
          const x = (c - cols / 2) * gridSpacingX;

          // Wave equation: layered undulating sine waves
          const wave1 = Math.sin(x * 0.005 + time * 1.2) * 22;
          const wave2 = Math.cos(z * 0.006 - time * 0.9) * 18;
          const wave3 = Math.sin((x + z) * 0.004 + time * 0.7) * 14;

          // Interactive ripple from mouse
          const screenApproxX = centerX + x * (focalLength / (focalLength + z));
          const screenApproxY = horizonY + 120 * (focalLength / (focalLength + z));
          const distToMouse = Math.hypot(screenApproxX - mouse.x, screenApproxY - mouse.y);
          const mouseWave = Math.max(0, 1 - distToMouse / 280) * 35 * Math.sin(distToMouse * 0.05 - time * 3);

          const yElevation = (wave1 + wave2 + wave3 + mouseWave) + 140; // Plane positioned below hero horizon

          // Perspective projection with camera tilt
          const rotatedX = x * Math.cos(mouseTiltX) - z * Math.sin(mouseTiltX);
          const rotatedZ = z * Math.cos(mouseTiltX) + x * Math.sin(mouseTiltX);
          const rotatedY = yElevation * Math.cos(mouseTiltY) - rotatedZ * Math.sin(mouseTiltY);

          const scale = focalLength / (focalLength + rotatedZ);
          const projX = centerX + rotatedX * scale;
          const projY = horizonY + rotatedY * scale;

          // Depth alpha fade (fades at horizon and at very near edges)
          const depthRatio = r / rows;
          const alpha = Math.sin(depthRatio * Math.PI) * 0.55 * Math.min(1, scale * 1.8);

          rowPoints.push({
            x: projX,
            y: projY,
            z: rotatedZ,
            scale,
            alpha,
          });
        }
        gridPoints.push(rowPoints);
      }

      // Draw Depth Lines (Along Z-axis / Latitude lines)
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        const row = gridPoints[r];
        ctx.beginPath();
        let started = false;

        for (let c = 0; c < cols; c++) {
          const pt = row[c];
          if (pt.x < -100 || pt.x > width + 100 || pt.y < -100 || pt.y > height + 100) continue;

          if (!started) {
            ctx.moveTo(pt.x, pt.y);
            started = true;
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }

        const avgAlpha = row[Math.floor(cols / 2)].alpha;
        ctx.strokeStyle = `rgba(59, 130, 246, ${avgAlpha * 0.4})`;
        ctx.stroke();
      }

      // Draw Longitudinal Lines (Connecting columns from back to front)
      for (let c = 0; c < cols; c += 2) {
        ctx.beginPath();
        let started = false;

        for (let r = 0; r < rows; r++) {
          const pt = gridPoints[r][c];
          if (pt.x < -100 || pt.x > width + 100 || pt.y < -100 || pt.y > height + 100) continue;

          if (!started) {
            ctx.moveTo(pt.x, pt.y);
            started = true;
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }

        ctx.strokeStyle = `rgba(99, 102, 241, 0.18)`;
        ctx.stroke();
      }

      // Draw Glowing Highlight Nodes at grid intersections near mouse
      for (let r = 0; r < rows; r += 2) {
        for (let c = 0; c < cols; c += 2) {
          const pt = gridPoints[r][c];
          const distMouse = Math.hypot(pt.x - mouse.x, pt.y - mouse.y);

          if (distMouse < 220) {
            const glowStrength = (1 - distMouse / 220) * pt.alpha;
            const nodeRadius = 2.2 * pt.scale;

            // Glow aura
            const grad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, nodeRadius * 5);
            grad.addColorStop(0, `rgba(6, 182, 212, ${glowStrength * 0.8})`);
            grad.addColorStop(0.5, `rgba(59, 130, 246, ${glowStrength * 0.4})`);
            grad.addColorStop(1, "rgba(0,0,0,0)");

            ctx.beginPath();
            ctx.arc(pt.x, pt.y, nodeRadius * 5, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            // Core dot
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, nodeRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${glowStrength})`;
            ctx.fill();
          }
        }
      }

      // Draw Floating 3D Cosmic Dust
      dustParticles.forEach((p) => {
        p.z -= p.speed;
        if (p.z < 20) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * 1600;
          p.y = (Math.random() - 0.5) * 800;
        }

        const scale = focalLength / (focalLength + p.z);
        const projX = centerX + (p.x + mouseTiltX * 400) * scale;
        const projY = horizonY - 100 + (p.y + mouseTiltY * 300) * scale;

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          const alpha = p.baseAlpha * Math.min(1, scale * 1.5);
          ctx.beginPath();
          ctx.arc(projX, projY, p.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 197, 253, ${alpha * 0.7})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0"
      style={{
        maskImage: "radial-gradient(ellipse 95% 85% at 50% 50%, black 50%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 95% 85% at 50% 50%, black 50%, transparent 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-75"
      />
    </div>
  );
};

export default Canvas3D;
