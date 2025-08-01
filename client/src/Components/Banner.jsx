import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:items-start items-center justify-between
    px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558fe] to-[#a9cfff] max-w-12xl md:mx-auto mx-3
    overflow-hidden">
      <div className="text-white">
        <h2 className="text-3xl font-medium">Do You Own a Luxury Car?</h2>
        <p className="mt-3">
          Monetize your vehicle effortlessly by listing it for car rental,
          turning your idle asset into a steady stream of income.
        </p>
        <p className="max-w-153">
          We can take insurance, Driver Verification and secure payments- so You
          can earn passive income, Stress free
        </p>

        <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all
        text-primary rounded-lg text-sm mt-4 cursor-pointer">List Your car</button>
      </div>

      <img
        src={assets.banner_car_image}
        alt="banner image not found check image path"
        className="max-h-45 mt-10"
      />
    </div>
  );
};

export default Banner;
