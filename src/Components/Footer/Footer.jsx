import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-10">

      <div className="container-custom">

        <h2 className="text-3xl font-bold text-center">
          Abdul Hameed
        </h2>

        <p className="text-center mt-3 text-gray-400">
          Full Stack Developer
        </p>

        <div className="flex justify-center gap-6 mt-6 text-3xl">

          <a
            href="https://github.com/maharhameed4-tech/Abdul-Hameed-Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hameed-mahar-538918316?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:YOUR_EMAIL@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <hr className="my-8 border-slate-700"/>

        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Abdul Hameed.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;