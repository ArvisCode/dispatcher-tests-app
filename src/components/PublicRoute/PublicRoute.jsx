import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const currentName = useSelector((state) => state.userName);

  return currentName.length === 0 ? children : <Navigate to="/" />;
}
