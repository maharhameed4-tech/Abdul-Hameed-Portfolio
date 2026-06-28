import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaServer,
  FaBug,
  FaRocket,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Modern responsive websites using HTML,CSS,JavaScript and React.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "02",
    icon: <FaServer />,
    title: "Backend Development",
    desc: "REST APIs with PHP, Laravel and MySQL.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "03",
    icon: <FaReact />,
    title: "Full Stack Development",
    desc: "Complete web applications from frontend to backend deployment.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "04",
    icon: <FaBug />,
    title: "Bug Fixing",
    desc: "Debugging, optimization and improving existing websites.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "05",
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Speed optimization and SEO-friendly web applications.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: "06",
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Beautiful websites that work perfectly on all devices.",
    color: "from-sky-500 to-cyan-500",
  },
];

function Services() {
  return (
    <section id="services" className="py-28 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center text-5xl font-bold mb-4"
        >
          My Services
        </motion.h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          I develop fast, scalable and modern web applications using the
          latest frontend and backend technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.5 }}
              whileHover={{
                y:-12,
                scale:1.03
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8"
            >

              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${service.color}`}
              ></div>

              <h1 className="text-6xl font-black text-white/10">
                {service.id}
              </h1>

              <div className="text-5xl mt-5 mb-6 text-cyan-400">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;