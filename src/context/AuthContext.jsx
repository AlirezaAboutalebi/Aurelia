import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulating a login (in a real app, you'd handle authentication logic)
  const logIn = (userName) => {
    setUser(userName);
    localStorage.setItem("user", userName); // Persist the user (in a real app, you can use a token)
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear the persisted user
  };

  // Check if there's a logged-in user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
