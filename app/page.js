"use client";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Index from "./components/Index";
import Link from "next/link";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [skillsTop, setSkillsTop] = useState(0);
  const [contactTop, setContactTop] = useState(0);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update skills section position
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        setSkillsTop(window.scrollY + rect.top);
      }

      // Update contact section position
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        setContactTop(window.scrollY + rect.top);
      }
    };

    const handleResize = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        setSkillsTop(window.scrollY + rect.top);
      }
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        setContactTop(window.scrollY + rect.top);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Skills section scroll animations (1200px to 1600px)
  const getSkillsRelativeScroll = () => {
    const startScroll = 1600;
    const endScroll = 1800;

    if (scrollY < startScroll) return 0;
    if (scrollY > endScroll) return endScroll - startScroll;

    return scrollY - startScroll;
  };

  const getSkillsAnimationStyle = (delay = 0) => {
    const relativeScroll = Math.max(0, getSkillsRelativeScroll() - delay);
    const scrollFactor = relativeScroll * 0.5;
    const opacity = Math.max(0, 1 - relativeScroll / 300);
    const scale = Math.max(0.7, 1 - relativeScroll / 250);

    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: "all 0.05s ease-out",
    };
  };

  // Contact section scroll animations (2000px to 2400px)
  const getContactRelativeScroll = () => {
    const startScroll = 2800;
    const endScroll = 3000;

    if (scrollY < startScroll) return 0;
    if (scrollY > endScroll) return endScroll - startScroll;

    return scrollY - startScroll;
  };

  const getContactAnimationStyle = (delay = 0) => {
    const relativeScroll = Math.max(0, getContactRelativeScroll() - delay);
    const scrollFactor = relativeScroll * 0.4;
    const opacity = Math.max(0, 1 - relativeScroll / 300);
    const scale = Math.max(0.8, 1 - relativeScroll / 200);

    return {
      transform: `translateY(-${scrollFactor}px) scale(${scale})`,
      opacity: opacity,
      transition: "all 0.05s ease-out",
    };
  };

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // console.log(data);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      email: data.email,
      fName: data.fName,
      lName: data.lName,
      message: data.message,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    toast("We will Reach You Shortly ❤️ !!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    reset();
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="main md:h-[3500px] h-[2600px] text-white text-2xl">
        <Navbar />
        <Index />
        <About />

        {/* Skills Section with Animations */}
        <div
          ref={skillsRef}
          className="skills flex flex-col items-center gap-10 justify-center w-[90vw] mx-auto "
        >
          <div
            className="mt-5 text-3xl border-5 md:tracking-[8px] tracking-[5px] md:w-82 w-52 font-bold md:h-20 h-14 flex items-center justify-center"
            style={getSkillsAnimationStyle(0)}
          >
            SKILLS
          </div>

          <div className="  flex flex-col md:gap-15 gap-8 md:items-center items-start  w-[80%]">
            <div
              className="w-[60%] md:w-full  md:pl-32 pl-0 font-bold md:text-[28px] text-[12px]  tracking-[5px]  flex md:justify-start "
              style={getSkillsAnimationStyle(50)}
            >USING NOW:
            </div>

            {/* First row of skills */}
            <div
              className="flex w-[100%] md:gap-15 gap-8  items-center justify-center"
              style={getSkillsAnimationStyle(100)}
            >
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="html480.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="HTML_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px] ">HTML</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="css.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="CSS_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">CSS</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="js.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="JAVASCRIPT_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">JavaScript</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="tailwind.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="TAILWIND_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Tailwind</span>
              </div>
            </div>

            {/* Second row of skills */}
            <div
              className="flex w-[100%] gap-5 items-center justify-center"
              style={getSkillsAnimationStyle(150)}
            >
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="express.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="EXPRESS_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Express JS</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="bootstrap.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="BOOTSTRAP_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Bootstrap</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="mongo.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="MONGO_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Mongo DB</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="nextJS.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="NEXTJS_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Next JS</span>
              </div>
            </div>

            {/* Third row of skills */}
            <div
              className="flex w-[100%] gap-5 items-center justify-center"
              style={getSkillsAnimationStyle(200)}
            >
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="git.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="GIT_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">Git</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="github.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="GITHUB_LOGO"
                />
                <span className="font-bold md:text-2xl text-[12px]">GitHub</span>
              </div>
            </div>
          </div>

          {/* Learning Section */}
          <div className="  flex flex-col md:gap-15 gap-6 items-center w-[80%]">
            <div
              className="w-[100%]  md:pl-32 pl-0 font-bold md:text-[28px] text-[12px]  tracking-[5px]  flex"
              style={getSkillsAnimationStyle(250)}
            >
              LEARNING:
            </div>
            <div
              className="flex w-[100%] md:gap-15 gap-8  md:pl-25 "
              style={getSkillsAnimationStyle(300)}
            >
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="typescript.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="TYPESCRIPT_LOGO"
                />
                <span className="font-bold  md:text-2xl text-[12px]">TypeScript</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="java.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="JAVA_LOGO"
                />
                <span className="font-bold  md:text-2xl text-[12px]">Java</span>
              </div>
              <div className="w-[15%] gap-2 flex items-center justify-center flex-col">
                <img
                  src="sql.png"
                  className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
                  alt="SQL_LOGO"
                />
                <span className="font-bold  md:text-2xl text-[12px]">MySQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90vw] bg-zinc-700 rounded-4xl h-[1px] md:mt-40 mt-20 md:mb-20 mb-10 flex justify-center items-center m-auto"></div>

        {/* Contact Section with Animations */}
        <div ref={contactRef} className=" contact w-full h-[380px] md:[600px] pt-10 flex">
          <div className="conInputs md:w-[60%] w-[50%] h-full gap-10 flex items-center justify-center flex-col">
            <div
              className="mt-5 md:text-3xl text-[16px] border-5 md:tracking-[6px] tracking-[3px] md:w-72 w-36 font-bold md:h-16 h-8 flex items-center justify-center"
              style={getContactAnimationStyle(0)}
            >
              CONTACT
            </div>
            <div
              className="md:text-[15px] text-[10px]  font-bold text-gray-400 relative bottom-5"
              style={getContactAnimationStyle(50)}
            >
              Just drop your details we will reach you!!
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative -top-15 md:top-0 form mt-10 border-red-700 flex flex-col gap-5 items-center w-full h-90"
              style={getContactAnimationStyle(100)}
            >
              <div className="flex items-center justify-center w-[90%]">
                <span className="md:text-[12px] text-[6px] md:w-25 w-20 flex items-center justify-center font-bold text-indigo-400 ">
                  First Name:
                </span>
                <input
                  type="text"
                  placeholder="First Name"
                  className="md:h-[30px] h-[15px] md:w-[170px] w-[60px] bg-zinc-700 placeholder:md:px-4 md:px-4 px-2 focus:outline-3 focus:outline-purple-500 md:text-[14px] text-[6px] rounded-2xl placeholder:font-bold font-bold"
                  {...register("fName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: { value: 3, message: "Min length is 3" },
                    maxLength: { value: 8, message: "Max length is 8" },
                  })}
                />
                {errors.fName && (
                  <div className="text-red-500 text-[10px] flex items-center justify-center pl-3">
                    {errors.fName.message}
                  </div>
                )}
                <span className="  md:text-[12px] text-[6px] md:w-25 w-20 flex items-center justify-center font-bold text-indigo-400">
                  Last Name:
                </span>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="md:h-[30px] h-[15px] md:w-[170px] w-[50px] bg-zinc-700 placeholder:md:px-4 md:px-4 px-2 focus:outline-3 focus:outline-purple-500 md:text-[14px] text-[6px] rounded-2xl placeholder:font-bold font-bold"
                  {...register("lName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: { value: 3, message: "Min length is 3" },
                    maxLength: { value: 8, message: "Max length is 8" },
                  })}
                />
                {errors.lName && (
                  <div className="text-red-500 text-[10px] flex items-center justify-center pl-3">
                    {errors.lName.message}
                  </div>
                )}
              </div>

              <div className="flex">
                <span className="md:text-[12px] text-[8px] md:w-25 w-12 flex items-center  justify-center font-bold text-indigo-400">
                  E-Mail:
                </span>
                <input
                  type="text"
                  placeholder="Email"
                  className="md:h-[30px] h-[20px] md:w-[270px] w-[135px] bg-zinc-700 placeholder:md:px-4 md:px-4 px-2 focus:outline-3 focus:outline-purple-500 md:text-[14px] text-[7px] rounded-2xl placeholder:font-bold font-bold"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: { value: /@/, message: "Must contain @ symbol" },
                    minLength: { value: 3, message: "Min length is 3" },
                    maxLength: { value: 30, message: "Max length is 30" },
                  })}
                />
                {errors.email && (
                  <div className="text-red-500 flex items-center justify-center text-[13px] pl-3">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="flex">
                <span className="md:text-[18px] text-[9px] md:w-25 w-12 flex items-center justify-start font-bold text-indigo-400">
                  Message:
                </span>
                <textarea
                  placeholder="Your Message"
                  className="md:h-[100px] h-[50px] md:w-[300px] w-[140px] bg-zinc-700 px-4 py-4 focus:outline-3 focus:outline-purple-500 font-bold rounded-2xl placeholder:text-[10px] placeholder:md:font-bold md:text-[13px] text-[6px] resize-none"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: { value: 3, message: "Min:3 Words" },
                    maxLength: { value: 200, message: "Word Limit: 200" },
                  })}
                />
                {errors.message && (
                  <div className="text-red-500 flex items-center justify-center text-[13px] pl-3">
                    {errors.message.message}
                  </div>
                )}
              </div>

              {isSubmitting && (
                <div>
                  <button className="disabled:hidden disabled:cursor-not-allowed disabled:bg-gray-300 md:w-40 md:h-10 w-20 h-5 md:text-[25px] text-[10px] cursor-pointer bg-yellow-300 font-bold hover:bg-yellow-500 text-black hover:w-42 transition-all duration-300 ease-in-out">
                    Submitting...
                  </button>
                </div>
              )}

              <button
                disabled={isSubmitting}
                className="disabled:hidden disabled:cursor-not-allowed disabled:bg-gray-300 md:w-32 w-16 md:h-10 h-5 cursor-pointer bg-yellow-300 font-bold hover:bg-yellow-500 text-black hover:md:w-42 hover:w-21 transition-all duration-300 ease-in-out md:text-[30px] text-[15px]"
              >
                Submit
              </button>
            </form>
          </div>

          <div
            className="image md:w-1/2 w-[50%]  md:top-0 justify-center items-center flex  "
            style={getContactAnimationStyle(150)}
          >
            <img src="team2.jpg" alt="Join US" className="w-full md:h-[650px] h-[325px]" />
          </div>
        </div>

        <div className="w-[90vw] bg-zinc-700 rounded-4xl  h-[1px] md:mt-40 mt-10  mb-10 flex justify-center items-center m-auto"></div>
        <div className=" w-full md:h-53 h-30 mt-4 p-3 md:mt-0  flex flex-col gap-6  items-center justify-center border-red-600 bg-zinc-900">
          <div className=" font-bold md:text-[24px] text-[12px]">Find Me On :</div>
          <div className=" md:gap-3 gap-1  w-[70%] h-16 flex items-center justify-center">
            <Link href={"https://github.com/AD1TYA-A1"}>
              <img src="github.png" alt="GitHUB" className="md:w-10 w-5 md:h-10 h-5" />
            </Link>
            <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
              <img src="instagram.png" alt="INSTAGRAM" className="md:w-10 w-5 md:h-10 h-5" />
            </Link>
            <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
              <img src="facebook.png" alt="INSTAGRAM" className="md:w-10 w-5 md:h-10 h-5" />
            </Link>
            <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
              <img src="twitter.png" alt="INSTAGRAM" className="md:w-10 w-5 md:h-10 h-5" />
            </Link>
          </div>
          <div className=" text-gray-500 font-bold md:text-[14px] text-[7px] flex flex-col items-center justify-center ">
            ©Copyright
            <div className=" text-center md:text-[10px] text-[8px]">
              We Trust your Priorities ❤️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}