import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const CalculateTimeRemaining = (expirationTime) => {
  const currentTime = new Date().getTime();
  const futureTime = new Date(expirationTime).getTime();
  const remainingTime = futureTime - currentTime;
  return remainingTime;
};

export const ContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    const remainingTime = CalculateTimeRemaining(expirationTime);
    setTimeout(logoutHandler, remainingTime);
  };

  const userLoggedIn = !!token;

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    logout: logoutHandler,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
