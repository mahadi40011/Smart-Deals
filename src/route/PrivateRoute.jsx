import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  if (!user)
    return (
      <Navigate state={location.pathname} to="/authentication/login"></Navigate>
    );
  
  return children;
};

export default PrivateRoute;
