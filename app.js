/* The code provided is a boilerplate for implementing user authentication, Firestore database
operations, and image storage using Firebase in JavaScript. */
//! signup boilerplate

//? signup Imports
import {
  onAuthStateChanged,
  signOut,
  updateEmail,
  updatePassword,
  updatePassword,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

//to create users accounts

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//to login users accounts

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

//to check  users account

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//to update  users profile

updateProfile(auth.currentUser, {
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg",
})
  .then(() => {
    // Profile updated!
    // ...
  })
  .catch((error) => {
    // An error occurred
    // ...
  });

//to update  user email

updateEmail(auth.currentUser, "user@example.com")
  .then(() => {
    // Email updated!
    // ...
  })
  .catch((error) => {
    // An error occurred
    // ...
  });

//to update  user password

updatePassword(user, newPassword)
  .then(() => {
    // Update successful.
  })
  .catch((error) => {
    // An error ocurred
    // ...
  });

  
//! firestore boilerplate

//? firestore Imports
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  updateDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

//!Image storage boilerplate

//? Image storage Imports
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

import { auth, storage, db } from "./config.js";
