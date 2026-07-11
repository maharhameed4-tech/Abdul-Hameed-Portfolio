import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_wwczdrl",
      "template_74aju7u",
      form.current,
      "X8ZA0wGmIioCqEYfz"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error);
        alert("❌ Failed to send message.");
      }
    );
};
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container-custom">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Let's Work Together
              </h3>

              <p className="text-gray-400 leading-8">
                I'm available for freelance work, internships,
                remote jobs and full-time opportunities.
                Feel free to contact me.
              </p>
            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <span>maharhameed4@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-500 text-2xl" />
                <span>+92 433957042</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                <span>Hyderabad, Sindh, Pakistan</span>
              </div>

            </div>

            <div className="flex gap-6 text-3xl">

              <a href="https://github.com/maharhameed4-tech/Abdul-Hameed-Portfolio">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/hameed-mahar-538918316?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form ref={form} onSubmit={sendEmail}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            <input
              type="text" name="user_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
              required
            />

            <input
              type="email" name="user_email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
              required
            />

            <input
              type="text" name="subject"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
              required
            ></textarea>

            <button type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;