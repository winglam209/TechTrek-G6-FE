import { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { authContext } from "../context/authContext";

export default function ProtectedRoutes() {
  const { auth } = useContext(authContext);

  return auth ? <Outlet /> : <Navigate to="/" />;
}
