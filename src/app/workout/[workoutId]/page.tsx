import { IWorkout } from "@/types/page";
import { notFound } from "next/navigation";
import Image from "next/image";

import AddWorkout from "@/componet/workoutbutton/AddWorkout";
import SaveWorkout from "@/componet/workoutbutton/SaveWorkout";

interface IPramasProps {
  params: Promise<{ workoutId: string }>;
}

const getWorkout = async (): Promise<IWorkout[]> => {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: IWorkout[] = await res.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: IPramasProps) => {
  const { workoutId } = await params;
  const workouts = await getWorkout();

  const workout = workouts.find(
    (item: IWorkout) => String(item.id) === String(workoutId),
  );

  if (!workout) {
    notFound();
  }

  const {
    name,
    muscleGroups,
    image,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = workout;

  return (
    <div className="container mx-auto p-4 md:p-10 text-white min-h-screen ">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Animated Image Container */}
        <div className="md:w-1/2 flex justify-center items-start pt-10 group">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_0_60px_-15px_rgba(204,255,0,0.3)] transform transition-all duration-500 ease-in-out group-hover:scale-[1.03] group-hover:shadow-[0_0_80px_-10px_rgba(204,255,0,0.5)]">
            <Image
              src={image}
              alt={name}
              width={700}
              height={700}
              className="object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-110"
              priority
            />
            {/* Animated Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <h3 className="text-2xl font-bold text-[#ccff00] drop-shadow-lg">
                Master the {name}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="md:w-1/2 space-y-8">
          {/* Header & Muscle Groups */}
          <div>
            <h2 className="font-bold text-5xl tracking-tighter text-white mb-2">
              {name}
            </h2>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#ccff00] text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Details Table */}
          <div className="bg-[#151922] rounded-2xl p-2 border border-gray-800 shadow-xl">
            <ul className="divide-y divide-gray-800 font-medium text-sm">
              {[
                { label: "EQUIPMENT", value: equipment },
                { label: "DIFFICULTY", value: difficulty },
                { label: "SETS", value: sets },
                { label: "REPS", value: reps },
                { label: "DURATION", value: `${duration} min` },
                { label: "CALORIES", value: `${caloriesBurned} kcal` },
                { label: "RATING", value: `${rating} / 5` },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-5 py-4 hover:bg-white/5 transition-colors"
                >
                  <span className="text-gray-500 tracking-wider uppercase font-semibold text-xs">
                    {item.label}
                  </span>
                  <span className="text-gray-100 font-semibold">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              INSTRUCTIONS
            </h3>
            <div className="prose prose-sm prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line break-words border-l-4 border-[#ccff00] pl-6 py-1">
              {instructions}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <AddWorkout workout={workout} ></AddWorkout>
            <SaveWorkout workout = {workout} ></SaveWorkout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
