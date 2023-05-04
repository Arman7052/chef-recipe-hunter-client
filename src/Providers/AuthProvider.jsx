import React, { createContext, useEffect, useState } from 'react';
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import app from '../firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // Sign In with Google  //
    const signInWithGoogle = () => {
        return signInWithPopup(auth, new GoogleAuthProvider());
    };
    // sign in with github //
    const signInWithGitHub = () => {
        return signInWithPopup(auth, new GithubAuthProvider());
    }


    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log('logged user', loggedUser);
            setUser(loggedUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;





// import React, { createContext, useEffect, useState } from 'react';
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import app from '../firebase.config';

// export const AuthContext = createContext();
// const auth = getAuth(app)

// const AuthProvider = ({children}) => {
//     const [user,setUser] = useState(null);

//    const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth,email,password);
//    }
//    const signIn = (email, password) => {
//     return signInWithEmailAndPassword(auth,email,password);
//    }
//    const provider = new GoogleAuthProvider();

//    const logOut = () => {
//     return signOut(auth)
//    }

//    useEffect(() =>{
//    const unsubscribe = onAuthStateChanged(auth,loggedUser => {
//         console.log('logged user',loggedUser);
//         setUser(loggedUser);
//     })

//     return ()=>{
//         unsubscribe()
//     }
//    },[])


//     const authInfo ={
//         user,
//         createUser,
//         signIn,
//         logOut
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


