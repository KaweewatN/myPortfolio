import React from "react";
import "./experieceTimeline.css";
import { experiences } from "../../../data/experiences";

export default function ExperienceTimeline() {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">WORK EXPERIENCES</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot">
              <div className="timeline-year">{exp.year}</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <h2 className="timeline-job-title">{exp.title}</h2>
              <h3 className="timeline-company">{exp.company}</h3>
              <div>
                <span className="timeline-location">{exp.location}</span> |{" "}
                <span className="timeline-period">{exp.period}</span>
              </div>
              <ul className="timeline-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="timeline-responsibility-item">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
