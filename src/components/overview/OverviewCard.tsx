
import Exercises from "./Exercises";
import Minutes from "./Minutes";
import Calories from "./Calories";

type OverviewCardProps = {
  activeTab: "plan" | "saved";
};

const OverviewCard = ({ activeTab }: OverviewCardProps) => {
  return (
    <div className="border border-gray-800 rounded-xl bg-[#13161d] flex justify-between items-center py-8 px-6  my-10">
      <Exercises activeTab = {activeTab} />

      <Minutes activeTab = {activeTab} />

      <Calories activeTap = {activeTab} />
    </div>
  );
};

export default OverviewCard;
