import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "@firebase/database";
import { db } from "../firebase-config";

const dbRef = ref(db, "ctas");

export default function useCtaData() {
  const [ctaData, setCtaData] = useState(null);

  // Get the data from the database when the components have randomly generated keys

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.exists() ? Object.values(snapshot.val()) : [];
      setCtaData(data);
    });
  }, []);

  return { ctaData };
}
