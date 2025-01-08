"use client";
import { Roboto_Condensed } from "next/font/google";
import Cursor from "../components/Cursor";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className={`w-full min-h-screen overflow-hidden font-ubuntu-condensed`}>
      <div
        className={`h-screen bg-[#f8e7dd] flex  items-center glaze`}
      >
        <Cursor />
        {/* header  */}
        <div className="flex justify-between items-center py-4 px-10 absolute top-0 w-full">
          <div className="text-2xl font-bold">Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#link1" className="text-lg">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#link2" className="text-lg">
                  Link 2
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Left side */}
        <div className="md:w-[70%] lg:w-2/3 w-full h-2/3 flex justify-center items-start md:p-20 p-14 flex-col uppercase font-extrabold md:text-9xl text-7xl md:text-left text-center">
          <h1><span className="drop-shadow-[0_0px_100px_rgba(250,204,21,1)]">BOOST</span> Your</h1>
          <p>
            <span className="stroke">Social</span> Game
          </p>
          <div className="text-3xl bg-yellow-400 relative z-10 -rotate-6 -mt-2 p-2">
            Fly high, don't just glide.
          </div>
          <p className="text-xl normal-case md:w-full lg:w-[70%] sm:w-4/5 w-[90%] mt-10 font-normal font-sans text-center md:text-left view">
            Helping individuals grow and develop their social media accounts by
            providing insights and strategies to increase engagement and reach.
          </p>
        </div>
        <div className="md:w-[30%] lg:w-1/3 hidden  h-2/3 md:flex justify-center items-center relative">
          {/* <Spline
          scene="" 
        /> */}
          <div className="relative grid grid-cols-2 grid-rows-2 w-full h-full gap-0">
            <div className="size-52 rounded-full bg-red-300/65 blur-xl opacity-50 mx-10 my-10"></div>
            <div className="size-52 rounded-full bg-green-300/65 blur-xl opacity-50"></div>
            <div className="size-52 rounded-full bg-blue-300/65 blur-xl opacity-50"></div>
            <div className="size-52 rounded-full bg-yellow-300/65 blur-xl opacity-50 -mx-10 -my-10"></div>
          </div>
        </div>
      </div>
      <div className="bg-black py-16">
      </div>
      <div
        className={`h-screen bg-black text-white text-center uppercase px-20`}
      >
        <p className="text-9xl font-bold stroke-white">100% Satisfied</p>
        <p className="text-9xl font-bold ">Creators WORLDWIDE</p>
        <p className="text-3xl mt-10 leading-10 normal-case">We believe in building long-term work relationships with investors. Therefore, we are
        committed to providing excellent support throughout their journey.</p>
      </div>
    </div>
  );
}
