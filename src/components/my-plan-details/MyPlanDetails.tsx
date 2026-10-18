"use client";
import { FitContext } from "@/context/FitProvider";
import { useContext } from "react";
import PlanCard from "./PlanCard";
import { IWorkout } from "@/types/page";
import SaveCard from "./SaveCard";

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
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today’s Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {addWorkout.map((add: IWorkout) => (
            <PlanCard key={add.id} add={add} />
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {saveWorkout.map((save: IWorkout) => (
            <SaveCard key={save.id} add={save} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPlanDetails;
