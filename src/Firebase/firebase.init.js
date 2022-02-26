
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const firebaseinitialize = () => {
    initializeApp(firebaseConfig);
}
export default firebaseinitialize;