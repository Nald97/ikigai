import { firestore } from "../firebase-config";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  getDoc,
  deleteDoc,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { setCurrentUser } from "../store/reducers/authReducer";
import { useDispatch } from "react-redux";

let userRef = collection(firestore, "users");
let ikigaiRef = collection(firestore, "ikigai");
let suggestionsRef = collection(firestore, "suggestions");
const batch = writeBatch(firestore);

export const checkNameUniqueness = async (name) => {
  const q = query(userRef, where("name", "==", name));
  const nameSnapshot = await getDocs(q);

  if (!nameSnapshot.empty) {
    return false;
  }
  return true;
};

export const incrementSelectedCounts = async (selectedItems) => {
  for (const category in selectedItems) {
    const docRef = doc(ikigaiRef, category);

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        for (const item of selectedItems[category]) {
          const currentCount = docSnap.data()[item] || 0;
          batch.update(docRef, { [item]: currentCount + 1 });
        }
      } else {
        console.error(`Document "${category}" does not exist.`);
      }
    } catch (error) {
      console.error("Error incrementing counts for category:", category, error);
    }
  }

  try {
    await batch.commit();
  } catch (error) {
    console.error("Error committing batch:", error);
  }
};

export const updateSelectedCounts = async (
  newSelections,
  previousSelections
) => {
  for (const category in newSelections) {
    const docRef = doc(ikigaiRef, category);

    for (const item of newSelections[category]) {
      if (!previousSelections[category].includes(item)) {
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const batch = writeBatch(firestore);
            const currentCount = docSnap.data()[item] || 0;
            batch.update(docRef, { [item]: currentCount + 1 });
            await batch.commit();
          } else {
            console.error(`Document "${category}" does not exist.`);
          }
        } catch (error) {
          console.error("Error incrementing counts for item:", item, error);
        }
      }
    }

    for (const item of previousSelections[category]) {
      if (!newSelections[category].includes(item)) {
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const batch = writeBatch(firestore);
            const currentCount = docSnap.data()[item] || 0;
            batch.update(docRef, { [item]: currentCount - 1 });
            await batch.commit();
          } else {
            console.error(`Document "${category}" does not exist.`);
          }
        } catch (error) {
          console.error("Error decrementing counts for item:", item, error);
        }
      }
    }
  }
};

export const getIkigaiElements = async () => {
  const q = query(ikigaiRef);
  const ikigaiSnapshot = await getDocs(q);
  let ikigaiElements = {};
  ikigaiSnapshot.forEach((doc) => {
    console.log(doc.data());
    const sortedKeys = Object.entries(doc.data())
      .sort((a, b) => b[1] - a[1])
      .map(([key]) => key);
    ikigaiElements[doc.id] = sortedKeys;
  });

  console.log(ikigaiElements);

  return ikigaiElements;
};

/*{Data Analysis and Data Science: 8, Digital Marketing and Social Media Strategy: 3, Project Management and Agile Methodologies: 3, Software Development and Engineering: 20, Artificial Intelligence and Machine Learning: 10, …} */

export const getAllUsers = (setAllUsers) => {
  onSnapshot(userRef, (response) => {
    setAllUsers(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0]
    );
  });
};

export const postUserData = (object) => {
  setDoc(doc(firestore, "users", object.userID), object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (dispatch) => {
  // const dispatch = useDispatch();
  onSnapshot(userRef, (response) => {
    const user = response.docs
      .map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
      .filter((item) => {
        return item.email === localStorage.getItem("userEmail");
      })[0];
    dispatch(setCurrentUser(user));
  });
};

export const editProfile = (userID, payload) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Profile has been updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addDatatoUser = (userID, payload) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Profile has been updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
