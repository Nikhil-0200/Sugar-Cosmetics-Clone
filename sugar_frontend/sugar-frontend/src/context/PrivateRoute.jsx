import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { auth } = useContext(AuthContext);

  return auth.isAuth ? props.children : <Navigate to="/login" />;
};

export { PrivateRoute };
