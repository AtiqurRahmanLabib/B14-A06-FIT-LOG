"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar, FiX } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";
import { useContext } from "react";

import { ExerciseContext } from "@/context/ExerciseContext";
import { IExercise } from "../../../../Types/Type";
import toast from "react-hot-toast";

interface PlanCardProps {
  exercise: IExercise;
}

const PlanCard = ({ exercise }: PlanCardProps) => {
  const { setAddPlan } = useContext(ExerciseContext);

  const handleRemove = () => {
    setAddPlan((previousPlan) =>
      previousPlan.filter((plan) => plan.id !== exercise.id),
    );
    toast.success(`${exercise.name} removed from today's plan`);
  };

  const handleMarkAsDone = () => {
    setAddPlan((previousPlan) =>
      previousPlan.filter((plan) => plan.id !== exercise.id),
    );
    toast.success(`${exercise.name} marked as done`);
  };

  return (
    <div
      className="
        flex flex-col gap-4
        rounded-2xl
        border border-[#2D313B]
        bg-[#191B21]
        p-5
        transition
        hover:border-[#3A3F4A]
        sm:flex-row
        sm:items-center
      "
    >
      <div className="relative h-20 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-36">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          sizes="144px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-extrabold uppercase text-white">
          {exercise.name}
        </h3>

        <p className="mt-0.5 text-sm text-[#8A92A0]">{exercise.muscleGroups}</p>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#C5C9D0]">
          <span className="flex items-center gap-1">
            <FiClock className="text-[#CCFF00]" />
            {exercise.duration} min
          </span>

          <span className="flex items-center gap-1">
            <LuFlame className="text-[#CCFF00]" />
            {exercise.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <FiStar className="text-[#CCFF00]" />
            {exercise.rating}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/exercises/${exercise.id}`}
          className="
            rounded-full
            border border-[#3A3F4A]
            px-4 py-2
            text-xs font-medium
            text-white
            transition
            hover:border-[#CCFF00]
            hover:text-[#CCFF00]
          "
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={handleMarkAsDone}
          className="
            rounded-full
            bg-[#CCFF00]
            px-4 py-2
            text-xs
            font-bold
            text-black
            transition
            hover:opacity-90
          "
        >
          ✓ Mark as Done
        </button>

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${exercise.name}`}
          className="
            flex h-9 w-9
            items-center justify-center
            rounded-full
            text-[#687080]
            transition
            hover:bg-[#252830]
            hover:text-white
          "
        >
          <FiX size={18} />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
