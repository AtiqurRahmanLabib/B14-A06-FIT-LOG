"use client";
import { ExerciseContext } from "@/context/ExerciseContext";
import React, { useContext } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IExercise } from "../../../../Types/Type";

const AddSaveButton = ({ exercise }: { exercise: IExercise }) => {
  const { addSave, setAddSave } = useContext(ExerciseContext);

  const handleAddSave = () => {
    const alreadyAdded = addSave.some((save) => save.id === exercise.id);

    if (alreadyAdded) {
      console.error("Already in your plan!");
      return;
    }

    setAddSave([...addSave, exercise]);
    console.log(addSave)
  };
  return (
    <div>
      <button
        onClick={handleAddSave}
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

export default AddSaveButton;
