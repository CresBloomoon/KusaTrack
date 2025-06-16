import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { WorkoutRecord } from '../../domain/models/WorkoutRecord';
import { WorkoutUseCase } from '../../application/useCases/WorkoutUseCase';
import { FirestoreWorkoutRepository } from '../../infrastructure/repositories/FirestoreWorkoutRepository';

const workoutUseCase = new WorkoutUseCase(new FirestoreWorkoutRepository());

export const WorkoutTracker: React.FC = () => {
  const [records, setRecords] = useState<WorkoutRecord[]>([]);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    const workoutRecords = await workoutUseCase.getWorkoutRecords();
    setRecords(workoutRecords);
  };

  const handleToggleWorkout = async () => {
    await workoutUseCase.toggleWorkout(new Date());
    await loadRecords();
  };

  const getHeatmapData = () => {
    return records.map(record => ({
      date: record.date,
      count: record.completed ? 1 : 0
    }));
  };

  return (
    <div className="workout-tracker">
      <h1>KusaTrack</h1>
      <button onClick={handleToggleWorkout}>
        今日の筋トレを記録
      </button>
      <div className="heatmap-container">
        <CalendarHeatmap
          startDate={new Date(new Date().getFullYear(), 0, 1)}
          endDate={new Date()}
          values={getHeatmapData()}
          classForValue={(value) => {
            if (!value) return 'color-empty';
            return value.count > 0 ? 'color-filled' : 'color-empty';
          }}
        />
      </div>
      <style jsx>{`
        .workout-tracker {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .heatmap-container {
          margin-top: 20px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
}; 