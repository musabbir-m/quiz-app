import { Button } from "antd";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";


export function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2  bg-gray-800 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to='/' >
              <img
                className="w-44  text-white"
                src="https://quizapi.io/storage/QuizApi_Logo_White.png"
                alt=""
              />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MdOutlineMenu></MdOutlineMenu>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none items-center text-white lg:ml-auto ml-10">
              <Link to='/features' className="lg:mr-10 mr-4 lg:font-base lg:text-md">FEATURES</Link>
              <Link to='/api' className="lg:mr-10 mr-4 lg:font-base lg:text-md">API</Link>
              <Link to='/quiz' className="lg:mr-10 mr-4 lg:font-base lg:text-md">QUIZE</Link>
              <Link to='/contact' className="lg:mr-10 mr-4 lg:font-base lg:text-md">CONTACT</Link>
              <Link to='/contribute' className="lg:mr-10 mr-4 lg:font-base lg:text-md">CONTRIBUTE</Link>
              <p className="hidden lg:block">|</p>
              <Link to='/login' className="lg:mx-4 my-3 lg:my-0 lg:font-base lg:text-xl">
                <Button className=' text-xs border border-green-500 ' type="primary" shape="round">
                  Login
                </Button>
              </Link>
              <Link to='/signup' className="lg:mr-10 mr-4 lg:font-base lg:text-xl">
                <Button className=' border bg-lime-500 text-xs font-medium' type="primary" shape="round">
                  SignUp
                </Button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

{/* // <div className="bg-gray-800 text-white ">
      //   <div className="flex justify-between">
      //     <div className="flex ml-8">
      //       <Link to='/' >
      //         <img
      //           className="w-44 h-20 text-white"
      //           src="https://quizapi.io/storage/QuizApi_Logo_White.png"
      //           alt=""
      //         />
      //       </Link>
      //     </div>
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
              <Button className=' border bg-lime-500 text-xs font-medium' type="primary" shape="round">
                SignUp
              </Button>
            </Link>
          </div>
      //   </div> */}
export default Navbar;
