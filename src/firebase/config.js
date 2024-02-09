import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZzwCiHaXB_KDXQ_4ayCXPyD1DuB1u6H4",
  authDomain: "carpshop-31877.firebaseapp.com",
  projectId: "carpshop-31877",
  storageBucket: "carpshop-31877.appspot.com",
  messagingSenderId: "24784429254",
  appId: "1:24784429254:web:89ed3746a2369e1722b7c7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)