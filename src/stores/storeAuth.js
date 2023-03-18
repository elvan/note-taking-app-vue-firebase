import { auth } from '@/js/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { defineStore } from 'pinia';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {};
  },
  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user: ', user);
        })
        .catch((error) => {
          console.log('error.message: ', error.message);
        });
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user: ', user);
        })
        .catch((error) => {
          console.log('error.message: ', error.message);
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          console.log('User signed out');
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
});
