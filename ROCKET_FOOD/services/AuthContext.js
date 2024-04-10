import { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  userType: null,
  setUserType: () => {},
});

export default AuthContext;

