// send a post request to firebase realtime database
// with the data from the form

import { useState } from "react";
import { getDatabase, ref, set } from "@firebase/database";
import { db } from "../firebase-config";

const dbRef = ref(db, "cta");

export default function usePostCtaData() {
  const [ctaData, setCtaData] = useState(null);

  const postData = (data) => {
    set(dbRef, data);
    setCtaData(data);
  };

  return { ctaData, postData };
}
