import "./App.css";
import { useState } from "react";
import { loginUser } from "./services/userService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await loginUser(email, password);

      localStorage.setItem("token", result);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert("Login Failed!");
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
          Shape your future with AI-powered career guidance.
        </p>
      </div>

      <div className="right-panel">
        <h2>Login to your Account</h2>

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

        <button onClick={handleLogin}>
          Login
        </button>
      </div>

    </div>
  </div>
);
}

export default LoginPage;