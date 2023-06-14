import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication =(email , password) => {
    return async(dispatch) =>{
        dispatch(checkingCredentials());
        
    }

}

export const starGoogleSignIn = () => {
return async (dispatch)=>{
    dispatch(checkingCredentials());
   const result = await signInWithGoogle();
//para disparar la accion  autenticacion 
if (!result.ok) return dispatch(logout(result.errorMessage));
dispatch(login(result));

}

}