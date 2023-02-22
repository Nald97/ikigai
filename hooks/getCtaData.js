import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "@firebase/database";
import { db } from "../firebase-config";

const dbRef = ref(db, "cta");

export default function useCtaData() {
  const [ctaData, setCtaData] = useState(null);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setCtaData(data);
    });
  }, []);

  return { ctaData };
}
