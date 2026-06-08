import { useEffect, useState } from "react";
import axios from "axios";

function SkillGapPage() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/skill-gap/3/3")
      .then((response) => {
        setSkills(response.data);
      });

  }, []);

  return (
    <div>

      <h1>Skill Gap Analysis</h1>

      <h2>Missing Skills:</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

    </div>
  );
}

export default SkillGapPage;