"use client";

import Link from "next/link";
import { useContext, useState } from "react";

import { ExerciseContext } from "@/context/ExerciseContext";
import PlanCard from "../components/exercises/PlanCard";
import SaveCard from "../components/exercises/SaveCard";

type TabType = "plan" | "saved";
type SortType = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const { addPlan, addSave } = useContext(ExerciseContext);

  const [activeTab, setActiveTab] = useState<TabType>("plan");

  const [sortBy, setSortBy] = useState<SortType>("duration");

  const [sortOpen, setSortOpen] = useState(false);

  const [ascending, setAscending] = useState(true);

  const activeList = activeTab === "plan" ? addPlan : addSave;

  const totalExercises = activeList.length;

  const totalMinutes = activeList.reduce(
    (sum, exercise) => sum + Number(exercise.duration),
    0,
  );

  const totalCalories = activeList.reduce(
    (sum, exercise) => sum + Number(exercise.caloriesBurned),
    0,
  );

  const sortedList = [...activeList].sort((a, b) => {
    let valueA = 0;
    let valueB = 0;

    if (sortBy === "duration") {
      valueA = Number(a.duration);
      valueB = Number(b.duration);
    }

    if (sortBy === "calories") {
      valueA = Number(a.caloriesBurned);
      valueB = Number(b.caloriesBurned);
    }

    if (sortBy === "rating") {
      valueA = Number(a.rating);
      valueB = Number(b.rating);
    }

    return ascending ? valueA - valueB : valueB - valueA;
  });

  const handleSort = (type: SortType) => {
    if (sortBy === type) {
      setAscending((prev) => !prev);
    } else {
      setSortBy(type);

      if (type === "rating") {
        setAscending(false);
      } else {
        setAscending(true);
      }
    }

    setSortOpen(false);
  };

  const getSortLabel = () => {
    if (sortBy === "duration") {
      return "Duration";
    }

    if (sortBy === "calories") {
      return "Calories";
    }

    return "Rating";
  };

  return (
    <div className="mx-auto min-h-screen w-full max-w-360 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="w-full">
        <div className="mb-6">
          <h1 className="text-[30px] font-bold text-white sm:text-[32px]">
            MY PLAN
          </h1>

          <p className="text-[14px] text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div
          className="
            mb-6
            grid
            grid-cols-1
            overflow-hidden
            rounded-xl
            border
            border-[#252830]
            sm:grid-cols-3
          "
          style={{ backgroundColor: "#15171D" }}
        >
          <div
            className="
              px-6 py-5
              sm:border-r
              sm:border-[#252830]
              sm:px-8 sm:py-6
            "
          >
            <p className="mb-1 text-xs text-[#8A92A0]">Exercises</p>

            <p className="text-2xl font-extrabold" style={{ color: "#CCFF00" }}>
              {totalExercises}
            </p>
          </div>

          <div
            className="
              border-t border-[#252830]
              px-6 py-5
              sm:border-t-0
              sm:border-r
              sm:px-8 sm:py-6
            "
          >
            <p className="mb-1 text-xs text-[#8A92A0]">Minutes</p>

            <p className="text-2xl font-extrabold text-white">{totalMinutes}</p>
          </div>

          <div
            className="
              border-t border-[#252830]
              px-6 py-5
              sm:border-t-0
              sm:px-8 sm:py-6
            "
          >
            <p className="mb-1 text-xs text-[#8A92A0]">Calories</p>

            <p className="text-2xl font-extrabold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div
          className="
            mb-4
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              w-fit
              items-center
              gap-1
              rounded-full
              p-1
            "
            style={{ backgroundColor: "#15171D" }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className="
                rounded-full
                px-4 py-1.5
                text-sm
                font-medium
                transition-colors
              "
              style={
                activeTab === "plan"
                  ? {
                      backgroundColor: "#2D313B",
                      color: "#FFFFFF",
                    }
                  : {
                      color: "#8A92A0",
                    }
              }
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className="
                rounded-full
                px-4 py-1.5
                text-sm
                font-medium
                transition-colors
              "
              style={
                activeTab === "saved"
                  ? {
                      backgroundColor: "#2D313B",
                      color: "#FFFFFF",
                    }
                  : {
                      color: "#8A92A0",
                    }
              }
            >
              Saved
            </button>
          </div>

          <div
            className="
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-center
              sm:gap-3
            "
          >
            <span className="text-sm text-[#8A92A0]">Sort By</span>

            <div className="relative w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSortOpen((prev) => !prev)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-5
                  rounded-lg
                  border
                  px-3 py-2
                  text-sm
                  text-white
                  transition
                  hover:bg-[#1E2330]
                  sm:min-w-32
                  sm:py-1.5
                "
                style={{
                  borderColor: "#2D313B",
                  backgroundColor: "#15171D",
                }}
              >
                <span>{getSortLabel()}</span>

                <span
                  className={`text-xs text-[#8A92A0] transition-transform ${
                    sortOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {sortOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-full
                    z-50
                    mt-2
                    w-full
                    overflow-hidden
                    rounded-lg
                    border
                    border-[#2D313B]
                    p-1
                    shadow-xl
                    sm:w-40
                  "
                  style={{
                    backgroundColor: "#15171D",
                  }}
                >

                  <button
                    type="button"
                    onClick={() => handleSort("duration")}
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-md
                      px-3
                      py-2
                      text-left
                      text-sm
                      transition
                      ${
                        sortBy === "duration"
                          ? "bg-[#2D313B] text-white"
                          : "text-[#8A92A0] hover:bg-[#1E2330] hover:text-white"
                      }
                    `}
                  >
                    <span>Duration</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSort("calories")}
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-md
                      px-3
                      py-2
                      text-left
                      text-sm
                      transition
                      ${
                        sortBy === "calories"
                          ? "bg-[#2D313B] text-white"
                          : "text-[#8A92A0] hover:bg-[#1E2330] hover:text-white"
                      }
                    `}
                  >
                    <span>Calories</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSort("rating")}
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-md
                      px-3
                      py-2
                      text-left
                      text-sm
                      transition
                      ${
                        sortBy === "rating"
                          ? "bg-[#2D313B] text-white"
                          : "text-[#8A92A0] hover:bg-[#1E2330] hover:text-white"
                      }
                    `}
                  >
                    <span>Rating</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="min-h-65 w-full rounded-xl">
          {activeList.length === 0 ? (
            <div className="flex min-h-65 items-center justify-center px-4">
              <div className="text-center">
                <h2 className="mb-1 text-lg font-extrabold text-white">
                  {activeTab === "plan"
                    ? "NOTHING HERE YET"
                    : "NO SAVED EXERCISES"}
                </h2>

                <p className="mb-5 text-sm text-[#8A92A0]">
                  {activeTab === "plan"
                    ? "Browse the library and add a lift to get today moving."
                    : "Save your favorite exercises and they will appear here."}
                </p>

                <Link
                  href="/exercises"
                  className="
                    inline-block
                    rounded-full
                    px-5 py-2.5
                    text-sm
                    font-bold
                    transition
                    hover:opacity-90
                  "
                  style={{
                    backgroundColor: "#CCFF00",
                    color: "#000000",
                  }}
                >
                  Go to workouts
                </Link>
              </div>
            </div>
          ) : (
            <div className="w-full space-y-3 py-3">
              {sortedList.map((exercise) =>
                activeTab === "plan" ? (
                  <PlanCard key={exercise.id} exercise={exercise} />
                ) : (
                  <SaveCard key={exercise.id} exercise={exercise} />
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
