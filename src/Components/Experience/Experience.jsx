import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Self-Employed",
      duration: "2024 - Present",
      description:
        "Developed responsive websites, landing pages, and Web projects. Worked on frontend UI, REST APIs, and bug fixing.",
    },
    {
      title: "Final Year Project",
      company: "University of Sindh",
      duration: "2025 - 2026",
      description:
        "Built Auto Plan AI, an AI-powered system for generating house and hospital layouts using the MERN stack.",
    },
    {
      title: "Learning & Personal Projects",
      company: "Self Learning",
      duration: "2024 - Present",
      description:
        "Built projects using HTML, CSS, JavaScript ,React.JS, PHP, Laravel, MySQL, Bootstrap, Git, and GitHub while continuously improving development skills.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-800 text-white">
      <div className="container-custom">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-bold mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-4 border-blue-500 ml-6">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-10 relative"
            >

              {/* Timeline Icon */}
              <div className="absolute -left-16 top-2 bg-blue-600 p-3 rounded-full shadow-lg">
                <FaBriefcase />
              </div>

              {/* Card */}
              <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition">

                <h3 className="text-2xl font-bold">
                  {exp.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {exp.company}
                </p>

                <p className="text-gray-400 mb-4">
                  {exp.duration}
                </p>

                <p className="text-gray-300 leading-7">
                  {exp.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;