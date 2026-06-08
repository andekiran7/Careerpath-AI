import { useEffect, useState } from "react";
import axios from "axios";
import "./SkillGapPage.css";

function SkillGapPage() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/skill-gap/3/3")
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div className="skillgap-page">

      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="skillgap-card">

        <h1>🧠 Skill Gap Analysis</h1>

        <p className="subtitle">
          Identify the skills needed to achieve your target career
        </p>

        <div className="skills-container">

          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              🎯 {skill}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default SkillGapPage;