import React from "react";
import Mongodblogo from "../ASSETS/mongodb-original-wordmark.svg";
import Expresslogo from "../ASSETS/express-original.svg";
import Reactlogo from "../ASSETS/react-original-wordmark.svg";
import Nodejslogo from "../ASSETS/nodejs-original.svg";
import Htmllogo from "../ASSETS/html5-original.svg";
import Csslogo from "../ASSETS/css3-original.svg";
import Javascriptlogo from "../ASSETS/javascript-original.svg";
import Gitlogo from "../ASSETS/git-original-wordmark.svg";
import Clogo from "../ASSETS/c-original.svg";
import Cpplogo from "../ASSETS/cplusplus-original.svg";
import Pythonlogo from "../ASSETS/python-original.svg";
import Githublogo from "../ASSETS/github-original-wordmark.svg";

const Skillset = () => {
  return (
    <div>
      <div class="w-full h-14"></div>
      <div class="w-full min-w-fit h-screen p-16 flex flex-col justify-around">
        <div class="flex justify-around">
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Mongodblogo} alt="Monogo DB" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Expresslogo} alt="Express js" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Reactlogo} alt="React js" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Nodejslogo} alt="Node js" />
            </div>
          </div>
        </div>
        <div class="flex justify-around">
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Htmllogo} alt="Html" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Csslogo} alt="Css" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Javascriptlogo} alt="JavaScript" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Gitlogo} alt="Git" />
            </div>
          </div>
        </div>
        <div class="flex justify-around">
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Clogo} alt="C language" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Cpplogo} alt="C++" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Pythonlogo} alt="python" />
            </div>
          </div>
          <div class="w-36 h-36 bg-gray-500 flex items-center justify-center rounded-full">
            <div class="w-24">
              <img src={Githublogo} alt="Github" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
