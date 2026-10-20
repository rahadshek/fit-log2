import { FitContext } from "@/context/FitProvider";
import React, { useContext } from "react";

type Calories = {
  activeTap: "plan" | "saved";
};

const Calories = ({ activeTap }: Calories) => {
  const context = useContext(FitContext);
  if (!context) {
    throw new Error("Exercises must be inside FitProvider");
  }
  const { addWorkout, saveWorkout } = context;

  const planCalories = addWorkout.reduce(
    (total, calories) => total + calories.caloriesBurned,
    0,
  );
  //   console.log('Plan minutes is there',planCalories)
  const saveCalories = saveWorkout.reduce(
    (total, calories) => total + calories.caloriesBurned,
    0,
  );
  const totalCalories = activeTap === "plan" ? planCalories : saveCalories;
  return (
    <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
      <h2 className="text-sm font-medium text-gray-400 sm:text-base">
        Calories
      </h2>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {totalCalories}
      </h2>
    </div>
  );
};

export default Calories;
