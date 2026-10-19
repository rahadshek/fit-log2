"use client";

import { FitContext } from "@/context/FitProvider";
import { useContext, useState } from "react";
import SaveListCard from "./SaveListCard";
import EmptyCard from "@/components/my-plan-details/card/EmptyCard";
import { IWorkout, sortbyType } from "@/types/page";
import SaveSortBy from "@/components/my-plan-details/sort-by/SaveSortBy";

const SavePage = () => {
  const context = useContext(FitContext);

  if (!context) {
    throw new Error("SavePage must be inside FitProvider");
  }

  const { saveWorkout } = context;

  const [saveSortBy, setSaveSortBy] = useState<sortbyType>("duration");

  const sortFit = (fit: IWorkout[]): IWorkout[] => {
    const sortedPlan = [...fit];

    if (saveSortBy === "duration") {
      sortedPlan.sort((a, b) => b.duration - a.duration);
    } else if (saveSortBy === "caloriesBurned") {
      sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (saveSortBy === "rating") {
      sortedPlan.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlan;
  };

  const sortedSaveWorkout = sortFit(saveWorkout);

  return (
    <div className="container mx-auto my-6 min-h-screen space-y-8 px-4 sm:my-8 sm:px-6 lg:my-10 lg:px-8">
      {/* Header */}
      <div className="flex min-h-[104px] items-center justify-center text-center">
        <p className="mt-2 text-base text-gray-400 sm:text-lg">
          Your favorite workouts, saved in one place
        </p>
      </div>

      {/* Sort By */}
      <div className="flex justify-end">
        <SaveSortBy saveSortBy={saveSortBy} setSaveSortBy={setSaveSortBy} />
      </div>

      {/* Saved Workouts */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-6">
        {sortedSaveWorkout.length > 0 ? (
          sortedSaveWorkout.map((workout: IWorkout) => (
            <SaveListCard key={workout.id} add={workout} />
          ))
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  );
};

export default SavePage;
