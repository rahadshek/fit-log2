"use client";

import { IFitContext, IWorkout } from "@/types/page";
import { createContext, useState } from "react";

export const FitContext = createContext<IFitContext | null>(null);

const FitProvider = ({ children }: { children: React.ReactNode }) => {
  const [addWorkout, setAddWorkout] = useState<IWorkout[]>([]);
  const [saveWorkout, setSaveWorkout] = useState<IWorkout[]>([]);

  const shearData: IFitContext = {
    addWorkout,
    setAddWorkout,
    saveWorkout,
    setSaveWorkout,
  };

  return (
    <FitContext.Provider value={shearData}>{children}</FitContext.Provider>
  );
};

export default FitProvider;
