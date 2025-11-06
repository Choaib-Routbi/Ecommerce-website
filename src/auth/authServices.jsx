import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const signUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email, password) =>{
    try{
        return signInWithEmailAndPassword(auth, email, password)
    }catch(err){
        console.error("password incorrect :" );
        
    }
    
}

export const logout = ()=>{
    return signOut(auth)
}