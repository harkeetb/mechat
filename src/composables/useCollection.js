import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const useCollection = (collectionName) => {
  const error = ref(null);

  const addDocument = async (doc) => {
    error.value = null;
    
    try {
      // persist document to firestore db
      const colRef = collection(db, collectionName); 
      await addDoc(colRef, doc);
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  }

  return { error, addDocument };
};

export default useCollection;
