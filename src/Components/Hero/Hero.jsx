import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../../assets/Images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-900 text-white"
    >
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Abdul Hameed 
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Team Leader",
              2000,
              "Problem Solving",
              2000,
              " Creative Thinking",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-blue-400 font-semibold"
          />

          <p className="mt-6 text-gray-300 leading-8">
            Passionate Full Stack Developer specializing in
            HTML5, CSS3, JavaScript, PHP, Laravel12 and MySQL.
            I build responsive, modern and scalable web
            applications.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <a
              href="/CV Resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-5 mt-8 text-3xl">

            <a href="https://github.com/maharhameed4-tech/Abdul-Hameed-Portfolio" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/hameed-mahar-538918316?utm_source=share_via&utm_content=profile&utm_medium=member_android">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
           
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;