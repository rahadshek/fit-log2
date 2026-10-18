"use client";
import { FitContext } from "@/context/FitProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

const Save = () => {
  const pathTheme = usePathname();
  const context = useContext(FitContext);

  if (!context) {
    throw new Error("FitProvider is missing!");
  }
  const { saveWorkout } = context;
  return (
    <div>
      <Link
        href="/listed-data/save"
        className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-sm font-medium transition-all duration-200 sm:gap-2.5 sm:px-3 sm:text-base ${
          pathTheme === "/listed-data/save"
            ? "border-[#ccff00]/60 bg-[#ccff00]/10 font-semibold text-[#ccff00] shadow-sm shadow-[#ccff00]/5"
            : "border-transparent text-gray-400 hover:border-gray-700 hover:bg-white/5 hover:text-white"
        }`}
      >
        Save{" "}
        <span
          className={`  border border-gray-600 rounded-full px-1 flex justify-center items-center h-5 w-5 bg-black text-white text-xs `}
        >
          {saveWorkout.length}
        </span>{" "}
      </Link>
    </div>
  );
};

export default Save;
