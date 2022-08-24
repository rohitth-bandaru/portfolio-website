import React from "react";
import About from "./components/About";
import Education from "./components/Education";
import CodingProfile from "./components/CodingProfile";
import Contact from "./components/Contact";
import Skillset from "./components/Skillset";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App" class=" min-w-fit font-poppins bg-black text-white">
      <div>
        <Navbar></Navbar>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="education">
        <Education></Education>
      </div>
      <div id="skillset">
        <Skillset></Skillset>
      </div>
      <div id="codingprofile">
        <CodingProfile></CodingProfile>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
