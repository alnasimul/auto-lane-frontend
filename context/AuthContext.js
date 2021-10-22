import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword, storeAuthToken } from "@/helpers/loginManager";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: email,
        photo: '',
        error: '',
        success: false
    });

    initializeLoginFramework();


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const register = (name, email, password) => {
        createUserWithEmailAndPassword(name, email, password)
            .then(res => {
                console.log(res)
                handleResponse(res, false)
            })
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(email, password)
            .then(res => {
                handleResponse(res, true);
            })
    }
    const handleResponse = (res, redirect) => {
        setUser(res);
        // setLoggedInUser(res);

        if (redirect) {
            storeAuthToken(res);
            // setTimeout( () => {
            //     history.replace(from)
            // },2000);

        }
    }
    return (
        <AuthContext.Provider value={{ user, googleSignIn, login, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;