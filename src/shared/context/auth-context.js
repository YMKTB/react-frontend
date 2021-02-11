import { createContext } from "react";

export const AuthContext = createContext({
  isLoggoedIn: false,
  login: () => {},
  logout: () => {},
});
