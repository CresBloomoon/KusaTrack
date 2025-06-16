import { WorkoutRecord, WorkoutRecordRepository } from '../../domain/models/WorkoutRecord';
import { format } from 'date-fns';

export class WorkoutUseCase {
  constructor(private repository: WorkoutRecordRepository) {}

  async toggleWorkout(date: Date): Promise<void> {
    const dateStr = format(date, 'yyyy-MM-dd');
    const existingRecord = await this.repository.getByDate(dateStr);
    
    const newRecord: WorkoutRecord = {
      date: dateStr,
      completed: !existingRecord?.completed
    };

    await this.repository.save(newRecord);
  }

  async getWorkoutRecords(): Promise<WorkoutRecord[]> {
    return this.repository.getAll();
  }
} 