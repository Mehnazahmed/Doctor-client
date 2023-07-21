import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading,setLoading]=useState(true);
  const [dark,setDark] =useState(false)

  //light - dark theme generator
  const handleDark=()=>{
    setDark(!dark)
    localStorage.setItem("dark-mode", !dark)
  };

  useEffect(()=>{
    if(dark){
      document.querySelector('html').setAttribute('data-theme','dark')
    }else{
      document.querySelector('html').setAttribute('data-theme','doctortheme')
    }
  },[dark])

  useEffect(()=>{
    const localDark =JSON.parse(localStorage.getItem("dark-mode"));
    console.log(localDark)
    setDark(localDark)
  },[])
  
  // light - dark theme generator



  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn =()=>{
    return signInWithPopup(auth,provider)
  }

  const logOut =()=>{
    setLoading(true)
    return signOut(auth)
  }

  const updateUser =(userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
  }

  const resetPassword =(email)=>{
    return sendPasswordResetEmail(auth,email)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    handleDark,
    createUser,
    updateUser,
    signIn,
    googleSignIn,
    resetPassword,
    user,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
