import React from "react";
import heroImg from "../../assets/gymcell.jpg";
import heroVideo from "../../assets/gcell.mp4";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        alt="gymcell"
        className="w-full h-[600px] md:h-[800px] lg:h-[1290px] object-cover"
      />
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        <div className="text-center text-white py-6">
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase mt-100 lg:text-7xl">
            Champs first choice
          </h1>
          <div>
            <p className=" text-xl tracking-tighter md:text-1xl mt-8">
              "Where Style Meets Strength."
            </p>
            <Link
              to="/collections/all"
              className=" bg-white text-gray-950 px-5 py-1 rounded-sm text-lg "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
