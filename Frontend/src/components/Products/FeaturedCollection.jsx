import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/cb.jpg";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* LeftContent */}
        <div className="lg:2-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel Made for the Champions
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover Your Full Potential with our Gym Wear. GYM CELL-A perfect
            partner where "Style meets the Strength".
          </p>
          <Link
            to="/collections/all"
            className="text-white bg-black px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
            alt="Featured Collection"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
