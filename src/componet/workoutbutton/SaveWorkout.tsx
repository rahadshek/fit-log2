
"use client";

import { FitContext } from "@/context/FitProvider";
import { IProps} from "@/types/page";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const AddWorkout = ({workout}: IProps) => {
  const context = useContext(FitContext);

  if (!context) {
    throw new Error("FitProvider is missing!");
  }

  const { saveWorkout, setSaveWorkout } = context;

 const isAlreadyAdded = saveWorkout.some(
      (item) => item.id === workout.id
    );
  const handleSaveWorkout = () => {
    if (isAlreadyAdded) {
      toast.error(`Already saved ${workout.name}`);
      return;
    }

    setSaveWorkout((previous) => [...previous, workout]);

    toast.success(`${workout.name} marks the workout done`);
  };

  return (
    <div>
      <button
        onClick={handleSaveWorkout}
        className="flex-1 flex items-center justify-center gap-3 rounded-xl bg-transparent border-2 border-gray-700 text-white font-bold text-lg py-2 px-4 hover:bg-gray-800 hover:border-gray-600 active:scale-95 transition-all cursor-pointer"
      >
        <FaRegBookmark className="text-lg" />
        Save for later
      </button>
    </div>
  );
};

export default AddWorkout;
