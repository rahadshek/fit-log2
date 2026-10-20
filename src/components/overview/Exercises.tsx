
import { FitContext } from "@/context/FitProvider";

import  { useContext } from "react";

type ExercisesProps = {
  activeTab: "plan" | "saved";
};

const Exercises = ({ activeTab }: ExercisesProps) => {
  const context = useContext(FitContext);
  if (!context) {
    throw new Error("Exercises must be inside FitProvider");
  }
  const { addWorkout, saveWorkout } = context;
  const addexpercises = addWorkout.length;
  const saveexpercises = saveWorkout.length;

  const totalExpercises = activeTab === "plan" ? addexpercises : saveexpercises;

  return (
    <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
      <h2 className="text-sm font-medium text-gray-400 sm:text-base">
        Exercises
      </h2>

      <h2 className="text-3xl font-bold tracking-tight text-[#c2f10d] sm:text-4xl lg:text-5xl">
        {totalExpercises}
      </h2>
    </div>
  );
};

export default Exercises;
