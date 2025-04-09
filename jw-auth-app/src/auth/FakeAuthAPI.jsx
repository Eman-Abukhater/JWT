const users = JSON.parse(localStorage.getItem("users")) || {};
const mockJwtSecret = "mock-jwt-secret";

// Simulate user registration with role assignment
export const mockRegister = async (username, password, role) => {
  const users = JSON.parse(localStorage.getItem("users")) || {};

  // Check if the username already exists
  if (users[username]) {
    throw new Error("Username already exists. Please log in.");
  }

  // Save the new user
  users[username] = { password, role };
  localStorage.setItem("users", JSON.stringify(users));

  return {
    token: generateToken(username, role), // Mock token generation
    user: {
      username,
      role,
    },
  };
};

// Simulate login and generate JWT
export const mockLogin = async (username, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || {};

  const user = users[username];
  if (user && user.password === password) {
    return {
      token: generateToken(username, user.role),
      user: {
        username,
        role: user.role,
      },
    };
  } else {
    throw new Error("Invalid username or password. Please register first.");
  }
};

// Function to mock JWT generation
const generateToken = (username, role) => {
  return `${username}-${role}-${mockJwtSecret}`; // Simple token mock
};
