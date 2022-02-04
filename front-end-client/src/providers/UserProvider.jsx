/**** user and setUser. For the purposes of passing user state throughout the app */

import { useState, createContext } from "react";

export const userContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const providerData = {}; // put the fcns want accessible to other parts of the file

  const Provider = userContext.Provider;
  return <Provider value={providerData}>{props.childern}</Provider>;
};

export default UserProvider;
