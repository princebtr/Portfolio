import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import "./styles/themes.css";
import Layout from "./components/layout";
import { useTheme } from "./context/ThemeContext.jsx";
import { ToastContainer } from "react-toastify";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Certificates from "./pages/certificates";
// import WorkExperience from "./pages/workExperience";
// import Skills from "./pages/skills";
// import Education from "./pages/education";
// import Contact from "./pages/contact";
// import Projects from "./pages/project";

export default function App() {
  const { theme, style, layout } = useTheme();
  return (
    <>
      <div id={theme} data-style={style} data-layout={layout}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
        style={{ backgroundColor: "blue", borderRadius: "80px" }}
      />
    </>
  );
}
