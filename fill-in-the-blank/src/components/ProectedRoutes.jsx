import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { firebaseAuth } from "../firebase";

export default function ProtectedRoutes() {
  const [user, loading, error] = useAuthState(firebaseAuth);

  console.log("Current Logged-in user:", user);

  return user ? <Outlet /> : <Navigate to="/" />;
}
