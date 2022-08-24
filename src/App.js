import React from "react";
import About from "./components/About";
import Education from "./components/Education";
import CodingProfile from "./components/CodingProfile";
import Contact from "./components/Contact";
import Skillset from "./components/Skillset";
import SocialMedia from "./components/SocialMedia";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App" class="font-poppins bg-black text-white">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Education></Education>
      </div>
      <div>
        <Skillset></Skillset>
      </div>
      <div>
        <CodingProfile></CodingProfile>
      </div>
      <div>
        <Resume></Resume>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
}

export default App;
