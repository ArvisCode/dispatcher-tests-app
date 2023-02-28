//import { useSelector } from "react-redux";
//import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  //const currentName = useSelector((state) => state.userName);
  //return currentName.length > 0 ? children : <Navigate to="/login" />;

  return children;
}
