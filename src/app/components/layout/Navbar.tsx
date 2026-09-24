import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <div className="bg-[#0C0D10]">
      <nav
        className="
      container
      mx-auto
        w-full
        min-h-18
        flex items-center justify-between
        px-4 sm:px-6 lg:px-8
        gap-4
      "
        style={{ backgroundColor: "#0C0D10" }}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Image
            className="w-6 h-6 sm:w-7 sm:h-7"
            src={Logo}
            alt="FitLog Logo"
            width={600}
            height={400}
          />

          <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
            FITLOG
          </span>
        </div>

        {/* Center: Nav links */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            className="
            px-3 sm:px-4
            py-1.5
            rounded-full
            text-xs sm:text-sm
            font-medium
            whitespace-nowrap
          "
            style={{
              backgroundColor: "#1A2312",
              color: "#CCFF00",
            }}
          >
            Workouts
          </button>

          <button
            className="
            px-3 sm:px-4
            py-1.5
            rounded-full
            text-xs sm:text-sm
            font-medium
            whitespace-nowrap
          "
            style={{ color: "#9CA3AF" }}
          >
            My Plan
          </button>
        </div>

        {/* Right: Plan & Saved counters */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          {/* Plan */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className="text-xs sm:text-sm font-medium"
              style={{ color: "#FFFFFF" }}
            >
              Plan
            </span>

            <span
              className="
              flex items-center justify-center
              w-5 h-5
              rounded-full
              text-[10px] sm:text-xs
              font-bold
            "
              style={{
                backgroundColor: "#CCFF00",
                color: "#000000",
              }}
            >
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className="text-xs sm:text-sm font-medium"
              style={{ color: "#9CA3AF" }}
            >
              Saved
            </span>

            <span
              className="
              flex items-center justify-center
              w-5 h-5
              rounded-full
              text-[10px] sm:text-xs
              font-bold
            "
              style={{
                backgroundColor: "#D1D5DB",
                color: "#000000",
              }}
            >
              0
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
