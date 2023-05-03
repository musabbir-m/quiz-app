import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white ">
      <div className="flex justify-between">
        <div className="flex ml-8">
          <Link to='/' >
            <img
              className="w-44 h-20 text-white"
              src="https://quizapi.io/storage/QuizApi_Logo_White.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex mr-8 mt-6">
          <Link to='/features' className="lg:mr-10 mr-4 lg:font-base lg:text-xl">FEATURES</Link>
          <Link to='/api' className="lg:mr-10 mr-4 lg:font-base lg:text-xl">API</Link>
          <Link to='/quiz' className="lg:mr-10 mr-4 lg:font-base lg:text-xl">QUIZE</Link>
          <Link to='/contact' className="lg:mr-10 mr-4 lg:font-base lg:text-xl">CONTACT</Link>
          <Link to='/contribute' className="lg:mr-10 mr-4 lg:font-base lg:text-xl">CONTRIBUTE</Link>
          <p>|</p>
          <Link to='/login' className="mx-4 lg:font-base lg:text-xl">
            <Button className=' text-xs border border-green-500 ' type="primary" shape="round">
              Login
            </Button>
          </Link>
          <Link to='/signup' className="lg:mr-10 mr-4 lg:font-base lg:text-xl">
            <Button className=' border bg-violet-500 text-xs font-medium' type="primary" shape="round">
              SignUp
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
