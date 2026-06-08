import { useEffect, useState } from "react";
import axios from "axios";
import "./RoadmapPage.css";

function RoadmapPage() {

  const [career, setCareer] = useState("");
  const [roadmap, setRoadmap] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/roadmap/3")
      .then((response) => {

        setCareer(response.data.career);
        setRoadmap(response.data.roadmap);

      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div className="roadmap-page">

      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="roadmap-card">

        <h1>📖 Learning Roadmap</h1>

        <p className="subtitle">
          Personalized learning journey for your career growth
        </p>

        <div className="career-title">
          🚀 {career}
        </div>

        <div className="roadmap-steps">

          {roadmap.map((step, index) => (
            <div className="step-card" key={index}>

              <div className="step-number">
                {index + 1}
              </div>

              <div className="step-text">
                {step}
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default RoadmapPage;