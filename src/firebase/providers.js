import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result= await signInWithPopup(FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const user=result.user;
        console.log({user});

        const {displayName,email, photoURL,uid} =result.user;
       return {
        ok:true,
        //user info
        displayName, email,photoURL,uid
       }
    // eslint-disable-next-line no-empty
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      
    

        return {
            ok:false,
            errorMessage,
        }   

    }
}
/*Creo un nuevo proveedor para crear usuario y password */

export const registerUserWithEmailPassword = async({email, password,displayName}) =>{

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email,password);
        const {uid,photoURL} =resp.user;
        console.log(resp);
        
        return {
            ok:true,
            uid,photoUrl
        }

        
    } catch (error) {
        console.log(error);
        return{ok:false, errorMessage:error.message}
        
    }

}