import { useEffect, useState } from "react";
import axios from "axios";
import "./RecommendationsPage.css";

function RecommendationsPage() {

  const [career, setCareer] = useState(null);

  useEffect(() => {

    axios
      .get("http://localhost:8080/recommendations/3")
      .then((response) => {
        setCareer(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div className="recommend-page">

      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="recommend-card">

        <h1>⚙️ Career Recommendations</h1>

        <p className="subtitle">
          Discover your AI-powered career path
        </p>

        {career && (

          <div className="career-box">

            <div className="career-icon">
              🚀
            </div>

            <h2>{career.careerName}</h2>

            <p>
              <strong>Required Skill:</strong>
              <br />
              {career.requiredSkill}
            </p>

            <p>
              <strong>Description:</strong>
              <br />
              {career.description}
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default RecommendationsPage;