import LogoutButton from "./components/LogoutButton ";
import UseMemo from "./components/UseMemo";
import UserContext from "./components/context/UserContext";
import { useState } from "react";
function App() {
  const [user, setuser] = useState({
    id: 1,
    name: "masumeh",
  });
  const clickHandler = () => {
    setuser({ ...user, name: "Fatemeh" });
  };
  return (
    <>
      {/* <UseMemo /> */}
      <UserContext.Provider value={user}>
        <LogoutButton onClick={clickHandler} />
      </UserContext.Provider>
    </>
  );
}

export default App;
