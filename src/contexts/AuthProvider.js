import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(app);
const auth = getAuth();

const AuthProvider = ({children}) => {
    
    const createUser =(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={
      createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;