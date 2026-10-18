
import { sortbyType } from "@/types/page";

interface ISortByProps {
  sortBy: sortbyType;
  setSortBy: React.Dispatch<React.SetStateAction<sortbyType>>;
}

const SortBy = ({ sortBy, setSortBy }: ISortByProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="my-10 flex justify-center">
        <select
          className="select select-accent"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as sortbyType)}
        >
          <option value="duration">Duration</option>
          <option value="caloriesBurned">calories</option>
          <option value="rating">Rating </option>
        </select>
      </div>
    </div>
  );
};

export default SortBy;
