import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

function About() {
  const stats = [
    {
      icon: <FaProjectDiagram size={30} />,
      number: "5+",
      title: "Projects",
    },
    {
      icon: <FaLaptopCode size={30} />,
      number: "2+",
      title: "Years Learning",
    },
    {
      icon: <FaCode size={30} />,
      number: "10+",
      title: "Technologies",
    },
    {
      icon: <FaGraduationCap size={30} />,
      number: "IT",
      title: "Graduate",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-800 text-white">
      <div className="container-custom">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-8">
              I am Abdul Hameed, an IT graduate and passionate
              Full Stack Developer. I enjoy building
              responsive, modern and scalable web applications
              using HTML, CSS, JavaScript, PHP, Laravel12 and MySQL.

              My goal is to work with international companies,
              contribute to real-world projects and continuously
              improve my development skills.
            </p>

            <div className="mt-8 space-y-3">

              <p>
                🎓 <strong>Education:</strong> Bachelor of Information Technology (IT)
              </p>

              <p>
                💼 <strong>Specialization:</strong> Full Stack Developer
              </p>

              <p>
                🌍 <strong>Location:</strong> Pakistan
              </p>

              <p>
                🚀 <strong>Available:</strong> Remote & On-site
              </p>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 text-center shadow-lg hover:scale-105 duration-300"
              >
                <div className="text-blue-400 flex justify-center mb-4">
                  {item.icon}
                </div>

                <h2 className="text-3xl font-bold">
                  {item.number}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.title}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;