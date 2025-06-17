import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Layout from "./components/layout";
import { useTheme } from "./context/ThemeContext.jsx";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Certificates from "./pages/certificates";
// import WorkExperience from "./pages/workExperience";
// import Skills from "./pages/skills";
// import Education from "./pages/education";
// import Contact from "./pages/contact";
// import Projects from "./pages/project";

export default function App() {
  const { theme } = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        {/* <div className="container">
        <Home />
        <About />
        <Education />
        <WorkExperience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div> */}
      </div>
      <ScrollToTop
        smooth
        color="#ffffff"
        style={{ backgroundColor: "var(--accent)", borderRadius: "80px" }}
      />
    </>
  );
}
