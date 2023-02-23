// send a post request to firebase realtime database
// with the data from the form

import { useState } from "react";
import { getDatabase, ref, push } from "@firebase/database";
import { db } from "../firebase-config";

const dbRef = ref(db, "ctas");

export default function usePostCtaData() {
  const [newCtaData, setNewCtaData] = useState(null);

  const postData = (data) => {
    push(dbRef, data);
    seNewtCtaData(data);
  };

  return { newCtaData, postData };
}
