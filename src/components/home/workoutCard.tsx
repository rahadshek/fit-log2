import { IWorkout } from "@/types/page";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { TbFlameFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

interface IWorkoutProps {
  fit: IWorkout;
}

const workoutCard = ({ fit }: IWorkoutProps) => {
  const {
    name,
    muscleGroups,
    image,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = fit;

  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#15171d] p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c2f800]/50 hover:shadow-lg hover:shadow-[#c2f800]/5 sm:p-5 cursor-pointer">
      {/* Workout Image */}
      <div className="relative mb-5 flex h-52 items-center justify-center overflow-hidden rounded-xl bg-[#20232b] sm:h-56">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Muscle Groups */}
      <div className="mb-4 flex flex-wrap gap-2">
        {muscleGroups.map((muscle) => (
          <span
            key={muscle}
            className="rounded-full border border-[#c2f800]/20 bg-[#c2f800]/10 px-3 py-1 text-xs font-semibold text-[#c2f800]"
          >
            {muscle}
          </span>
        ))}
      </div>

      {/* Workout Details */}
      <h2 className="line-clamp-1 text-xl font-bold transition-colors group-hover:text-[#c2f800] sm:text-2xl">
        {name}
      </h2>

      <p className="mt-2 line-clamp-1 text-sm text-gray-400">{equipment}</p>

      <div className="my-5 h-px bg-white/10" />

      {/* Workout Stats */}
      <div className="grid grid-cols-3 gap-2 text-sm text-gray-400">
        <div className="flex min-w-0 items-center gap-1.5">
          <IoMdTime className="shrink-0 text-lg text-[#c2f800]" />
          <span className="truncate">{duration} min</span>
        </div>

        <div className="flex min-w-0 items-center gap-1.5">
          <TbFlameFilled className="shrink-0 text-lg text-orange-400" />
          <span className="truncate">{caloriesBurned} kcal</span>
        </div>

        <div className="flex min-w-0 items-center gap-1.5">
          <FaStar className="shrink-0 text-lg text-yellow-400" />
          <span className="truncate">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default workoutCard;
