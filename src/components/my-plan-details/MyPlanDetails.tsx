"use client";

import { FitContext } from "@/context/FitProvider";
import { useContext, useState } from "react";

import { IWorkout, sortbyType } from "@/types/page";
import SaveCard from "./card/SaveCard";
import PlanCard from "./card/PlanCard";
import EmptyCard from "./card/EmptyCard";
import SortBy from "./SortBy";

type ActiveTab = "plan" | "saved";

const MyPlanDetails = () => {
  const MyplanData = useContext(FitContext);

  if (!MyplanData) {
    throw new Error("MyPlanDetails must be inside FitProvider");
  }

  const { addWorkout, saveWorkout } = MyplanData;

  const [sortBy, setSortBy] = useState<sortbyType>("duration");
  const [activeTab, setActiveTab] = useState<ActiveTab>("plan");

  const sortFit = (fit: IWorkout[]): IWorkout[] => {
    const sortedPlan = [...fit];

    if (sortBy === "duration") {
      sortedPlan.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "caloriesBurned") {
      sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedPlan.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlan;
  };

  const planSortBy = sortFit(addWorkout);
  const saveSortBy = sortFit(saveWorkout);

  return (
    <div className="mx-auto w-full min-w-0">
      {/* Tabs and Sort By */}
      <div className="mb-5 flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Tabs */}
        <div className="flex w-full min-w-0 items-center gap-3 rounded-xl border border-gray-800 bg-[#15171d] p-1 sm:w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            aria-pressed={activeTab === "plan"}
            className={`min-w-0 flex-1 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm transition-all duration-200 sm:flex-none sm:px-5 sm:text-base  ${
              activeTab === "plan"
                ? "border border-gray-700 bg-[#20232b] font-bold text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            aria-pressed={activeTab === "saved"}
            className={`min-w-0 flex-1 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm transition-all duration-200 sm:flex-none sm:px-5 sm:text-base ${
              activeTab === "saved"
                ? "border border-gray-700 bg-[#20232b] font-bold text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort By */}
        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <span className="shrink-0 text-sm text-gray-400 sm:text-base">
            Sort By
          </span>

          <div className="min-w-0">
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>
      </div>

      {/* Today's Plan */}
      {activeTab === "plan" && (
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-6">
          {planSortBy.length > 0 ? (
            planSortBy.map((workout: IWorkout) => (
              <PlanCard key={workout.id} add={workout} />
            ))
          ) : (
            <EmptyCard />
          )}
        </div>
      )}

      {/* Saved Workouts */}
      {activeTab === "saved" && (
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-6">
          {saveSortBy.length > 0 ? (
            saveSortBy.map((workout: IWorkout) => (
              <SaveCard key={workout.id} add={workout} />
            ))
          ) : (
            <EmptyCard />
          )}
        </div>
      )}
    </div>
  );
};

export default MyPlanDetails;
