import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col items-center justify-center gap-3 p-4 text-neutral-content sm:flex-row sm:justify-between">
      <aside className="flex w-full justify-center sm:w-auto">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h2 className="text-xl font-semibold">FITLOG</h2>
        </Link>
      </aside>

      <nav className="w-full text-center text-gray-400 sm:w-auto">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </nav>
    </footer>
  );
};

export default Footer;
