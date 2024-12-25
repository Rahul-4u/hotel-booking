import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";
import { toast } from "react-toastify";
import axios from "axios";

export const AuthContext = createContext();
export default function Authprovider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const googleprovider = new GoogleAuthProvider();

  // const googleLogin = () => {
  //   signInWithPopup(auth, googleprovider)
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //       console.log("Google Login Successful:", user);
  //       setLoading(true);
  //       return user;
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       alert("Google Login Failed: " + error.message);
  //       throw error;
  //     });
  // };
  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Google Login Successful:", user);
        setLoading(false);
        return user;
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Google Login Failed: " + error.message);
        throw error;
      });
  };

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    googleLogin,
    createUser,
    login,
    logOut,
    updateUserProfile,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (curentUser) => {
      setLoading(true);
      if (curentUser?.email) {
        setUser(curentUser);
        try {
          const { data } = await axios.post(
            "https://b10-a11-server-site.vercel.app/jwt",
            { email: curentUser.email },
            { withCredentials: true }
          );
        } catch (error) {
          console.error("Error fetching JWT token:", error);
        }
      } else {
        try {
          const { data } = await axios.get(
            "https://b10-a11-server-site.vercel.app/logout",
            {
              withCredentials: true,
            }
          );
          console.log("Logout response:", data.message);
          setUser(null);
        } catch (error) {
          console.error("Error during logout request:", error);
        }
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
