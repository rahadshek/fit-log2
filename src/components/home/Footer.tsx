import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className=" bg-[#0f0f0f]  sticky bottom-0 z-50">
      <footer className=" container mx-auto footer sm:footer-horizontal text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <Link href={"/"}>
            <div className="flex gap-2  ">
              <Image src={logo} alt="logo" width={40} height={40} />
              <h2 className=" btn-ghost text-xl font-semibold hidden lg:block ">
                FITLOG
              </h2>
            </div>
          </Link>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
