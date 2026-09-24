import Image from "next/image";
import Banner from "@/assets/banner.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto w-full max-w-360 px-4 pt-8 sm:px-6 lg:px-8">
      <div
        className="
          flex
          min-h-130
          w-full
          flex-col
          items-center
          justify-between
          gap-10
          overflow-hidden
          rounded-2xl
          bg-[#1A1D23]
          px-6
          py-10

          sm:px-8
          sm:py-12

          lg:min-h-122
          lg:flex-row
          lg:gap-8
          lg:px-12
          lg:py-10

          xl:px-20
        "
      >
        <div className="w-full max-w-2xl text-left lg:text-left">
          <p className="text-[10px] font-bold tracking-wider text-[#C2F800] sm:text-[11px]">
            WORKOUT LIBRARY
          </p>

          <h1
            className="
              mt-3
              text-3xl
              font-extrabold
              leading-tight
              text-white

              sm:text-4xl

              md:text-5xl

              lg:text-[52px]

              xl:text-[60px]
            "
          >
            TRAIN WITH INTENT. LOG
            <br className="hidden sm:block" />
            EVERY SET.
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-[#9CA3AF]

              sm:text-[15px]

              lg:mx-0
              lg:text-[16px]
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the weeks work add up.
          </p>

          <Link
            href="/exercises"
            className="
              mt-7
              flex
              h-10
              w-full
              max-w-44.75
              items-center
              justify-center
              rounded-md
              bg-[#C2F800]
              text-xs
              font-bold
              text-black
              transition
              hover:bg-[#d0ff29]
              active:scale-95

              sm:mt-8

              lg:mt-10
            "
          >
            BROWSE WORKOUTS
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-[42%] lg:justify-end">
          <Image
            src={Banner}
            alt="FitLog workout banner"
            priority
            className="
              h-auto
              w-55
              object-contain

              sm:w-70

              md:w-82.5

              lg:w-90

              xl:w-105
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;