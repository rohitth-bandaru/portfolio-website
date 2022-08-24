import React from "react";

const Navbar = () => {
  return (
    <div class=" fixed top-0 bg-zinc-900 w-full h-14 text-white flex flex-column justify-around items-center">
      <div>
        <a href="#about">ABOUT</a>
      </div>
      <div>
        <a href="#education">EDUCATION</a>
      </div>
      <div>
        <a href="#codingprofile">CODING PROFILE</a>
      </div>
      <div>
        <a href="#skillset">SKILL SET</a>
      </div>
      <div>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
