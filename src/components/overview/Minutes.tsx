import { FitContext } from "@/context/FitProvider";
import React, { useContext } from "react";

type MinutesProps = {
  activeTab: "plan" | "saved";
};

const Minutes = ({ activeTab }: MinutesProps) => {
  const context = useContext(FitContext);
  if (!context) {
    throw new Error("Minutes must be inside FitProvider");
  }
  const { addWorkout, saveWorkout } = context;

  const planMinutes = addWorkout.reduce(
    (total, minutes) => total + minutes.duration,
    0,
  );
  //   console.log('Plan minutes is there',planMinutes)
  const saveMinutes = saveWorkout.reduce(
    (total, minutes) => total + minutes.duration,
    0,
  );
  const totalMinutes = activeTab === "plan" ? planMinutes : saveMinutes;
  return (
    <div>
      <h2 className="text-gray-400">Minutes</h2>
      <h2 className="font-semibold text-5xl">{totalMinutes}</h2>
    </div>
  );
};

export default Minutes;
