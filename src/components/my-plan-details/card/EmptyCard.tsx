import Link from "next/link";


const EmptyCard = () => {
  return (
    <div className=" border border-dashed  border-gray-700 rounded-xl p-10  bg-[#191e24]">
      <div className="flex flex-col justify-center items-center space-y-3 py-14 ">
        <h2 className="font-bold text-4xl">NOTHING HERE YET</h2>
        <p className="text-gray-400 text-2xl">Browse the library and add a lift to get today moving.</p>
        <Link href={"/propular"}>
          <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c2f800] px-5 py-3 font-semibold text-black transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-[#d4ff33] hover:shadow-[0_0_25px_rgba(194,248,0,0.25)] active:scale-95">
            Go to workouts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCard;
