import { motion } from "framer-motion";
import autoPlan from "../../assets/Images/projects/auto-plan-ai.png";
import quiz from "../../assets/Images/projects/quiz.png";
import fees from "../../assets/Images/projects/fees.png";
// import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Auto Plan AI",
    description:
      "AI-powered platform for generating 2D & 3D house and hospital layouts using MERN Stack.",
    image: autoPlan,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Three.js"],

  },
  {
    title: "Quiz App System",
    description:
      "Interactive Quiz Application with user authentication and online test conducting features.",
    image: quiz,
    technologies: ["HTML", "CSS","JavaScript", "PHP", "MYSQL"],
    
  },
  {
    title: "School Fees Management System",
    description:
      "Comprehensive system for managing school fees and payments.",
    image: fees,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MYSQL"],
    
  },
  // {
  //   title: "Image Gallery",
  //   description:
  //     "Responsive Image Gallery with API integration and search functionality.",
  //   image: "../assets/Images/projects/image-gallery.png",
  //   technologies: ["React", "API"],
  //   github: "#",
  
  // },
  // {
  //   title: "Todo App",
  //   description:
  //     "Simple CRUD Todo Application using React and Local Storage.",
  //   image: "../assets/Images/projects/todo-app.png",
  //   technologies: ["React", "JavaScript"],
  //   github: "#",
    
  // },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-800 text-white"
    >
      <div className="container-custom">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-bold mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4 mt-6">

                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600"
                  >
                    <FaGithub />
                    GitHub
                  </a> */}

                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a> */}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;