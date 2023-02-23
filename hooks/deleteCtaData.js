import { useEffect, useState } from "react";
import { getDatabase, ref, remove, child } from "@firebase/database";
import { db } from "../firebase-config";

const dbRef = ref(db, "ctas");

export default function useDeleteCtaData() {
  const deleteData = (cta) => {
    const ctaRef = child(dbRef + `${cta.key}`);
    remove(ctaRef + `${cta.key}`);
  };
  return { deleteData };
}
