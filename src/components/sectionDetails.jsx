import React, { useEffect } from "react";
import "./sectionDetails.css";
import moment from "moment";

const SectionDetails = ({ title, subTitle, start, end }) => {
  useEffect(() => {
    console.log("Start", moment(start).format("MMM YYYY"));
    console.log("End", start);
  }, []);
  return (
    <div className="section-details-container">
      {/*  <---- Section Header ----> */}
      <div className="section-header-container">
        <div className="section-header-left">
          <h4>{`${moment(start).format("MMM YYYY")}-${moment(end).format(
            "MMM YYYY"
          )}`}</h4>
        </div>
        <div className="section-header-right">
          <h4>{subTitle}</h4>
        </div>
      </div>
      {/*  <---- Section Body ----> */}
      <div className="section-body-container">
        <div className="section-body-left">
          <h4>{title}</h4>
        </div>
        <div className="section-body-right">
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionDetails;
