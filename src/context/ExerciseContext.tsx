"use client";
import { createContext, ReactNode, useState } from "react";
import { IExercise } from "../../Types/Type";

interface IExerciseContext {
  addPlan: IExercise[];
  setAddPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  addSave: IExercise[];
  setAddSave: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

export const ExerciseContext = createContext<IExerciseContext>({
  addPlan: [],
  setAddPlan: () => {},
  addSave: [],
  setAddSave: () => {},
});

const ExerciseContextProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<IExercise[]>([]);
  const [addSave, setAddSave] = useState<IExercise[]>([]);

  const sharedData = {
    addPlan,
    setAddPlan,
    addSave,
    setAddSave,
  };

  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContextProvider;
