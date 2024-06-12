import { ref, watchEffect } from 'vue';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  // create a reference to the Firestore collection and order by createdAt
  const colRef = collection(db, collectionName);
  const q = query(colRef, orderBy('createdAt'));

  // subscribe to real-time updates from Firestore
  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const results = snapshot.docs
        .map(doc => ({ ...doc.data(), id: doc.id }))
        .filter(doc => doc.createdAt);  // want to ensure createdAt field exists

      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.error(err.message);
      documents.value = null;
      error.value = 'Could not fetch the data';
    }
  );

  // unsub from updates when the component is unmounted from dom
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { documents, error };
};

export default getCollection;
