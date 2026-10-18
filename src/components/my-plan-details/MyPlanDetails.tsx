"use client";
import { FitContext } from "@/context/FitProvider";
import { useContext } from "react";

import { IWorkout } from "@/types/page";
import SaveCard from "./card/SaveCard";
import PlanCard from "./card/PlanCard";
import EmptyCard from "./card/EmptyCard";

const MyPlanDetails = () => {
  const MyplanData = useContext(FitContext);
  if (!MyplanData) {
    throw new Error("MyPlanDetails must be inside FitProvider");
  }
  const { addWorkout, saveWorkout } = MyplanData;
  //   console.log('addWorkout data is there',addWorkout)
  //   console.log('saveWorkout data is there',saveWorkout)
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-black ">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab my-3 rounded-xl text-base text-gray-400 transition-all duration-200 checked:border checked:border-gray-700 checked:bg-black checked:font-bold checked:text-[#ccff00] sm:text-lg"
          aria-label="Today’s Plan"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {addWorkout.length > 0 ? (
            addWorkout.map((add: IWorkout) => (
              <PlanCard key={add.id} add={add} />
            ))
          ) : (
            <EmptyCard />
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab my-3 rounded-xl text-base text-gray-400 transition-all duration-200 checked:border checked:border-gray-700 checked:bg-black checked:font-bold checked:text-[#ccff00] sm:text-lg"
          aria-label="Saved"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {saveWorkout.length > 0 ? (
            saveWorkout.map((save: IWorkout) => (
              <SaveCard key={save.id} add={save} />
            ))
          ) : (
            <EmptyCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanDetails;
