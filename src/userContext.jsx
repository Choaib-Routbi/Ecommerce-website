import React from "react";
import { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const NotLogged = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => NotLogged();
  }, []);

  const logout = () => signOut(auth);
  return (
    <AuthContext.Provider value={{ user, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
