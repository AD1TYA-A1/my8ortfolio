import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        setElementTop(elementTop);
      }
    };

    const handleResize = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        setElementTop(elementTop);
      }
    };

    // Initial setup
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate relative scroll position for this component
  // Animation starts at 650px and ends at 900px
  const getRelativeScroll = () => {
    const startScroll = 700; // Start animations at 650px scroll
    const endScroll = 1300;   // End animations at 900px scroll
    
    if (scrollY < startScroll) return 0; // No animation before 650px
    if (scrollY > endScroll) return endScroll - startScroll; // Max animation after 900px
    
    return scrollY - startScroll; // Animation progress between 650-900px
  };

  // Fast scroll effect for heading
  const getHeadingTransformStyle = () => {
    const relativeScroll = getRelativeScroll();
    const scrollFactor = relativeScroll * 0.8;
    const opacity = Math.max(0, 1 - relativeScroll / 200); // Fade out over 200px
    const scale = Math.max(0.5, 1 - relativeScroll / 150); // Scale down over 150px
    
    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: 'all 0.05s ease-out'
    };
  };

  // Fast scroll effect for service blocks
  const getBlockTransformStyle = (delay = 0) => {
    const relativeScroll = Math.max(0, getRelativeScroll() - delay);
    const scrollFactor = relativeScroll * 0.6;
    const opacity = Math.max(0, 1 - relativeScroll / 150); // Fade out over 150px
    const scale = Math.max(0.6, 1 - relativeScroll / 200); // Scale down over 200px
    
    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: 'all 0.05s ease-out'
    };
  };

  return (
    <>
      <div ref={aboutRef} className=" lg:h-[80vh] h-[800px] flex flex-col items-center gap-10">
        <div 
          className="mt-5 lg:text-3xl text-[16px] border-5 tracking-[6px] lg:w-72 w-50 font-bold lg:h-16  h-10 flex items-center justify-center"
          style={getHeadingTransformStyle()}
        >
          ABOUT ME
        </div>
        <div 
          className="lg:w-[70vw] w-[40vw]  lg:text-[13px] text-[8px] flex items-center justify-center text-center"
          style={getBlockTransformStyle(50)}
        >
          Hey I am Aditya Gaur. I will write more here
        </div>
        <div className="w-[75vw] gap-10 h-[120vh] flex flex-col justify-center items-center">
          <div className="w-[90%] h-[80%] flex justify-evenly items-center">
            <div 
              className="  flex flex-col  gap-5 items-center justify-center lg:w-[40%] w-[50%] h-[100%]"
              style={getBlockTransformStyle(100)}
            >
              <div className="font-bold lg:tracking-[12px] tracking-[6px] lg:text-[24px] text-[12px] text-yellow-500">
                DESIGN
              </div>
              <div className="lg:text-[15px]  text-[10px] font-bold text-center h-[140px]  text-yellow-200">
                I build beautiful, responsive web experiences using Tailwind
                CSS, Bootstrap, and modern UI/UX principles. From wireframes to
                pixel-perfect interfaces, I create digital products that look
                stunning and work flawlessly.
              </div>
              <div className="font-bold lg:text-[12px] text-[7px] text-center text-gray-400">
                Clean code. Beautiful design. Seamless user experience.
              </div>
            </div>
            <div 
              className="  flex  pb-3 flex-col gap-5 items-center relative top-2 justify-center  w-[50%] h-[100%]"
              style={getBlockTransformStyle(150)}
            >
              <div className="  font-bold lg:tracking-[6px] tracking-[3px] lg:text-[24px] text-[13px] text-yellow-500">
                DEVELOPMENT
              </div>
              <div className="lg:text-[15px] text-[10px] font-bold text-center h-[140px] text-yellow-200">
                I build full-stack applications with Next.js, from database
                design to secure API integrations. Expert in backend systems,
                authentication, and performance optimization.
              </div>
              <div className="font-extrabold lg:text-[12px] text-[7px] text-center text-gray-400">
                End-to-end solutions. Secure backends.
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[80%] flex justify-center ">
            <div 
              className="flex flex-col gap-5 items-center justify-center w-[40%] h-[100%]"
              style={getBlockTransformStyle(200)}
            >
              <div className="font-bold lg:tracking-[12px] tracking-[6px] lg:text-[24px] text-[12px]  text-yellow-500">
                MAINTENANCE
              </div>
              <div className="lg:text-[15px] text-[10px] font-bold text-center  lg:h-[100px] h-[180px] text-yellow-200">
                I provide ongoing website maintenance, security updates, and performance monitoring. Keeping your digital assets running smoothly with regular backups, bug fixes, and feature enhancements.
              </div>
              <div className="font-extrabold lg:text-[12px] text-[7px] text-center flex items-center justify-center text-gray-400">
                Always updated. Always secure. Always performing.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] bg-zinc-700 rounded-4xl h-[1px] lg:mt-40 mt-10 lg:mb-20 mb-5 flex justify-center items-center m-auto"></div>
    </>
  );
};

export default About;