import FitCard from "@/componet/home/workoutCard";
import { IWorkout } from "@/types/page";
import Link from "next/link";
import React from "react";

const getFit = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const WorkoutPage = async () => {
  const fits = await getFit();

  return (
    <section className="min-h-screen  px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto ">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              THE LIBRARY
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Twelve lifts covering every major muscle group.
            </p>
          </div>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {fits.map((fit: IWorkout) => (
            <Link
              href={`/workout/${fit.id}`}
              key={fit.id}
              className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#191b22] transition-all duration-300 hover:-translate-y-1 hover:border-[#c2f800]/50 hover:shadow-[0_12px_35px_rgba(194,248,0,0.08)]"
            >
              <FitCard fit={fit} />
            </Link>
          ))}
        </div>

        {/* Empty State
        {fits.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center">
            <h3 className="text-xl font-bold">No workouts found</h3>
            <p className="mt-2 text-gray-400">
              Please check back later for available workouts.
            </p>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default WorkoutPage;
