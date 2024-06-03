import { ref, watchEffect } from 'vue';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  const colRef = collection(db, collectionName);
  const q = query(colRef, orderBy('createdAt'));

  const unsubscribe = onSnapshot(q, snapshot => {
    let results = [];
    snapshot.docs.forEach(doc => {
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
    });
    documents.value = results;
    error.value = null;
  }, err => {
    console.log(err.message);
    documents.value = null;
    error.value = 'could not fetch the data';
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { documents, error };
};

export default getCollection;
