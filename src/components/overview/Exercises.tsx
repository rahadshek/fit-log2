"use client";
import { FitContext } from "@/context/FitProvider";

import React, { useContext } from "react";

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
    <div>
      <h2 className="text-gray-400 ">Exercises</h2>
      <h2 className="text-[#c2f10d] font-semibold text-5xl">
        {totalExpercises}
      </h2>
    </div>
  );
};

export default Exercises;
