import React, { useEffect, useState } from "react";
import "./resume.css";
import SectionDetails from "./sectionDetails";
import userImage from "../assets/images/user.png";

const Resume = () => {
  const [resume, setResume] = useState(() =>
    JSON.parse(localStorage.getItem("resume"))
  );

  useEffect(() => {
    console.log("Resume State is", resume);
  }, [resume]);
  return (
    <div className="resume-container">
      <div className="resume-header-cotainer">
        <div className="dp-container">
          <img src={userImage} alt="userDP" className="user-image" />
        </div>
        <div className="title-container">
          <h1 className="name">{`${resume?.firstName} ${resume?.lastName}`}</h1>
          <h2 className="designation">{resume?.designation}</h2>
        </div>
      </div>
      <div className="personal-info-cotainer section-container">
        <div className="left">
          <h3 className="section-title">Personal Info</h3>
        </div>
        <div className="right personal-info">
          <ul>
            <li>{`Email: ${resume?.email}`}</li>
            <li>{`Address: ${resume?.address}`}</li>
            <li>{`Phone ${resume?.phone}`}</li>
            {/* <li>Website</li> */}
          </ul>
        </div>
      </div>
      <div className="education-cotainer section-container">
        <div className="left">
          <h3 className="section-title">Education</h3>
        </div>
        <div className="right">
          <SectionDetails
            title={resume?.institute}
            subTitle={resume?.degree}
            start={resume?.eduDateStart}
            end={resume?.eduDateEnd}
          />
        </div>
      </div>
      <div className="experience-cotainer section-container">
        <div className="left">
          <h3 className="section-title">Experience</h3>
        </div>
        <div className="right">
          <SectionDetails
            title={resume?.company}
            subTitle={resume?.designation}
            start={resume?.expDateStart}
            end={resume?.expDateEnd}
          />
        </div>
      </div>
      <div className="skills-cotainer section-container">
        <div className="left">
          <h3 className="section-title">Skills</h3>
        </div>
        <div className="right">
          <p classname="skills">{resume?.skills?.join(" | ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
