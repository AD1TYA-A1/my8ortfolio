import React, { useState, useEffect } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate transform values based on scroll position
  const getTransformStyle = () => {
    const scrollFactor = scrollY * 0.3; // Increased speed to move faster
    const opacity = Math.max(0, 1 - scrollY / 300); // Faster fade out, can go to 0
    const scale = Math.max(0.5, 1 - scrollY / 700); // Faster scale down

    return {
      transform: `translateY(${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: "all 0.1s ease-out",
    };  
  };

  return (
    <>
      <div className="lg:h-[80vh] h-[40vh] flex red border-2-center flex-col lg:w-[30075]  pt-22 lg:gap-12">
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <div className="text-[10px] text-yellow-500 font-bold lg:text-[20px]  flex items-center justify-center">
          Step into the Mind Of
        </div>
        <div className="  flex w-100px items-center justify-evenly gap-4  lg:gap-20">
          <div className=" lg:w-[152px] w-[76px] h-[40%] text-[15px] font-bold lg:h-[70%] flex flex-col justify-end items-center text-red-500">
            <div className="flex flex-col items-center justify-center">
              <lord-icon
                src="https://cdn.lordicon.com/wmqqbxlm.json"
                trigger="loop"
                stroke="bold"
                colors="primary:#121331,secondary:#ffc738,tertiary:#ebe6ef,quaternary:#8930e8,quinary:#000000"
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] "
              ></lord-icon>
              <div className=" text-[10px] w-16 lg:w-28 text-center lg:text-[16px]">You Dream You Achieve</div>
            </div>
          </div>
          <div className="font-bold flex flex-col items-center">
            <div
              className="lg:text-[200px] text-[40px]  border-red border-2 w-[150px] lg:w-[750px] flex justify-center items-center h-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={getTransformStyle()}
            >
              ADITYA
            </div>
          </div>
          <div className="text-[15px] font-bold lg:h-[76%] h-[43%] w-[102px] lg:w-[152]  border-black  flex flex-col justify-end  items-center text-pink-500">
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/sgqurkre.json"
              trigger="loop"
                className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] "
            ></lord-icon>
            <div className=" text-[10px] w-16 lg:w-28 text-center lg:text-[16px] ">
            We fly <div>We fly high</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-[10px] lg:text-[20px] text-purple-500 font-bold">
          Logic At every CODE
          <div>
            <img className="lg:h-10 lg:w-10 h-5 w-5" src="vsCode.png" alt="vsCode" />
          </div>
        </div>
      </div>
      <div className="w-[90vw] bg-zinc-700 rounded-4xl h-[1px] mt-20 lg:mt-9 mb-20 flex justify-center items-center m-auto"></div>
    </>
  );
};

export default Index;
