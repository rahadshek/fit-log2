"use client";

import { FitContext } from "@/context/FitProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        href="/my-plan"
        className={`flex items-center gap-2 text-gray-400 ${
          pathTheme === "/my-plan" ? "font-semibold text-white" : ""
        }`}
      >
        Plan
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b7e707] px-1 text-xs text-black">
          {addWorkout.length}
        </span>
      </Link>
    </div>
  );
};

export default Plan;
