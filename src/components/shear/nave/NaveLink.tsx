"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NaveLink = () => {
  const pathTheme = usePathname();

  const linkStyle = (href: string) =>
    `block rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-200 sm:px-4 sm:py-2.5 sm:text-base ${
      pathTheme === href ||
      (href === "/my-plan" && pathTheme.startsWith("/my-plan/"))
        ? "border-[#C2F800]/30 bg-[#C2F800]/10 text-[#C2F800] shadow-sm shadow-[#C2F800]/5"
        : "border-transparent text-gray-400 hover:border-gray-700 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <>
      <li>
        <Link href="/workout" className={linkStyle("/workout")}>
          Workouts
        </Link>
      </li>

      <li>
        <Link href="/my-plan" className={linkStyle("/my-plan")}>
          My Plan
        </Link>
      </li>
    </>
  );
};

export default NaveLink;
