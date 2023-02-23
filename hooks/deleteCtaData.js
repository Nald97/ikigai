import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "@firebase/database";
import { db } from "../firebase-config";

const dbRef = ref(db, "ctas");

export default function useDeleteCtaData() {
  const [deletedCtaKey, setDeletedCtaKey] = useState(null);

  const deleteData = (ctaKey) => {
    console.log("ctaKey:", ctaKey);
    if (ctaKey) {
      const ctaRef = ref(db, "ctas", ctaKey);
      remove(ctaRef);
      setDeletedCtaKey(ctaKey);
    } else {
      console.error("ctaKey is not a valid string:", ctaKey);
    }
  };

  useEffect(() => {
    if (deletedCtaKey) {
      console.log(`Deleted cta with key ${deletedCtaKey}`);
      setDeletedCtaKey(null);
    }
  }, [deletedCtaKey]);

  return { deleteData };
}
