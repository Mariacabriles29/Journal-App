import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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