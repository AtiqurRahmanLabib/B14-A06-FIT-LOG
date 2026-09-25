"use client";

import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExerciseContext } from "@/context/ExerciseContext";
import { useContext } from "react";

export default function Navbar() {
  const { addPlan, addSave } = useContext(ExerciseContext);
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Workouts",
      href: "/exercises",
    },
    {
      name: "My Plan",
      href: "/my-plan",
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[#0C0D10]">
      <nav className="mx-auto flex h-18 w-full max-w-360 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              className="h-6 w-6 sm:h-7 sm:w-7"
              src={Logo}
              alt="FitLog Logo"
              width={600}
              height={400}
            />

            <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              FITLOG
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                  isActive
                    ? "bg-[#1A2312] text-[#CCFF00]"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Plan / Saved */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-medium text-white sm:text-sm">
              Plan
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] text-[10px] font-bold text-black sm:text-xs">
              {addPlan.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-medium text-[#9CA3AF] sm:text-sm">
              Saved
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D1D5DB] text-[10px] font-bold text-black sm:text-xs">
              {addSave.length}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
