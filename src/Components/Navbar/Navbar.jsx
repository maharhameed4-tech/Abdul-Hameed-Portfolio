import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md shadow-md z-50">
      <div className="container-custom flex justify-between items-center h-20">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-500">
          HM
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
       {/* <ThemeToggle /> */}
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-4 border-b border-slate-700 hover:bg-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;