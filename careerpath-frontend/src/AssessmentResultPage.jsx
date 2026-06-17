import { useLocation, useNavigate } from "react-router-dom";

function AssessmentResultPage() {

  const location = useLocation();
  const navigate = useNavigate();

  const { skill, score, level } =
    location.state || {};

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>🎉 Assessment Submitted Successfully</h1>

      <h2>Skill: {skill}</h2>

      <h2>Score: {score}%</h2>

      <h2>Level: {level}</h2>

      <button
        onClick={() => navigate("/recommendations")}
      >
        View Recommendations
      </button>

    </div>
  );
}

export default AssessmentResultPage;