import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { mockLogin } from "./auth/fakeAuthAPI";


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
  }
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
