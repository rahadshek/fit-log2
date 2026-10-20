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
    (total, minutes) => total + minutes.duration,
    0,
  );
  //   console.log('Plan minutes is there',planCalories)
  const saveCalories = saveWorkout.reduce(
    (total, minutes) => total + minutes.caloriesBurned,
    0,
  );
  const totalCalories = activeTap === "plan" ? planCalories : saveCalories;
  return (
    <div>
      <h2 className="text-gray-400">Calories</h2>
      <h2 className="font-semibold text-5xl">{totalCalories}</h2>
    </div>
  );
};

export default Calories;
