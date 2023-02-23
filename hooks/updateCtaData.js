import { useEffect, useState } from "react";
import { getDatabase, ref, set, child } from "firebase/database";

const dbRef = ref(getDatabase(), "ctas");

export default function useUpdateCtaData() {
  const updateCtaData = (cta) => {
    const ctaRef = child(dbRef, cta.key);
    set(ctaRef, cta);
  };

  return { updateCtaData };
}
