import { firestore } from "../firebase-config";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  getDoc,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { toast } from "react-toastify";
import {
  setCurrentUser,
  setAllUsers,
  setFilteredUsers,
} from "../store/reducers/authReducer";
import { useDispatch } from "react-redux";

let userRef = collection(firestore, "users");
let ikigaiRef = collection(firestore, "ikigai");
const batch = writeBatch(firestore);

/**
 * Checks if a given name is unique among users.
 * @param {string} name - The name to check for uniqueness.
 * @returns {Promise<boolean>} A promise that resolves to true if the name is unique, false otherwise.
 */
export const checkNameUniqueness = async (name) => {
  const q = query(userRef, where("name", "==", name));
  const nameSnapshot = await getDocs(q);

  if (!nameSnapshot.empty) {
    return false;
  }
  return true;
};

/**
 * Increments the counts of selected items in the ikigai categories.
 * @param {Object} selectedItems - An object containing selected items per category.
 * @returns {Promise<void>} A promise that resolves when the counts have been incremented.
 */
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

const modifySelectedCounts = async (
  category,
  newSelections,
  previousSelections,
  operation
) => {
  const docRef = doc(ikigaiRef, category);

  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.error(`Document "${category}" does not exist.`);
    return;
  }

  const batch = writeBatch(firestore);
  const data = docSnap.data();

  const items = operation === "increment" ? newSelections : previousSelections;
  for (const item of items[category]) {
    const currentCount = data[item] || 0;
    const newCount =
      operation === "increment" ? currentCount + 1 : currentCount - 1;
    batch.update(docRef, { [item]: newCount });
  }

  await batch.commit();
};

/**
 * Updates the counts of selected items in the ikigai categories.
 * @param {Object} newSelections - An object containing the new selected items per category.
 * @param {Object} previousSelections - An object containing the previous selected items per category.
 * @returns {Promise<void>} A promise that resolves when the counts have been updated.
 */
export const updateSelectedCounts = async (
  newSelections,
  previousSelections
) => {
  for (const category in newSelections) {
    await modifySelectedCounts(
      category,
      newSelections,
      previousSelections,
      "increment"
    );
    await modifySelectedCounts(
      category,
      newSelections,
      previousSelections,
      "decrement"
    );
  }
};

/**
 * Retrieves the elements of the ikigai categories, sorted by their counts.
 * @returns {Promise<Object>} A promise that resolves to an object containing the sorted elements per category.
 */
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

const getNestedValue = (obj, keys) => {
  return keys.reduce((acc, key) => (acc && acc[key] ? acc[key] : null), obj);
};

export const getAllUsers = (dispatch, searchTerm = "", searchKeys = []) => {
  const defaultSearchKeys = [
    "name",
    "ikigai.what_the_world_needs.world",
    "ikigai.what_the_world_needs.you",
    "ikigai.what_the_world_needs.community",
    "ikigai.what_are_you_good_at.expertise",
    "ikigai.what_are_you_good_at.knowledge",
    "ikigai.what_are_you_good_at.skills",
    "ikigai.what_do_you_love.hobbies",
    "ikigai.what_do_you_love.interests",
    "ikigai.what_do_you_love.values",
  ];
  if (searchKeys.length === 0) {
    searchKeys = defaultSearchKeys;
  }

  onSnapshot(userRef, (response) => {
    const users = response.docs
      .map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
      .filter((user) => {
        return searchKeys.some((key) => {
          const keys = key.split(".");
          const nestedValue = getNestedValue(user, keys);
          if (Array.isArray(nestedValue)) {
            return nestedValue.some((item) =>
              item.toLowerCase().includes(searchTerm.toLowerCase())
            );
          } else {
            return (
              nestedValue &&
              typeof nestedValue === "string" &&
              nestedValue.toLowerCase().includes(searchTerm.toLowerCase())
            );
          }
        });
      });

    dispatch(setAllUsers(users));
  });
};

/**
 * Sets the current user in the Redux store based on the user's email in localStorage.
 * @param {Function} dispatch - The Redux dispatch function.
 */
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

/**
 * Sets the current user in the provided callback, based on the given email.
 * @param {Function} setCurrentUser - A function that sets the current user.
 * @param {string} email - The email of the user to set as the current user.
 */
export async function getSingleUser(userID) {
  const user = doc(userRef, userID);
  const userSnap = await getDoc(user);
  if (userSnap.exists()) {
    return { ...userSnap.data(), userID: userSnap.id };
  } else {
    console.error("User not found");
    return null;
  }
}

/**
 * Posts user data to the Firestore.
 * @param {Object} object - The user data to be posted.
 */
export const postUserData = (object) => {
  setDoc(doc(firestore, "users", object.userID), object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

/**
 * Edits the user's profile with the provided data.
 * @param {string} userID - The ID of the user to edit.
 * @param {Object} payload - The data to update the user's profile with.
 * @returns {Promise<void>} A promise that resolves when the profile has been updated.
 */
export const editProfile = async (userID, payload) => {
  const userToEdit = doc(userRef, userID);

  await updateDoc(userToEdit, payload);
  toast.success("Profile has been updated successfully");
};

/**
 * Adds data to the user's profile.
 * @param {string} userID - The ID of the user to add data to.
 * @param {Object} payload - The data to add to the user's profile.
 * @returns {Promise<void>} A promise that resolves when the data has been added to the profile.
 */
export const addDatatoUser = async (userID, payload) => {
  const userToEdit = doc(userRef, userID);

  await updateDoc(userToEdit, payload);
  toast.success("Profile has been updated successfully");
};
