import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "../Constants";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div>Dear visitor,</div>
        <div>
          My name is Pankaj Pal and I am currently working as a Full Stack
          developer (MERN) at Flexsin Technology. With 2.6 years of experience
          in the industry, I have developed a deep understanding of web
          development concepts and have honed my skills in using the MERN stack
          to create dynamic and engaging web applications. I have a strong
          commitment to delivering high-quality work and I am always eager to
          learn and stay up-to-date with the latest web development technologies
          and trends. Whether working independently or in a team environment, I
          bring my passion, creativity, and technical expertise to every project
          I undertake.
        </div>
        <div>
          I am proud to be part of the talented team at Flexsin Technology,
          where I have the opportunity to work on challenging projects and
          continue to develop my skills but I am currently exploring new
          opportunities in web development.
          <div>
            <div
              style={{ backgroundColor: "rgb(45, 79, 66)", color: "#f4f0f0" }}
            >
              My last working day at Flexsin Technology will be March 10th 2023.
            </div>
            I am eager to bring my skills and experience to a new organization
            and to take on new challenges that will help me to continue to grow
            as a professional.
            <div>
              Thank you! for considering my profile. I am confident that I can
              make a valuable contribution to your team and I look forward to
              the opportunity to discuss my qualifications further.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
