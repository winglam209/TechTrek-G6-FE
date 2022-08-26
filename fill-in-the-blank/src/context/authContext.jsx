import { createContext, useState } from "react";

export const authContext = createContext({
  auth: false,
  setAuth: () => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <authContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
