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
    <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
      <h2 className="text-sm font-medium text-gray-400 sm:text-base">
        Minutes
      </h2>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {totalMinutes}
      </h2>
    </div>
  );
};

export default Minutes;
