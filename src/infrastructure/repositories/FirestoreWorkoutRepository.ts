import { collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/FirebaseConfig';
import { WorkoutRecord, WorkoutRecordRepository } from '../../domain/models/WorkoutRecord';

export class FirestoreWorkoutRepository implements WorkoutRecordRepository {
  private readonly collectionName = 'workout_records';

  async save(record: WorkoutRecord): Promise<void> {
    const docRef = doc(db, this.collectionName, record.date);
    await setDoc(docRef, record);
  }

  async getByDate(date: string): Promise<WorkoutRecord | null> {
    const docRef = doc(db, this.collectionName, date);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as WorkoutRecord;
    }
    return null;
  }

  async getAll(): Promise<WorkoutRecord[]> {
    const querySnapshot = await getDocs(collection(db, this.collectionName));
    return querySnapshot.docs.map(doc => doc.data() as WorkoutRecord);
  }
} 