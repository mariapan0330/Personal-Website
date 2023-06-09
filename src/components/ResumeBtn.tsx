import React from "react";
import "../styles/ResumeBtn.css";

const ResumeBtn: React.FC = () => {
  return (
    <div className="resume-box">
      <a
        className="resume-link"
        href={require("../images/Maria Panagos Resume.pdf")}
        target="_blank"
        rel="noreferrer"
        title="Opens resume PDF in a new tab"
      >
        View my resume <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
    </div>
  );
};

export default ResumeBtn;
