import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { contactConfig } from "../../constants/contacts";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-dvh bg-[#030712] text-slate-100 py-28 px-6 flex items-center justify-center overflow-hidden border-t border-slate-800/60"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
        className="w-full max-w-5xl space-y-12 relative z-10"
      >
        {/* Contact Form Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 max-w-2xl mx-auto w-full"
        >
          <div className="space-y-2 text-center">
            <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
              Let's Connect
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Send Me a Message
            </h2>
          </div>

          <form action="https://api.web3forms.com/submit" method="post" className="space-y-4">
            <input type="hidden" name="access_key" value="53525673-82d1-494b-a4d9-617cccffc76a" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label htmlFor="name" className="text-xs font-semibold text-slate-300 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ganesh Kumar"
                  required
                  className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label htmlFor="email" className="text-xs font-semibold text-slate-300 ml-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  required
                  className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label htmlFor="subject" className="text-xs font-semibold text-slate-300 ml-1">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Project discussion / Opportunity"
                required
                className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label htmlFor="message" className="text-xs font-semibold text-slate-300 ml-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Hi Ganesh, I'd like to talk about..."
                required
                className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-600/25 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Office + Map */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Office Info */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-5 rounded-full bg-blue-500" />
              <h3 className="text-lg font-bold text-white">
                {contactConfig.locationTitle}
              </h3>
            </div>
            <p className="text-slate-200 text-base font-semibold">{contactConfig.locationText}</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Available for{" "}
              <span className="text-blue-300 font-semibold bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-md">on-site</span>,{" "}
              <span className="text-indigo-300 font-semibold bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-md">remote</span>, and{" "}
              <span className="text-blue-300 font-semibold bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-md">freelance</span>{" "}
              roles globally.
            </p>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={contactConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={contactConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={contactConfig.socials.email}
                aria-label="Email"
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <HiOutlineMail className="text-xl" />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[260px] md:h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
            <iframe
              title="Google Map - Kothrud, Pune"
              src={contactConfig.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Footer */}
        <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <div className="flex items-center justify-center gap-2">
            <span>{contactConfig.footer.text}</span>
            <span className="font-semibold text-slate-300">
              {contactConfig.footer.name}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
