import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-8 rounded-2xl bg-[#15171d] px-4 sm:my-10 sm:px-6 lg:my-16 lg:px-0">
      <div className="flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/5 from-[#1b2019] via-[#15171d] to-[#101116] px-5 py-8 sm:px-8 sm:py-10 md:gap-10 lg:flex-row lg:px-10 lg:py-12 xl:px-14">
        <div className="w-full space-y-4 text-center lg:w-1/2 lg:text-left">
          <p className="inline-block text-sm font-semibold tracking-[0.2em] text-[#c2f800] sm:text-base">
            WORKOUT LIBRARY
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-gray-400 sm:text-base lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#c2f800] px-5 py-3 font-semibold text-black transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-[#d4ff33] hover:shadow-[0_0_25px_rgba(194,248,0,0.25)] active:scale-95">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="w-full min-w-0 lg:w-1/2">
          <div className="relative mx-auto w-full max-w-[400px] animate-[float_5s_ease-in-out_infinite]">
            <div className="absolute inset-10 rounded-full " />

            <Image
              src={banner}
              alt="FitLog workout banner"
              width={400}
              height={400}
              priority
              className="relative h-[280px] w-full object-contain transition-transform duration-500 hover:scale-105 sm:h-[350px] lg:h-[400px]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
