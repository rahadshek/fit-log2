"use client";

import type { IPlan, IWorkout } from "@/types/page";
import Link from "next/link";
import Image from "next/image";
import { IoMdCheckmark, IoMdTime } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { TbFlameFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { FitContext } from "@/context/FitProvider";
import { toast } from "react-toastify";

const PlanCard = ({ add }: IPlan) => {
  const {
    id,
    image,
    name,
    equipment,
    duration,
    rating,
    caloriesBurned,
  } = add;

  const contextPlan = useContext(FitContext);

  if (!contextPlan) {
    throw new Error("PlanCard must be inside FitProvider");
  }

  const {
    addWorkout,
    setAddWorkout,
  } = contextPlan;
  const [marked, setMarked] = useState<IWorkout[]>([]);

  const isAlreadyMarked = marked.some(
    (workout: IWorkout) => workout.id === id
  );

  const handleMark = () => {
    if (isAlreadyMarked) {
      return;
    }

    setMarked((prev) => [...prev, add]);

    toast.success(`${name} marked as done!`);
  };

  const handleRemove = (workoutId: IWorkout["id"]) => {
    const exists = addWorkout.some(
      (workout: IWorkout) => workout.id === workoutId
    );

    if (!exists) {
      toast.info("Workout is not in today's plan");
      return;
    }

    setAddWorkout((prev) =>
      prev.filter((workout) => workout.id !== workoutId)
    );

    toast.success(`${name} removed from today's plan`);
  };

  return (
    <div className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#15171d] p-4 transition-all duration-300 hover:border-[#ccff00]/40 hover:bg-[#191b22] sm:p-5 lg:flex-row lg:items-center lg:justify-between">

      {/* Workout Information */}
      <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5">

        {/* Workout Image */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#22252d] sm:h-28 sm:w-32">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 96px, 128px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Workout Details */}
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-[#ccff00] sm:text-xl">
            {name}
          </h3>

          <p className="mt-1 truncate text-sm text-gray-400">
            {equipment}
          </p>

          {/* Workout Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-300 sm:text-sm">
            <span className="flex items-center gap-1.5">
              <IoMdTime className="text-[#ccff00]" />
              {duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <TbFlameFilled className="text-orange-400" />
              {caloriesBurned} kcal
            </span>

            <span className="flex min-w-0 items-center gap-1.5">
              <FaStar className="shrink-0 text-lg text-yellow-400" />
              <span className="truncate">{rating}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-4 sm:gap-3 lg:shrink-0 lg:border-t-0 lg:pt-0">

        {/* View Details */}
        <Link
          href={`/workout/${id}`}
          className="flex min-h-10 flex-1 items-center justify-center rounded-full border border-white/15 px-3 py-2 text-center text-sm font-semibold text-gray-200 transition-colors hover:border-[#ccff00]/50 hover:text-[#ccff00] sm:flex-none sm:px-4"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button
          onClick={handleMark}
          disabled={isAlreadyMarked}
          type="button"
          className={`flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold transition-all sm:flex-none sm:px-4 ${
            isAlreadyMarked
              ? "cursor-not-allowed border border-gray-700 bg-gray-800 text-gray-400"
              : "cursor-pointer bg-[#ccff00] text-black hover:bg-[#b8e600] active:scale-95"
          }`}
        >
          <IoMdCheckmark className="text-lg" />
          {isAlreadyMarked ? "Marked Done" : "Mark as Done"}
        </button>

        {/* Remove Workout */}
        <button
          type="button"
          onClick={() => handleRemove(id)}
          aria-label={`Remove ${name} from plan`}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
        >
          <IoCloseSharp className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;