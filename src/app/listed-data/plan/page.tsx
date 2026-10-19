"use client";

import { FitContext } from "@/context/FitProvider";
import { IWorkout, sortbyType } from "@/types/page";
import { useContext, useState } from "react";
import PlanListCard from "./PlanListCard";
import EmptyCard from "@/components/my-plan-details/card/EmptyCard";
import PlanSortBy from "@/components/my-plan-details/sort-by/PlanSortBy";

const PlanPage = () => {
  const context = useContext(FitContext);

  if (!context) {
    throw new Error("PlanPage must be inside FitProvider");
  }

  const { addWorkout } = context;

  const [planSortBy, setPlanSortBy] = useState<sortbyType>("duration");

  const sortFit = (fit: IWorkout[]): IWorkout[] => {
    const sortedPlan = [...fit];

    if (planSortBy === "duration") {
      sortedPlan.sort((a, b) => b.duration - a.duration);
    } else if (planSortBy === "caloriesBurned") {
      sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (planSortBy === "rating") {
      sortedPlan.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlan;
  };

  const sortedPlan = sortFit(addWorkout);

  return (
    <div className="container mx-auto my-6 min-h-screen space-y-8 px-4 sm:my-8 sm:px-6 lg:my-10 lg:px-8">
      {/* Header */}
      <div className="flex min-h-[104px] flex-col items-center justify-center text-center">

        <p className="mt-2 text-base text-gray-400 sm:text-lg">
          Manage and track your planned workouts
        </p>
      </div>

      {/* Sort By */}
      <div className="flex justify-end">
        <PlanSortBy planSortBy={planSortBy} setPlanSortBy={setPlanSortBy} />
      </div>

      {/* Workout List */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-6">
        {sortedPlan.length > 0 ? (
          sortedPlan.map((workout: IWorkout) => (
            <PlanListCard key={workout.id} add={workout} />
          ))
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  );
};

export default PlanPage;
