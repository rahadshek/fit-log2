
"use client";

import { sortbyType } from "@/types/page";
import { FaSortAmountDown } from "react-icons/fa";

interface ISortByProps {
  sortBy: sortbyType;
  setSortBy: React.Dispatch<React.SetStateAction<sortbyType>>;
}

const SortBy = ({ sortBy, setSortBy }: ISortByProps) => {
  return (
    <div className="flex w-full min-w-0 items-center gap-3 sm:w-auto">
     
      <select
        id="workout-sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as sortbyType)}
        className="select h-11 min-h-11 w-full min-w-0 flex-1 rounded-xl border border-gray-700 bg-[#15171d] text-sm font-medium text-white outline-none transition duration-200 hover:border-[#ccff00]/60 focus:border-[#ccff00] focus:outline-none focus:ring-1 focus:ring-[#ccff00]/30 sm:w-48 sm:flex-none sm:text-base"
      >
        <option value="duration">Duration</option>
        <option value="caloriesBurned">Calories Burned</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortBy;
