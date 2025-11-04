import { auth } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";


export const saveUserData = async (uid, data) => {
  await setDoc(doc(db, "users", uid), data);
}

export const getUserData = async (uid) => {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};