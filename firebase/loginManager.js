import {initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "./firebase.config";



export const initializeLoginFramework = () => {
  var app = initializeApp(firebaseConfig);
  
}
const auth = getAuth();

export const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
  
    return signInWithPopup(auth,googleProvider)
    .then(res => {
      const {displayName, photoURL, email,emailVerified} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
        emailVerified
      };
      return signedInUser;
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
}

export const handleSignOut = () => {
    return signOut()
        .then(()=> {
           
        }).catch(err => {
            // An error happened.
        });
}

export const createUserEmailAndPassword = (name,email,password) => {
    return createUserWithEmailAndPassword(email,password)
     .then((res) => {
       const newUserInfo = res.user;
       newUserInfo.name = name
       newUserInfo.error = '';
       newUserInfo.success = true;
       updateUserName(name);
       verifyEmail();
       return newUserInfo;
       //  setLoggedInUser(newUserInfo);
       //console.log('sign in user info',res.user);
     
     })
     .catch((error) => {
       const newUserInfo = {};
       newUserInfo.error = error.message;
       newUserInfo.success = false;
       return newUserInfo;
       // var errorCode = error.code;
       // var errorMessage = error.message;
       // console.log(errorCode,errorMessage);
     });
 }

 export const signInEmailAndPassword = (email,password) => {
    return signInWithEmailAndPassword(email,password)
     .then(res => {
       const {displayName,email,emailVerified} = res.user;

       const newUserInfo = {
         name: displayName,
         email: email,
         error: '' ,
         success: true,
         emailVerified
       }
      //  newUserInfo.error = '';
      //  newUserInfo.success = true;
      //  newUserInfo.emailVerified = res.user.emailVerified;

       if(!emailVerified){
         verifyEmail();
       }
       return newUserInfo;
      // updateUserName(name);
     })
     .catch(error => {
       const newUserInfo = {};
       newUserInfo.error = error.message;
       newUserInfo.success = false;
       return newUserInfo;
     })
 }
 
 const updateUserName = name => {
     const user = auth.currentUser;
     
     console.log(user);
 
     user.updateProfile({
       displayName: name,
     }).then(function() {
       console.log('username updated successfully')
     }).catch(function(error) {
       console.log(error)
     });
}

const verifyEmail = () => {
  var user = auth.currentUser;
  user.sendEmailVerification().then(function () {
  }).catch(error => {
  });
}

// export const resetPassword = (email) => {
//  return firebase.auth().sendPasswordResetEmail(email )
//   .then((res) => {
//     // Password reset email sent!
//     // ..
//     const msg = 'Your password reset link has been sent to your email. please check your email..';
//     return msg;
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
// }

export const storeAuthToken = (user) => {
    auth.currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        sessionStorage.setItem('userInfo',JSON.stringify(user));
      }).catch(function (error) {
        // Handle error
      });
  }