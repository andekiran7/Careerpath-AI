import { useState } from "react";
import "./AssessmentPage.css";

function AssessmentPage() {
  const [skill, setSkill] = useState("");
  const [score, setScore] = useState("");
  const [level, setLevel] = useState("");

  return (
    <div className="assessment-page">

      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="assessment-card">

        <h1>📝 Assessment Form</h1>

        <p className="subtitle">
          Evaluate and track your skills effectively
        </p>

        <div className="input-group">
          <span>🧠</span>
          <input
            type="text"
            placeholder="Skill Name"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span>📊</span>
          <input
            type="number"
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span>🎯</span>
          <input
            type="text"
            placeholder="Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>

        <button className="submit-btn">
          Submit Assessment
        </button>

      </div>

    </div>
  );
}

export default AssessmentPage;