"use client";

import { usePathname } from "next/navigation";
import { FitContext } from "@/context/FitProvider";
import Link from "next/link";
import { useContext } from "react";

const Plan = () => {
  const pathTheme = usePathname();
  const context = useContext(FitContext);

  if (!context) {
    throw new Error("FitProvider is missing!");
  }

  const { addWorkout } = context;

  return (
    <div>
      <Link
        href="/listed-data/plan"
        className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-sm font-medium transition-all duration-200 sm:gap-2 sm:px-3 sm:text-base ${
          pathTheme === "/listed-data/plan"
            ? "border-[#ccff00]/50 bg-[#ccff00]/10 font-semibold text-[#ccff00] shadow-sm shadow-[#ccff00]/5"
            : "border-transparent text-gray-400 hover:border-gray-700 hover:bg-white/5 hover:text-white"
        }`}
      >
        Plan
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b7e707] px-1 text-xs text-black">
          {addWorkout.length}
        </span>
      </Link>
    </div>
  );
};

export default Plan;
