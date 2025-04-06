export const mockLogin = async (username, password) => {
  const users = {
    admin: { password: "admin123", role: "admin" },
    user: { password: "user123", role: "user" },
    mod: { password: "mod123", role: "moderator" },
  };

  const user = users[username];

  if (user && user.password === password) {
    return {
      token: "mock-jwt-token",
      user: {
        username: username,
        role: user.role,
      },
    };
  } else {
    throw new Error("Invalid username or password");
  }
};
