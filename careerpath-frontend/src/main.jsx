import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import AssessmentPage from "./AssessmentPage";
import RecommendationsPage from "./RecommendationsPage";
import SkillGapPage from "./SkillGapPage";
import RoadmapPage from "./RoadmapPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/assessment"
        element={<AssessmentPage />}
      />

      <Route
        path="/recommendations"
        element={<RecommendationsPage />}
      />

      <Route
        path="/skill-gap"
        element={<SkillGapPage />}
      />
      <Route
  path="/roadmap"
  element={<RoadmapPage />}
/>
    </Routes>
  </BrowserRouter>
);