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
import useDarkMode from "../coustomHock/useDarkMode";

export const AuthContext = createContext();
export default function Authprovider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

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
    darkMode,
    setDarkMode,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log("state captured", currentUser?.email);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("https://b10-a11-server-site.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("login token", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://b10-a11-server-site.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("logout", res.data);
            setLoading(false);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
