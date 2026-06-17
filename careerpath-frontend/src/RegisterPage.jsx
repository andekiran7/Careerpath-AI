import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./services/userService";

function RegisterPage() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {

    try {

      await registerUser(
        fullName,
        email,
        password
      );

      alert("Registration Successful!");

      navigate("/");

    } catch (error) {

      alert("Registration Failed!");

      console.error(error);

    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="left-panel">

          <div className="robot">
            🤖💻
          </div>

          <h1>CareerPath AI</h1>

          <p>
            Start your career journey with AI-powered guidance.
          </p>

        </div>

        <div className="right-panel">

          <h2>Create New Account</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleRegister}>
            Register
          </button>

          <p style={{ marginTop: "20px" }}>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              style={{
                color: "#8B2C6A",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Login Here
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default RegisterPage;