import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import "./social.scss";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/danJkl" target="_blank">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://web.facebook.com/things.about.boom/" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/danuphan/" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
