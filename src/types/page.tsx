export interface IWorkout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export interface IFitContext {
  addWorkout: IWorkout[];
  setAddWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveWorkout: IWorkout[];
  setSaveWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export interface IProps {
  workout: IWorkout;
}

