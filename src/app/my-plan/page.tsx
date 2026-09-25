"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import React, { useContext, useState } from "react";
import "@/app/globals.css"
// import { ChevronDown } from "lucide-react";

type TabType = "plan" | "saved";

const MyPlanPage = () => {
  const { addPlan, addSave } = useContext(ExerciseContext);
  const [activeTab, setActiveTab] = useState<TabType>("plan");

  const activeList = activeTab === "plan" ? addPlan : addSave;

  const totalExercises = activeList.length;
  const totalMinutes = activeList.reduce(
    (sum, exercise) => sum + exercise.duration,
    0,
  );
  const totalCalories = activeList.reduce(
    (sum, exercise) => sum + exercise.caloriesBurned,
    0,
  );

  return (
    <div
      className="min-h-screen px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
      style={{ backgroundColor: "#0C0D10" }}
    >
      <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="font-bold text-[30px] text-white">MY PLAN</h1>
        <p className="text-[14px] text-[#8A92A0] mb-6">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats bar */}
        <div
          className="rounded-xl px-8 py-6 mb-6 grid grid-cols-3"
          style={{ backgroundColor: "#15171D" }}
        >
          <div>
            <p className="text-xs mb-1" style={{ color: "#8A92A0" }}>
              Exercises
            </p>
            <p
              className="text-2xl font-extrabold"
              style={{ color: "#CCFF00" }}
            >
              {totalExercises}
            </p>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ color: "#8A92A0" }}>
              Minutes
            </p>
            <p className="text-2xl font-extrabold text-white">
              {totalMinutes}
            </p>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ color: "#8A92A0" }}>
              Calories
            </p>
            <p className="text-2xl font-extrabold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="flex items-center gap-1 rounded-full p-1"
            style={{ backgroundColor: "#15171D" }}
          >
            <button
              onClick={() => setActiveTab("plan")}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={
                activeTab === "plan"
                  ? { backgroundColor: "#2D313B", color: "#FFFFFF" }
                  : { color: "#8A92A0" }
              }
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className="px-4 py-1.5 rounded-full text-sm font-bold transition-colors"
              style={
                activeTab === "saved"
                  ? { backgroundColor: "#2D313B", color: "#FFFFFF" }
                  : { color: "#8A92A0" }
              }
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm" style={{ color: "#8A92A0" }}>
              Sort By
            </span>
            <button
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-white border"
              style={{ borderColor: "#2D313B" }}
            >
              Duration
              {/* <ChevronDown size={14} /> */}
            </button>
          </div>
        </div>

        {/* List / Empty state */}
        <div
          className="rounded-xl border border-dashed min-h-65 flex items-center justify-center"
          style={{ borderColor: "#2D313B" }}
        >
          {totalExercises === 0 ? (
            <div className="text-center">
              <h2 className="text-white font-extrabold text-lg mb-1">
                NOTHING HERE YET
              </h2>
              <p className="text-sm mb-5" style={{ color: "#8A92A0" }}>
                Browse the library and add a lift to get today moving.
              </p>
              <a
                href="/workouts"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-bold"
                style={{ backgroundColor: "#CCFF00", color: "#000000" }}
              >
                Go to workouts
              </a>
            </div>
          ) : (
            <div className="w-full px-6 py-6 space-y-3">
              {activeList.map((exercise) => (
                <div
                  key={exercise.id}
                  className="flex items-center justify-between px-4 py-3 rounded-lg"
                  style={{ backgroundColor: "#1A1D24" }}
                >
                  <span className="text-white font-medium">
                    {exercise.name}
                  </span>
                  <span className="text-sm" style={{ color: "#8A92A0" }}>
                    {exercise.duration} min · {exercise.caloriesBurned} kcal
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;