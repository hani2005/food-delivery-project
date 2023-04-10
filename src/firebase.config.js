import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBT44YPbbbes7h-LOuZQ-mK5ack_AwNliY",
  authDomain: "fooddelivery-df1e9.firebaseapp.com",
  databaseURL: "https://fooddelivery-df1e9-default-rtdb.firebaseio.com",
  projectId: "fooddelivery-df1e9",
  storageBucket: "fooddelivery-df1e9.appspot.com",
  messagingSenderId: "348153073152",
  appId: "1:348153073152:web:477b2890bf1138289b92e5"
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
