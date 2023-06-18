import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{ user, setUser, loggedInUser, setLoggedInUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContext;