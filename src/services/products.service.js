import { db } from './firebase.config.js';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAll = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getById = async (id) => {
  const ref = doc(db, 'products', id);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const create = async (product) => {
  const docRef = await addDoc(productsCollection, product);
  const newDoc = await getDoc(docRef);
  return { id: newDoc.id, ...newDoc.data() };
};

export const update = async (id, data) => {
  const ref = doc(db, 'products', id);
  await updateDoc(ref, data);
  const updated = await getDoc(ref);
  return updated.exists() ? { id: updated.id, ...updated.data() } : null;
};

export const partialUpdate = update;

export const remove = async (id) => {
  const ref = doc(db, 'products', id);
  await deleteDoc(ref);
  return true;
};