import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='App'>
      <Intro/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App