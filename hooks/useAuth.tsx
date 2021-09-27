import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';

import axios from 'axios';

interface User {
  accessToken: string;
  displayName: string | undefined;
  id: string;
  product: string;
  profileImage: string;
}

interface AuthContext {
  user: User | null;
  signin?: () => void;
  signout: () => void;
  SigninLink: any;
  verifyUser: () => void;
}

const backendApi = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
});

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
  const [user, setUser] = useState<User | null>(null);
  // wrap methods we want to use, keep user in state

  const SigninLink = (
    <a href={`${process.env.NEXT_PUBLIC_BACKEND_API}/api/auth`}>
      Login with Spotify
    </a>
  );

  // const testGetTopTracks = async () => {
  //   try {
  //     let fetchaAuth = await backendApi.get('/api/top/tracks');
  //     console.log(fetchaAuth);
  //   } catch (error: any) {
  //     console.error('>>> ERR here', error);
  //   }
  // };

  const verifyUser = async () => {
    try {
      // do an instance fetch here

      let { data } = await backendApi.get('/api/auth/verify');

      setUser(data);

      // api/auth/verify
    } catch (error) {
      // console.error(error);
      // catch the error here.
    }
  };

  // clear our 0auth token / what we're using to keep them logged in
  const signout = async () => {
    try {
      // api/auth/logout

      let { status } = await backendApi.get('/api/auth/logout');

      setUser(null);

      return ` status: ${status}, Sucessfully logged out.`;
    } catch (error) {
      console.error(error, 'ISSUE WITH SIGNOUT');
    }
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    // console.log(user);
    // Cleanup subscription on unmount
  }, [user]);
  // Return the user object and auth methods
  return {
    user,
    signout,
    SigninLink,
    verifyUser,
  };
}
