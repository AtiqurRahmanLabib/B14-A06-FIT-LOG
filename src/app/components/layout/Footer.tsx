import Image from "next/image";
import logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-[#090A0D]">
      <footer
        className="
        container mx-auto
        w-full
        min-h-25.25
        flex flex-col sm:flex-row
        items-center
        justify-center sm:justify-between
        gap-4 sm:gap-0
        px-4 sm:px-6 lg:px-8
        py-6 sm:py-0
        border-t
        text-center sm:text-left
      "
        style={{
          backgroundColor: "#090A0D",
          borderColor: "#1A1D24",
        }}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Image
            src={logo}
            alt="FitLog logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />

          <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
            FITLOG
          </span>
        </div>

        {/* Right: Copyright */}
        <p
          className="
          text-xs sm:text-sm
          leading-relaxed
          max-w-[320px] sm:max-w-none
        "
          style={{ color: "#9CA3AF" }}
        >
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </footer>
    </div>
  );
}
