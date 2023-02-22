// read data from firebase realtime database
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "@firebase/database";
import { db } from "../firebase-config";

const dbRef = ref(db, "users");

export default function useSheetData() {
  const [sheetData, setSheetData] = useState(null);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setSheetData(data);
    });
  }, []);

  return { sheetData };
}
