import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skill";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollTip from "./Components/ScrollTop/ScrollTip";
import { useEffect, useState } from "react";

import Loader from "./Components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {

  const timer = setTimeout(() => {

    setLoading(false);

  }, 1500);

  return () => clearTimeout(timer);

}, []);

if (loading) {

  return <Loader />;

}
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <ScrollTip />
    </>
  );
}

export default App;