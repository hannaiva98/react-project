import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PrivateUser: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <div>
      <h2>Private User Page!</h2>
      <p>{isLoggedIn ? "Вы вошли в систему" : "Вы не вошли"}</p>
    </div>
  );
};

export default PrivateUser;
