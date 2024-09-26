import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
  const { isAuth } = useAuth();
  // const navigate = useNavigate();
  console.log(isAuth);

  //   if (isAuth) {
  // <
  //   }
  return <>{isAuth ? <Navigate to={"/"}/> : <div>Login</div>}</>;
};

export default LogIn;
