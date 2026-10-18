"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NaveLink = () => {
  const pathTheme = usePathname();
  return (
    <>
      <li>
        <Link
          href={"/workout"}
          className={` rounded-xl px-3 py-1  ${pathTheme === "/workout" ? "bg-[#5d7449] text-[#C2F800] font-semibold" : "text-gray-400"}`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href={"/my-plan"}
          className={` rounded-xl px-3 py-1  ${pathTheme === "/my-plan" ? "bg-[#5d7449] text-[#C2F800] font-semibold" : "text-gray-400"}`}
        >
          My Plan
        </Link>
      </li>
    </>
  );
};

export default NaveLink;
