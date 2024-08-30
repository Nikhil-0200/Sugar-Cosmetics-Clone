import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth({ ...auth, isAuth: true, token: token });
    }
  }, []);

  const Login = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      setAuth({ ...auth, isAuth: true, token: token });
    }
  };

  function Logout() {
    localStorage.removeItem("token");
    setAuth({ ...auth, isAuth: false, token: null });
  }

  const authData = {
    Login,
    Logout,
    auth,
  };

  return (
    <AuthContext.Provider value={authData}>
      {props.children}
    </AuthContext.Provider>
  );
};
