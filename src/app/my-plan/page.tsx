import MyPlanDetails from "@/components/my-plan-details/MyPlanDetails";
import React from "react";

const Myplan = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="font-bold  text-4xl text-white my-2 ">MY PLAN</h2>
      <p className="text-lg text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <MyPlanDetails />
    </div>
  );
};

export default Myplan;
