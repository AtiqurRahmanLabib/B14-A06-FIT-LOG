import Image from "next/image";
import { IExercise } from "../../../../Types/Type";
import Link from "next/link";
import { FaFire, FaRegClock, FaRegStar } from "react-icons/fa";

interface ExercisePropType {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExercisePropType) => {
  return (
    <Link href={`/exercises/${exercise.id}`}>
      <div
        className="
      mx-auto
      w-full
      max-w-98.5
      overflow-hidden
      rounded-2xl
      border
      border-transparent
      bg-[#15171D]
      // transition-all
      // duration-300
      // hover:-translate-y-
      hover:border-[#CCFF00]
      // hover:shadow-[0_0_20px_rgba(204,255,0,0.18)]
    "
        style={{ backgroundColor: "#15171D" }}
      >
        <div className="relative h-47.5 w-full sm:h-48">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
            className="object-cover"
          />
        </div>

        <div className="p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-extrabold text-black"
              >
                {muscle.toUpperCase()}
              </span>
            ))}
          </div>

          <h3 className="mb-1 text-lg font-extrabold uppercase text-white sm:text-xl">
            {exercise.name}
          </h3>

          <p className="mb-4 text-sm text-[#9CA3AF]">{exercise.equipment}</p>

          <div className="mb-4 border-t border-[#2D313B]" />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9CA3AF] sm:gap-5 sm:text-sm">
            <div className="flex items-center gap-1.5">
              <FaRegClock className="text-[#CCFF00]"/>

              <span>{exercise.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaFire className="text-[#CCFF00]"/>
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaRegStar className="text-[#CCFF00]"/>
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
