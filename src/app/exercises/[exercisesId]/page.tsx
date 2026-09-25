import React from "react";
import Image from "next/image";
import { IExercise } from "../../../../Types/Type";
import "../../globals.css";
import AddButton from "@/app/components/Buttons/AddButton";
import AddSaveButton from "@/app/components/Buttons/AddSaveButton";

interface ParamsPropType {
  params: Promise<{
    exercisesId: string;
  }>;
}

const fetchExercises = async (): Promise<IExercise[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const exercises: IExercise[] = await response.json();

  return exercises;
};

const DetailsPage = async ({ params }: ParamsPropType) => {
  const { exercisesId } = await params;

  const exercisesData = await fetchExercises();

  const exercise = exercisesData.find(
    (exercise: IExercise) => String(exercise.id) === String(exercisesId),
  );

  if (!exercise) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-white">
        Exercise not found.
      </div>
    );
  }

  const infoRows = [
    { label: "EQUIPMENT", value: exercise.equipment },
    { label: "DIFFICULTY", value: exercise.difficulty },
    { label: "SETS", value: exercise.sets },
    { label: "REPS", value: exercise.reps },
    { label: "DURATION", value: `${exercise.duration} min` },
    { label: "CALORIES", value: `${exercise.caloriesBurned} kcal` },
    { label: "RATING", value: exercise.rating },
  ];

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-[#15171D] lg:top-8 lg:self-start">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="min-w-0">
          {/* Title */}
          <h1 className="mb-3 text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
            {exercise.name}
          </h1>

          {/* Description */}
          <p className="mb-5 text-sm leading-6 text-[#9CA3AF] sm:text-base">
            {exercise.description}
          </p>

          {/* Muscle Groups */}
          <div className="mb-7 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full px-3 py-1 text-xs font-extrabold uppercase"
                style={{
                  backgroundColor: "#CCFF00",
                  color: "#000000",
                }}
              >
                {group}
              </span>
            ))}
          </div>

          <div className="mb-8 w-full overflow-hidden rounded-2xl bg-[#1E2330]">
            {infoRows.map((row, index) => (
              <React.Fragment key={row.label}>
                <div className="flex min-h-12 items-center justify-between gap-4 px-4 py-3 text-sm sm:px-5">
                  <span className="shrink-0 font-medium tracking-wide text-[#9CA3AF]">
                    {row.label}
                  </span>

                  <span className="min-w-0 text-right font-medium text-white">
                    {row.value}
                  </span>
                </div>

                {index !== infoRows.length - 1 && (
                  <hr className="border-[#2D313B]" />
                )}
              </React.Fragment>
            ))}
          </div>

          <section>
            <h2 className="mb-3 text-lg font-extrabold uppercase text-white">
              Instructions
            </h2>

            <ol className="mb-8 space-y-3">
              {exercise.instructions.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-[#D1D5DB]"
                >
                  <span className="shrink-0 text-[#9CA3AF]">{index + 1}.</span>

                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="flex flex-col gap-3 pb-4 sm:flex-row">
            <AddButton exercise={exercise}></AddButton>

            <AddSaveButton exercise={exercise}></AddSaveButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;

