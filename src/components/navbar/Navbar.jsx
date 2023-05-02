import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white ">
      <div className="flex justify-between">
        <div className="flex ml-8">
          <img
            className="w-44 h-20 text-white"
            src="https://quizapi.io/storage/QuizApi_Logo_White.png"
            alt=""
          />
        </div>
        <div className="flex mr-8 mt-6">
          <h2 className="lg:mr-10 mr-4 lg:font-base lg:text-xl">FEATURES</h2>
          <h2 className="lg:mr-10 mr-4 lg:font-base lg:text-xl">API</h2>
          <h2 className="lg:mr-10 mr-4 lg:font-base lg:text-xl">QUIZE</h2>
          <h2 className="lg:mr-10 mr-4 lg:font-base lg:text-xl">CONTACT</h2>
          <h2 className="lg:mr-10 mr-4 lg:font-base lg:text-xl">CONTRIBUTE</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
