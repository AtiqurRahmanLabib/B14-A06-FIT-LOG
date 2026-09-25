"use client";
import { ExerciseContext } from "@/context/ExerciseContext";
import React, { useContext } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IExercise } from "../../../../Types/Type";

const AddButton = ({ exercise }: { exercise: IExercise }) => {
  const { addPlan, setAddPlan } = useContext(ExerciseContext);

  const handleAddPlan = () => {
    const alreadyAdded = addPlan.some((plan) => plan.id === exercise.id);

    if (alreadyAdded) {
      console.error("Already in your plan!");
      return;
    }

    setAddPlan([...addPlan, exercise]);
    console.log(addPlan)
  };
  return (
    <div>
      <button
        onClick={handleAddPlan}
        className="flex w-full items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:opacity-90 sm:w-auto"
        style={{
          backgroundColor: "#CCFF00",
          color: "#000000",
        }}
      >
        <MdOutlineDateRange className="text-[16px]" />
        Add to todays plan
      </button>
    </div>
  );
};

export default AddButton;
