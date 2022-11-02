import { Navigate } from "react-router-dom";

// Hooks
import { UseLogin } from "../../Hooks";

// services
import { firebaseLoggout } from "../../services";

export const Dashboard = () => {
  const { loginData } = UseLogin();

  if (!loginData.isLogged) {
    return <Navigate to="/admin" />;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={() => firebaseLoggout()}>
        Sair
      </button>
    </div>
  );
};
