export interface WorkoutRecord {
  date: string;  // YYYY-MM-DD形式
  completed: boolean;
}

export interface WorkoutRecordRepository {
  save(record: WorkoutRecord): Promise<void>;
  getByDate(date: string): Promise<WorkoutRecord | null>;
  getAll(): Promise<WorkoutRecord[]>;
} 