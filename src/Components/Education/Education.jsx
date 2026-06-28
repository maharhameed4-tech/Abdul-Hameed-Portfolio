import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Bachelor of Information Technology (BIT)",
      institute: "University of Sindh",
      duration: "2022 - 2026",
      description:
        "Graduated with strong knowledge in Web Development, Database Systems, Programming, Software Engineering, Networking and Artificial Intelligence.",
    },
  ];

  const certifications = [
    "Full Stack Web Development",
    "JavaScript (ES6+)",
    "React.js",
    "PHP & Laravel12",
    "MySQL",
    "Git & GitHub",
  ];

  return (
    <section id="education" className="py-24 bg-slate-900 text-white">
      <div className="container-custom">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-800 rounded-2xl p-8 shadow-lg"
          >

            <div className="flex items-center gap-4 mb-6">
              <FaGraduationCap className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold">
                  {education[0].degree}
                </h3>

                <p className="text-blue-400">
                  {education[0].institute}
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              {education[0].duration}
            </p>

            <p className="text-gray-300 leading-8">
              {education[0].description}
            </p>

            <div className="mt-6">

              <h4 className="text-xl font-semibold mb-3">
                Relevant Coursework
              </h4>

              <div className="flex flex-wrap gap-3">

                {[
                  "Web Development",
                  "Database",
                  "AI",
                  "Software Engineering",
                  "Networking",
                  "OOP",
                ].map((course) => (
                  <span
                    key={course}
                    className="bg-blue-600 px-4 py-2 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-800 rounded-2xl p-8 shadow-lg"
          >

            <div className="flex items-center gap-4 mb-8">

              <FaCertificate className="text-4xl text-yellow-400" />

              <h3 className="text-2xl font-bold">
                Skills & Certifications
              </h3>

            </div>

            <div className="space-y-4">

              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-lg p-4 hover:bg-blue-600 duration-300"
                >
                  ✔ {item}
                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;