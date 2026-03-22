// src/constants/projects.js

// Tooltip descriptions for each tech
export const techDescriptions = {
  "Power BI": "Interactive dashboards and business intelligence reports.",
  SQL: "Query language for relational databases.",
  Python: "Programming language for data analysis, AI, and automation.",
  "Generative AI": "AI models like GPT used to generate text, code, and more.",
  Tableau: "Visual analytics platform for data dashboards.",
};

export const allProjects = [
  {
    title: "Personal Portfolio",
    description:
      "Built a responsive personal portfolio website using React, Tailwind CSS, and JavaScript to showcase projects, skills, and achievements. Focused on modern UI design with reusable components, smooth navigation, and optimized performance, ensuring a seamless experience across all devices.",
    stack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    image: "/portfolio.png", // You can replace with the actual project image
    github:
      "https://github.com/codewithganeshhh/react-portfolio",
    demo:
      "https://www.aboutganesh.tech",
  },
  {
    title: "Learnify - E-learning website",
    description:
      "Built a full-stack e-learning web application using Django and Bootstrap, enabling user authentication, course enrollment, and content management. Focused on scalable backend architecture and responsive UI design to provide a seamless and engaging learning experience.",
    stack: ["Django", "HTML", "Bootstrap", "Python"],
    image: "/learnify.png", // You can replace with the actual project image
    github: "https://github.com/codewithganeshhh/Learnify",
  },
  {
    title: "University Management System",
    description:
      "Developed a full-stack university management system to streamline administrative workflows and enhance student services. Designed the system to support scalable management of academic processes and improve overall efficiency.",
    stack: ["React", "Node", "MongoDB", "REST API"],
    image: "/erp.png", // You can replace with the actual project image
    github:
      "https://github.com/codewithganeshhh/College-CMS",
  },
  {
    title: "BestBite",
    description:
      "BestBite is a food delivery website that allows users to order food from local restaurants. It features a modern UI design with a seamless user experience, enabling users to browse menus, place orders, and track their delivery status.",
    stack: ["HTML", "Bootstrap", "JavaScript"],
    image: "/bestbite.png", // You can replace with the actual project image
    github:
      "https://github.com/codewithganeshhh/BestBites",
    demo:
      "https://best-bites-dusky.vercel.app/",
  },
  {
    title: "NSU Tech Club",
    description:
      "NSU Tech Club is a  website for Netaji Subhas University's official tech club. It promotes learning, innovation, and collaboration in technology through workshops, hackathons, and real-world projects. ",
    stack: ["HTML", "Bootstrap", "Web3Form API"],
    image: "/techclub.png", // You can replace with the actual project image
    github:
      "https://github.com/codewithganeshhh/NSU-TECH-CLUB",
    demo:
      "https://codewithganeshhh.github.io/NSU-TECH-CLUB/",
  },

  {
    title: "Dynamic Weather Dashboard",
    description:
      "A dynamic weather dashboard that displays real-time weather information for any city worldwide. It features enabling users to check weather conditions, forecasts, and more.",
    stack: ["JavaScript", "Bootstrap", "Weather API"],
    image: "/weather.png", // You can replace with the actual project image
    github:
      "https://github.com/codewithganeshhh/Dynamic-Weather-Dashboard",
    demo:
      "https://codewithganeshhh.github.io/Dynamic-Weather-Dashboard/",
  },
];

export const techFilters = ["All", "React", "Node", "Django", "JavaScript"];