"use client";

import { FitContext } from "@/context/FitProvider";
import { IWorkout } from "@/types/page";
import { useContext } from "react";
import PlanListCard from "./PlanListCard";
import EmptyCard from "@/components/my-plan-details/card/EmptyCard";



const PlanPage = () => {
  const context = useContext(FitContext);

  if (!context) {
    throw new Error("PlanPage must be inside FitProvider");
  }

  const { addWorkout } = context;

  return (
    <div className="container mx-auto my-6 min-h-screen space-y-6 px-4 sm:my-8 sm:space-y-8 sm:px-6 lg:my-10 lg:px-8">
      <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-6">
        {addWorkout.length > 0 ? (
          addWorkout.map((workout: IWorkout) => (
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
