import Exercises from "./Exercises";
import Minutes from "./Minutes";
import Calories from "./Calories";

type OverviewCardProps = {
  activeTab: "plan" | "saved";
};

const OverviewCard = ({ activeTab }: OverviewCardProps) => {
  return (
    <div className="my-6 grid grid-cols-1 divide-y divide-gray-700 rounded-2xl border border-gray-800 bg-[#13161d] px-5 shadow-lg sm:my-8 sm:grid-cols-2 sm:divide-y-0 sm:gap-5 sm:p-6 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:gap-0 lg:p-8">
      <div className="py-5 sm:py-2 lg:pr-6">
        <Exercises activeTab={activeTab} />
      </div>

      <div className="py-5 sm:py-2 lg:px-6">
        <Minutes activeTab={activeTab} />
      </div>

      <div className="py-5 sm:py-2 lg:pl-6">
        <Calories activeTap={activeTab} />
      </div>
    </div>
  );
};

export default OverviewCard;
