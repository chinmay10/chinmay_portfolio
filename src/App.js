import React from "react";
import Banner from "./components/banner/Banner";
import ContactLeft from "./components/contact/Contact";
import FooterBottom from "./components/footer/FooterBottom";
import Education from './components/education/Education';
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto h-auto">
        <Banner />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <ContactLeft />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
