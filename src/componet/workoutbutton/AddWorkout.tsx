"use client";

import { FitContext } from "@/context/FitProvider";
import { IProps } from "@/types/page";
import { useContext } from "react";
import { BsCalendarPlus } from "react-icons/bs";
import { toast } from "react-toastify";



const AddWorkout = ({workout}: IProps) => {
    
  const context = useContext(FitContext);

  if (!context) {
    throw new Error("FitProvider is missing!");
  }

  const { addWorkout, setAddWorkout } = context;

  const isAlreadyAdded = addWorkout.some((item) => item.id === workout.id);

  const handleAddWorkout = () => {
    if (isAlreadyAdded) {
      return toast.error(`Already added ${workout.name}`);
    }

    setAddWorkout((previous) => [...previous, workout]);

    toast.success(`${workout.name} marks the workout done`);
  };

  return (
    <div>
      <button
        onClick={()=>handleAddWorkout()}
        className="flex-1 flex items-center justify-center gap-3 rounded-xl bg-[#ccff00] py-2 px-4 text-black font-bold text-lg shadow-lg hover:bg-[#b8e600] active:scale-95 transition-all cursor-pointer"
      >
        <BsCalendarPlus className="text-xl" />
        Add to today's plan
      </button>
    </div>
  );
};

export default AddWorkout;
