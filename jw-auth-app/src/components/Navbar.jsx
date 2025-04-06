import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, logout }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <span>
            Hello {user.username} ({user.role}){" "}
          </span>
          {user.role === "admin" && <Link to="/admin">Admin</Link>}
          {user.role === "user" && <Link to="/user">User</Link>}

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
