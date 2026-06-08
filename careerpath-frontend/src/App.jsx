import Dashboard from "./Dashboard";
import { useState } from "react";
import { loginUser } from "./services/userService";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const result = await loginUser(email, password);

      localStorage.setItem("token", result);

alert("Login Successful!");

window.location.reload();
    } catch (error) {
      alert("Login Failed!");
      console.error(error);
    }
  };
  if (localStorage.getItem("token")) {
    return <Dashboard />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>CareerPath AI</h1>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default App;