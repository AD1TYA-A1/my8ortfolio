"use client";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  const handleScrollToPosition = (value) => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: value, // Scroll to 800px from top
        behavior: "smooth", // Smooth scrolling animation
      });
    }
  };
  return (
    <nav className=" flex items-center justify-evenly bg-black  sticky top-0  w-full z-50    lg:bg-black h-16 lg:h-32 ">
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
      <div className="about">
        {" "}
        <button
          className=" flex flex-col items-center justify-center cursor-pointer font-bold hover:text-purple-400   "
          onClick={() => handleScrollToPosition(650)}
        >
          {" "}
          <lord-icon
            src="https://cdn.lordicon.com/ssartdnc.json"
            trigger="hover"
            stroke="bold"
            className="w-[10px] h-[10px] lg:w-[30px] lg:h-[30px] "
            colors="primary:#ffffff,secondary:#a866ee"
          ></lord-icon>
          <span className=" text-[10px] md:text-[20px]">About</span>
        </button>
      </div>
      <div className="projects">
        {" "}
        <button className="  flex flex-col items-center justify-center cursor-pointer font-bold hover:text-purple-400 ">
          <lord-icon
            src="https://cdn.lordicon.com/jdgfsfzr.json"
            trigger="hover"
            stroke="bold"
            className="w-[10px] h-[10px] lg:w-[30px] lg:h-[30px] pt-2 "
            colors="primary:#ffffff,secondary:#a866ee"
          ></lord-icon>
          <Link href={"/project"}>
            <span className=" text-[10px] md:text-[20px]">Projects </span>
          </Link>
        </button>{" "}
      </div>
      <div className="logo">
        {" "}
        <button
          className=" flex items-center justify-center flex-col cursor-pointer font-bold hover:text-purple-400 "
          onClick={() => handleScrollToPosition(0)}
        >
          <lord-icon
            src="https://cdn.lordicon.com/obyhgzls.json"
            trigger="loop"
            stroke="bold"
            state="loop-cycle"
            colors="primary:#848484,secondary:#e88c30,tertiary:#ffc738,quaternary:#ebe6ef"
            className="w-[30px] h-[30px] lg:w-[90px] lg:h-[90px] "
          ></lord-icon>{" "}
          <span className="text-[4px] tracking-widest md:text-[8px]">
            ADITYA DEV X
          </span>
        </button>{" "}
      </div>
      <div className="skills">
        {" "}
        <button
          className=" flex flex-col items-center justify-center cursor-pointer font-bold hover:text-purple-400 "
          onClick={() => handleScrollToPosition(1370)}
        >
          <lord-icon
            src="https://cdn.lordicon.com/fiyxtklr.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#ffffff,secondary:#a866ee"
            className="w-[10px] h-[10px] lg:w-[30px] lg:h-[30px] "
          ></lord-icon>
          <span className=" text-[10px] md:text-[20px]">Skills </span>
        </button>{" "}
      </div>
      <div className="contact">
        {" "}
        <button
          className="  flex flex-col items-center justify-center cursor-pointer font-bold hover:text-purple-400 "
          onClick={() => handleScrollToPosition(2650)}
        >
          <lord-icon
            src="https://cdn.lordicon.com/ozlkyfxg.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#ffffff,secondary:#a866ee"
            className="w-[10px] h-[10px] lg:w-[30px] lg:h-[30px] "
          ></lord-icon>
          <span className=" text-[10px] md:text-[20px]">Contact </span>
        </button>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
