import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { mockLogin } from "./auth/fakeAuthAPI";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";


function App() {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
  });
  const login = async (username, password) => {
    try {
      const data = await mockLogin(username, password);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setAuth({
        token: data.token,
        user: data.user,
      }); 
    }
    catch (error) {
      alert("Login failed");
    }
  }
  // handle logout event 
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth({
      token: null,
      user: null,
    });
  }
  // check if user is logged in using wrapper component instead to move the logic into every page component manually
  const RequireAuth = ({ children, role }) => {
    if (!auth.token) return <Navigate to="/login" />;
    if (role && auth.user.role !== role) return <Navigate to="/" />;
    return children;
  };


  
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
