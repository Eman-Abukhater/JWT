// RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockRegister } from "../auth/FakeAuthAPI";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mockRegister(username, password, role);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.message); // Show error message if registration fails
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
    </div>
  );
}

export default RegisterPage;
