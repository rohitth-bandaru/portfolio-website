import React from "react";
import logo from "../ASSETS/BITS_Pilani-Logo.svg.png";
const Education = () => {
  return (
    <div class="w-full h-screen  flex flex-row items-center justify-around">
      <div>
        <img class="w-80 h-80" src={logo} alt="bits" />
      </div>
      <div class="text-2xl grid gap-1">
        <div>
          <div>B.E Mechanical Engineering</div>
          <div class="text-sm">
            ( Birla Institute of Technology and Science, Hyderabad )
          </div>
        </div>
        <div><span class="text-slate-500">Mechanical Engineer</span> by Degree</div>
        <div><span class="text-red-500">Software Developer</span> by Passion</div>
      </div>
    </div>
  );
};

export default Education;
