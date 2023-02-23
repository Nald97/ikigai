import { useState } from "react";
import { getDatabase, ref, push, set } from "@firebase/database";
import { db } from "../firebase-config";

const dbRef = ref(db, "ctas");

export default function usePostCtaData() {
  const [newCtaData, setNewCtaData] = useState(null);

  const postData = (data) => {
    const newCtaRef = push(dbRef);
    const newCtaKey = newCtaRef.key;
    const newData = { ...data, key: newCtaKey };
    set(newCtaRef, newData);
    setNewCtaData(newData);
  };

  return { newCtaData, postData };
}
