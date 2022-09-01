import React from "react";
import codeforces from "../ASSETS/icons8-codeforces.-programming-competitions-and-contests,-programming-community.-48.png";
import leetcode from "../ASSETS/icons8-level-up-your-coding-skills-and-quickly-land-a-job-48.png";
import github from "../ASSETS/icons8-github-with-cat-logo-an-online-community-for-software-development-48.png";
import mail from "../ASSETS/icons8-gmail-is-a-free-email-service-developed-by-google-48.png"
import linkedin from "../ASSETS/icons8-linkedin---in-logo-used-for-professional-networking,-48.png"

const Contact = () => {
  return (
    <div class="w-full h-80 bg-slate-800 flex flex-col items-center">
      <div class="p-8 flex justify-center">Coding profile</div>
      <div class="flex justify-around w-72">
        <a
          class="w-10 h-10"
          href="https://codeforces.com/profile/rohitthbandaru"
        >
          <img src={codeforces} alt="codeforces logo" />
        </a>
        <a
          class="w-13 h-13"
          href="https://leetcode.com/rohitth/"
        >
          <img src={leetcode} alt="leetcode logo"/>
        </a>
        <a
          class="w-11 h-11"
          href="https://github.com/rohitth-bandaru"
        >
          <img src={github} alt="github logo"/>
        </a>
      </div>
      <div class="p-8 flex justify-center">connect me with</div>
      <div class="flex justify-around w-48">
        <a
          class="w-10 h-10"
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=f20190541@hyderabad.bits-pilani.ac.in"
        >
          <img src={mail} alt="gmail logo"/>
        </a>
        <a
          class="w-10 h-10"
          href="https://www.linkedin.com/in/rohitth-bandaru-17055a1a2/"
        >
          <img src={linkedin} alt="linkedin logo"/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
