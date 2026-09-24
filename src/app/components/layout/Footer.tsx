import Image from "next/image";
import logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1A1D24] bg-[#090A0D]">
      <div
        className="
          mx-auto
          flex
          min-h-25.25
          w-full
          max-w-360
          flex-col
          items-center
          justify-center
          gap-4
          px-4
          py-6
          text-center

          sm:flex-row
          sm:justify-between
          sm:gap-0
          sm:px-6
          sm:py-0

          lg:px-8
        "
      >
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src={logo}
            alt="FitLog logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />

          <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
            FITLOG
          </span>
        </div>

        <p className="max-w-[320px] text-xs leading-relaxed text-[#9CA3AF] sm:max-w-none sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}