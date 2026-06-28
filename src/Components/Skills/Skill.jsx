import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Bootstrap5", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React.JS", level: 85 },
    { name: "JQuery", level: 95 },
    { name: "PHP", level: 90 },
    { name: "Laravel12", level: 80 },
    { name: "MySQL", level: 95 },
    { name: "Git & GitHub", level: 85 },
    { name: "REST API", level: 82 },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="container-custom">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-bold mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 duration-300"
            >

              <div className="flex justify-between mb-3">

                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

                <span className="text-blue-400">
                  {skill.level}%
                </span>

              </div>

              <div className="w-full h-3 rounded-full bg-slate-700">

                <div
                  className="h-3 rounded-full bg-blue-500"
                  style={{
                    width: `${skill.level}%`,
                  }}
                ></div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;