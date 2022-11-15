import { createContext, useState } from "react";

const INITIAL_CONTEXT = {
  isAuthenticated: false,
  setIsAuthenticated: () => {}
}

export const AuthContext = createContext(INITIAL_CONTEXT);

const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(INITIAL_CONTEXT.isAuthenticated);

  const authContext = {
    isAuthenticated,
    setIsAuthenticated
  }

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
}

export default ContextProvider;