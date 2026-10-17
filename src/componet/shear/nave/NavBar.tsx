import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import NaveLink from "./NaveLink";

const NavBarPage = () => {
  return (
    <div className="navbar bg-[#0f0f0f] shadow-sm  border-b border-gray-600 sticky top-0 z-50 ">
      <div className=" container mx-auto flex min-h-20 items-center justify-between px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {<NaveLink />}
            </ul>
          </div>
          <Link href={"/"}>
            <div className="flex gap-2  ">
              <Image src={logo} alt="logo" width={40} height={40} />
              <h2 className=" btn-ghost text-xl font-semibold hidden lg:block ">
                FITLOG
              </h2>
            </div>
          </Link>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="flex justify-between gap-4 "> {<NaveLink />}</ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="flex items-center gap-2 text-gray-400 ">
            Plan{" "}
            <span
              className={` text-black rounded-full px-1 flex justify-center items-center h-5 w-5  bg-[#b7e707] text-xs`}
            >
              0
            </span>{" "}
          </a>
          <a className="flex items-center gap-1 text-gray-400 ">
            Save{" "}
            <span
              className={`  rounded-full px-1 flex justify-center items-center h-5 w-5 bg-black text-white text-xs `}
            >
              0
            </span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBarPage;
