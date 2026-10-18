"use client";

import { FitContext } from "@/context/FitProvider";
import { useContext } from "react";
import SaveListCard from "./SaveListCard";
import EmptyCard from "@/components/my-plan-details/card/EmptyCard";
import { IWorkout } from "@/types/page";

const SavePage = () => {
  const context = useContext(FitContext);

  if (!context) {
    throw new Error("SavePage must be inside FitProvider");
  }

  const { saveWorkout } = context;

  return (
    <div className="container mx-auto my-6 min-h-screen space-y-6 px-4 sm:my-8 sm:space-y-8 sm:px-6 lg:my-10 lg:px-8">
      <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-6">
        {saveWorkout.length > 0 ? (
          saveWorkout.map((workout: IWorkout) => (
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
