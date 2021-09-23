import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';

import axios from 'axios';

interface User {
  username?: string;
  avatar?: string;
  token?: string;
}

interface AuthContext {
  user: User | null;
  signin: () => void;
  signout: () => void;
}

const authContext = createContext<AuthContext>({} as AuthContext);

// Provider component that wraps your app and makes auth object available to any child component that calls useAuth().
export function ProvideAuth({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // wrap methods we want to use, keep user in state

  // have this authenticate our user,
  const signin = () => {
    console.log('fetch signin here');
  };

  // clear our 0auth token / what we're using to keep them logged in
  const signout = () => {};

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    if (user) {
      setUser(user);
    } else {
      // setUser(false);
    }

    // Cleanup subscription on unmount
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signout,
  };
}
