import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
  <h2>About Me</h2>
  <p>
    I am a software engineer with a passion for building web applications.
    I love to learn new technologies and improve my skills.
  </p>
  <img src={image} alt="I made this" />
  </div>;
}

export default About;
