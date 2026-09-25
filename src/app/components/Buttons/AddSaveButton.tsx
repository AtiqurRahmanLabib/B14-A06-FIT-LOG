"use client";
import { ExerciseContext } from "@/context/ExerciseContext";
import React, { useContext } from "react";
import { IExercise } from "../../../../Types/Type";
import { CiBookmark } from "react-icons/ci";
import toast from "react-hot-toast";

const AddSaveButton = ({ exercise }: { exercise: IExercise }) => {
  const { addSave, setAddSave } = useContext(ExerciseContext);

  const handleAddSave = () => {
    const alreadyAdded = addSave.some((save) => save.id === exercise.id);

    if (alreadyAdded) {
      toast.error(`${exercise.name} is already saved`);
      return;
    }

    setAddSave([...addSave, exercise]);
    toast.success(`${exercise.name} saved successfully`);

    console.log(addSave);
  };
  return (
    <div>
      <button
        onClick={handleAddSave}
        className="flex w-full items-center border-[#374151] border gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:opacity-90 sm:w-auto"
        style={{
          color: "white",
        }}
      >
        <CiBookmark className="text-[16px]" />
        Save for later
      </button>
    </div>
  );
};

export default AddSaveButton;
