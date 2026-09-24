// import { IExercise } from "../../../Types/Type";
import ExercisesCard from "../exercises/ExerciseCard";

import { IExercise } from "../../../../Types/Type";

const fetchExercises = async (): Promise<IExercise[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const exercises: IExercise[] = await response.json();

  return exercises;
};

const Exercises = async () => {
  const exercises = await fetchExercises();

  return (
    <main className="mx-auto w-full max-w-360 px-4 py-8 sm:px-6 lg:px-8">
      <div className="min-w-0">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          THE LIBRARY
        </h1>

        <p className="mt-1 text-sm text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>

        <div
          className="
            mt-6
            grid
            w-full
            min-w-0
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {exercises.map((exercise) => (
            <ExercisesCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Exercises;