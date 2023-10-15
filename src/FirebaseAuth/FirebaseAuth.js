
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9czQMnIHUDV8rah2ITRqVAS8O6qKAMxk",
  authDomain: "event-8050f.firebaseapp.com",
  projectId: "event-8050f",
  storageBucket: "event-8050f.appspot.com",
  messagingSenderId: "39553772697",
  appId: "1:39553772697:web:9a42ed798aebbe699b5c08"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;