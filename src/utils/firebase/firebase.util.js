import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJFaQWW5vNHTMw9eb95rjhdsKeqUClxRk',
  authDomain: 'ijustwannachill-clothing-db.firebaseapp.com',
  projectId: 'ijustwannachill-clothing-db',
  storageBucket: 'ijustwannachill-clothing-db.appspot.com',
  messagingSenderId: '911218849641',
  appId: '1:911218849641:web:5f9392b832207a8baaaff8',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
