import React from "react";
import UserContext from "./context/UserContext";

function LogoutButton(props) {
  const user = React.useContext(UserContext);

  return <button onClick={props.onClick}>Logout {user.name}</button>;
}

export default LogoutButton;
