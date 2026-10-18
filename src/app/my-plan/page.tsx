import MyPlanDetails from "@/components/my-plan-details/MyPlanDetails";


const Myplan = () => {
  return (
    <div className="container mx-auto my-6 min-h-screen space-y-6 px-4 sm:my-8 sm:space-y-8 sm:px-6 lg:my-10 lg:px-8">
      <div>
        <h2 className="my-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          MY PLAN
        </h2>

        <p className="text-sm text-gray-400 sm:text-base lg:text-lg">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <MyPlanDetails />
    </div>
  );
};

export default Myplan;
