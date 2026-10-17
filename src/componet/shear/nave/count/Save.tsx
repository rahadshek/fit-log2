"use client"
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
        href="/my-plan"
        className={`flex items-center gap-1 text-gray-400 ${
          pathTheme === "/my-plan" ? "font-semibold text-white" : ""
        } `}
      >
        Save{" "}
        <span
          className={`  rounded-full px-1 flex justify-center items-center h-5 w-5 bg-black text-white text-xs `}
        >
          {saveWorkout.length}
        </span>{" "}
      </Link>
    </div>
  );
};

export default Save;
