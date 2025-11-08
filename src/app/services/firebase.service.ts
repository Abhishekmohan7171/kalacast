import { Injectable, inject } from '@angular/core';
import { 
  Firestore, 
  collection, 
  addDoc, 
  collectionData, 
  doc, 
  updateDoc, 
  deleteDoc,
  DocumentData 
} from '@angular/fire/firestore';
import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  user 
} from '@angular/fire/auth';
import { 
  Storage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestore = inject(Firestore);
  private auth = inject(Auth);
  private storage = inject(Storage);

  // Auth user observable
  user$ = user(this.auth);

  constructor() { }

  // ============ Authentication Methods ============
  
  async signIn(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async signUp(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return await signOut(this.auth);
  }

  // ============ Firestore Methods ============

  // Get collection data as observable
  getCollection<T = DocumentData>(collectionName: string): Observable<T[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef, { idField: 'id' }) as Observable<T[]>;
  }

  // Add document to collection
  async addDocument(collectionName: string, data: any) {
    const collectionRef = collection(this.firestore, collectionName);
    return await addDoc(collectionRef, data);
  }

  // Update document
  async updateDocument(collectionName: string, docId: string, data: any) {
    const docRef = doc(this.firestore, collectionName, docId);
    return await updateDoc(docRef, data);
  }

  // Delete document
  async deleteDocument(collectionName: string, docId: string) {
    const docRef = doc(this.firestore, collectionName, docId);
    return await deleteDoc(docRef);
  }

  // ============ Storage Methods ============

  // Upload file to storage
  async uploadFile(path: string, file: File) {
    const storageRef = ref(this.storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  }
}
