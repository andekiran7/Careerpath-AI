import "./Dashboard.css";
import {
  FaClipboardList,
  FaCog,
  FaBrain,
  FaBookOpen,
  FaSignOutAlt,
  FaSearch,
  FaChartLine
} from "react-icons/fa";

function Dashboard() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="dashboard">

      <div className="dashboard-container">

        <div className="topbar">

          <h2 className="logo">
            CareerPath AI
          </h2>

          <button className="logout-btn" onClick={logout}>
            <FaSignOutAlt />
            Logout
          </button>

        </div>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search careers, skills, technologies..."
          />

        </div>

        <div className="hero-banner">

          <h1>🚀 Welcome Back!</h1>

          <p>
            Discover careers, analyze skill gaps,
            and build your future with AI.
          </p>

        </div>

        <div className="card-grid">

          <div
            className="feature-card assessment"
            onClick={() => window.location.pathname="/assessment"}
          >
            <FaClipboardList className="icon" />
            <h3>Assessment</h3>
            <p>Evaluate your skills and proficiency levels</p>
          </div>

          <div
            className="feature-card recommendation"
            onClick={() => window.location.pathname="/recommendations"}
          >
            <FaCog className="icon" />
            <h3>Recommendations</h3>
            <p>Get AI-powered career suggestions</p>
          </div>

          <div
            className="feature-card skillgap"
            onClick={() => window.location.pathname="/skill-gap"}
          >
            <FaBrain className="icon" />
            <h3>Skill Gap</h3>
            <p>Identify missing skills for your target career</p>
          </div>

          <div
            className="feature-card roadmap"
            onClick={() => window.location.pathname="/roadmap"}
          >
            <FaBookOpen className="icon" />
            <h3>Learning Roadmap</h3>
            <p>Personalized learning journey</p>
          </div>

        </div>

        <div className="stats-section">

          <h2>
            <FaChartLine />
            Progress Overview
          </h2>

          <div className="stats-grid">

            <div className="stat-card">
              <h3>1</h3>
              <p>Assessment</p>
            </div>

            <div className="stat-card">
              <h3>1</h3>
              <p>Recommendation</p>
            </div>

            <div className="stat-card">
              <h3>4</h3>
              <p>Skill Gaps</p>
            </div>

            <div className="stat-card">
              <h3>5</h3>
              <p>Roadmap Steps</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;