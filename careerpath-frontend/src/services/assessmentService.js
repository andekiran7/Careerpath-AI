import axios from "axios";

const API_URL = "http://localhost:8080";

export const saveAssessment = async (assessment) => {
  const response = await axios.post(
    `${API_URL}/assessments`,
    assessment
  );

  return response.data;
};