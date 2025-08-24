"use client";
import React from "react";
import Link from "next/link";

const portfolio = () => {
  return (
    <div className=" bg-black lg:h-[720vh] h-[3300px] text-white">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
        crossOrigin="anonymous"
      ></link>
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
        crossOrigin="anonymous"
      ></script>

      <div className="  logo  pt-5  flex items-center justify-center  ">
          <Link href={"/"}>
        <button className="  absolute lg:left-20 left-40 top-0 lg:top-12 flex items-center justify-center flex-col cursor-pointer font-bold lg:h-[200px] h-[50px]  hover:text-purple-400 ">
          <lord-icon
            src="https://cdn.lordicon.com/obyhgzls.json"
            trigger="loop"
            stroke="bold"
            state="loop-cycle"
            colors="primary:#848484,secondary:#e88c30,tertiary:#ffc738,quaternary:#ebe6ef"
            style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          <span className="text-[8px] tracking-widest">ADITYA DEV X</span>
        </button>
            </Link>
        <div className="mt-5 text-3xl border-5 tracking-[6px] w-72 relative bottom-6 font-bold h-16 flex items-center justify-center">
          PROJECTS
        </div>
      </div>
      <div className="project flex items-center justify-center flex-col gap-20">
        {/* PROJECT 1 - GET CHAI */}
        <div className="project1  flex-col lg:gap-10 gap-2 lg:w-[1000px] w-[350px] lg:h-[1100px] h-[600px] flex items-center  pt-12 lg:pl-7 mx-auto  pl-0">
          <div className=" font-extrabold lg:text-[30px] text-[20px]  border-2 lg:w-110 w-64 flex items-center justify-center lg:tracking-[14px] tracking-[5px] lg:mb-30 mb-9">
            GET CHAI ☕
          </div>
          <div className=" flex flex-col items-center justify-center lg:gap-10 gap-4 lg:h-[850px] h-[450px] pt-4">
            <div className=" carouselH w-[100%] lg:h-[100%] h-[100%]  ">
              <div id="carouselGetChai" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/GetChai/Home.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/GetChai/Auth.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/GetChai/Dashboard.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/GetChai/Profile.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/GetChai/PaymentPage.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/GetChai/Payment.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/GetChai/PaySucessSlip.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselGetChai"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselGetChai"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="  w-[100%] relative bottom-3 flex   lg:gap-5 gap-2 justify-center lg:h-[600px] h-[1900px] ">
              <div className="   lg:w-[45%] w-[60%]  lg:h-[90%] h-[100%]">
                <div className=" border-[1px] border-gray-700 rounded-2xl w-full  h-full flex justify-center flex-col gap-3  left-0">
                  <div className=" font-bold flex items-center pl-3 lg:text-[24px] text-[15px] tracking-widest  text-yellow-400">
                    TOP FEATURES
                  </div>
                  <div className=" flex flex-col pl-3 lg:text-[18px] text-[10px] font-semibold">
                    <div>Payment Gateway Integration</div>
                    <div>Authentications</div>
                    <div>Responsiveness</div>
                    <div>Multiple account creations</div>
                    <div>DataBase Connection</div>
                    <div>Dynamic routing</div>
                    <div>API routing</div>
                    <div>Editable Profile</div>
                  </div>
                </div>
              </div>
              <div className="  lg:w-[45%] w-[50%]  lg:h-[90%] h-[100%]">
                <div className=" border-[1px] border-gray-700 rounded-2xl w-full  h-full flex item-center flex-col gap-2  left-0">
                  <div className=" font-bold flex items-center pl-3 lg:mt-0 mt-7 relative  lg:text-[24px] text-[15px] tracking-widest  text-yellow-400">
                    DEPENDENCIES
                  </div>
                  <div className="flex flex-col pl-3 lg:text-[18px] text-[10px] font-semibold">
                    <div>NextJS</div>
                    <div>Next-Auth</div>
                    <div>Mongoose</div>
                    <div>React</div>
                    <div>Razorpay</div>
                    <div>React-Dom</div>
                    <div>React Hook Form</div>
                    <div>React Tostify</div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90vw] bg-zinc-700 rounded-4xl  h-[1px] lg:mt-20 mt-10  flex justify-center items-center m-auto"></div>

        {/* PROJECT 2 - PASS MANAGER */}
        <div className="project2  flex-col lg:gap-10 gap-5 lg:w-[1000px] w-[99vw] lg:h-[900px] h-[700px] flex items-center  pt-12 lg:pl-15 pl-2 lg:mb-0 -mb-10   ">
          <div className="font-extrabold lg:text-[30px] text-[20px]  border-2 lg:w-120 w-64 flex items-center justify-center lg:tracking-[14px] tracking-[5px]">
            Pass Manager 🔐
          </div>
          <div className="  w-[95%] flex flex-col items-center justify-center lg:gap-10 gap-2 lg:h-[750px] h-[500px] pt-4">
            <div className=" carouselH lg:w-[70%] w-[95%] lg:h-[40%] h-[35%]  ">
              <div
                id="carouselPassManager"
                className="carousel lg:mb-10  slide w-full h-full"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/PassOp/edit.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/PassOp/copy.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/PassOp/delete.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/PassOp/saving.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselPassManager"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselPassManager"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="  lg:pt-10 pt-2 lg:w-[90%] w-[100%] relative bottom-3 flex  lg:gap-5 gap-2 justify-center lg:h-[550px] h-[50%] ">
              <div className="  w-[48%] lg:h-[80%] h-[100%]">
                <div className=" border-[1px] border-gray-700 rounded-2xl w-full h-full flex justify-center flex-col gap-3">
                  <div className=" font-bold flex items-center pl-3 lg:text-[24px] text-[15px] tracking-widest  text-yellow-400">
                    TOP FEATURES
                  </div>
                  <div className=" flex flex-col pl-3 lg:text-[18px] text-[10px] font-semibold">
                    <div>Secure Password Storage</div>
                    <div>Copy to Clipboard</div>
                    <div>Password Generation</div>
                    <div>Edit/Delete Functions</div>
                    <div>Local Storage</div>
                    <div>Search Functionality</div>
                    <div>Responsive Design</div>
                    <div>Data Encryption</div>
                  </div>
                </div>
              </div>
              <div className="  w-[45%] lg:h-[80%] h-[100%]">
                <div className=" border-[1px] border-gray-700 rounded-2xl w-full h-full flex item-center flex-col gap-3">
                  <div className=" font-bold flex items-center pl-3 relative top-6 lg:text-[24px] text-[15px] tracking-widest  text-yellow-400">
                    DEPENDENCIES
                  </div>
                  <div className=" flex flex-col pl-3  justify-center lg:text-[18px] text-[10px] font-semibold relative top-5">
                    <div>React</div>
                    <div>React-Dom</div>
                    <div>Tailwind CSS</div>
                    <div>UUID</div>
                    <div>React Icons</div>
                    <div>MongoDB</div>
                    <div>React Toastify</div>
                    <div>Vite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90vw] bg-zinc-700 rounded-4xl  h-[1px] lg:mt-20 mt-0 flex justify-center items-center m-auto"></div>

        {/* PROJECT 3 - LINKTREE */}
        <div className="project3 flex-col gap-10 lg:w-[1000px] w-[99vw]   lg:h-[950px] h-[600px] flex items-center  pt-12 lg:pl-15 pl-3  ">
          <div className="font-extrabold lg:text-[30px] text-[20px]  border-2 lg:w-110 w-64 flex items-center justify-center lg:tracking-[14px] tracking-[5px]">
            LINK TREE 🎄
          </div>
          <div className="  flex flex-col items-center w-full  justify-center lg:gap-10 gap-4 lg:h-[800px] h-[450px] pt-4">
            <div className=" carouselH  w-[100%] lg:h-[70%] h-[50%]">
              <div id="carouselLinktree" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/Linktree/Join.jpeg"
                      className="d-block w-100"
                      alt="Join"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Linktree/homePage.jpeg"
                      className="d-block w-100"
                      alt="Home"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Linktree/profile.jpeg"
                      className="d-block w-100"
                      alt="Profile"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Linktree/profile2.O.jpeg"
                      className="d-block w-100"
                      alt="NewProfile"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/Linktree/profileEdit.jpeg"
                      className="d-block w-100"
                      alt="Edit"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselLinktree"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselLinktree"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className=" w-[95%] relative bottom-3 flex  lg:gap-5 gap-2 justify-center lg:h-[600px] h-[250px] ">
              <div className="  w-[45%] h-[90%]">
                <div className=" border-[1px] border-gray-700 rounded-2xl w-full  lg:h-full h-[100%] flex justify-center flex-col gap-3">
                  <div className=" font-bold flex pl-3 lg:text-[24px] text-[15px] tracking-widest  text-yellow-400">
                    TOP FEATURES
                  </div>
                  <div className=" flex flex-col pl-3 lg:text-[18px] text-[10px] font-semibold">
                    <div>
                      Aesthetic Design{" "}
                      <span className=" text-gray-500 text-[10px]">
                        ignore the profile page
                      </span>
                    </div>
                    <div>Dynamic Routing</div>
                    <div>No Page Refresh</div>
                    <div>Notification Bar</div>
                    <div>Smooth Transitions</div>
                    <div>Custom Profile Links</div>
                    <div>Social Media Integration</div>
                    <div>User Authentication</div>
                  </div>
                </div>
              </div>
              <div className=" w-[45%] h-[90%]">
                <div className=" border-[1px] border-gray-700 rounded-2xl w-full h-full flex item-center flex-col ">
                  <div className=" font-bold flex items-center pl-3 relative top-2 lg:text-[24px] text-[15px] tracking-widest  text-yellow-400">
                    DEPENDENCIES
                  </div>
                  <div className=" flex flex-col pl-3  justify-center lg:text-[18px] text-[10px] font-semibold relative top-5">
                    <div>NextJS</div>
                    <div>Tailwind CSS</div>
                    <div>React</div>
                    <div>React Toastify</div>
                    <div>MongoDB</div>
                    <div>Mongoose</div>
                    <div>Next-Auth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90vw] bg-zinc-700 rounded-4xl  h-[1px] mt-20 flex justify-center items-center m-auto"></div>

        {/* PROJECT 4 - URL SHORTENER */}
        <div className="project4  flex-col gap-10 lg:w-[1000px] w-[99vw] lg:h-[1300px] h-[600px] flex items-center  pt-12 lg:pl-15 pl-3  ">
          <div className="font-extrabold lg:text-[30px] text-[20px]  border-2 lg:w-130 w-70 flex items-center justify-center lg:tracking-[14px] tracking-[5px]">
            URL SHORTENER 🔗
          </div>

          <div className="    w-[95%] flex flex-col items-center justify-center lg:gap-10 gap-3 lg:h-[1000px] h-[450px] pt-4">
            <div className=" carouselH w-[100%] lg:h-[20%] h-[40%] mb-4 ">
              <div
                id="carouselUrlShortener"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/UrlShort/home.jpeg"
                      className="d-block w-100"
                      alt="Home"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/UrlShort/nofill.jpeg"
                      className="d-block w-100"
                      alt="No Fill"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/UrlShort/fill.jpeg"
                      className="d-block w-100"
                      alt="Fill"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/UrlShort/link.jpeg"
                      className="d-block w-100"
                      alt="Link"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/UrlShort/done.jpeg"
                      className="d-block w-100"
                      alt="Done"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselUrlShortener"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselUrlShortener"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className=" w-[100%] relative bottom-3 lg:top-80 flex  lg:gap-5 gap-2  justify-center  lg:h-[400px] h-[600px]  ">
              <div className="  w-[45%] h-[90%]">
                <div className=" border-[1px] border-gray-700 rounded-2xl w-full  h-full flex  flex-col gap-3">
                  <div className=" font-bold flex items-center lg:pt-0 pt-4 pl-3 lg:text-[24px] text-[15px] tracking-widest  text-yellow-400">
                    TOP FEATURES
                  </div>
                  <div className=" flex flex-col pl-3 lg:text-[18px] text-[10px] font-semibold">
                    <div>URL Shortening Algorithm</div>
                    <div>Custom Short URLs</div>
                    <div>Click Analytics</div>
                    <div>QR Code Generation</div>
                    <div>Link Management</div>
                    <div>Copy to Clipboard</div>
                    <div>Responsive Design</div>
                    <div>Real-time Validation</div>
                  </div>
                </div>
              </div>
              <div className=" w-[45%] h-[90%]">
                <div className=" border-[1px] border-gray-700 rounded-2xl w-full h-full flex item-center flex-col gap-3">
                  <div className=" font-bold flex items-center pl-3 relative top-6 lg:text-[24px] text-[15px] tracking-widest   text-yellow-400">
                    DEPENDENCIES
                  </div>
                  <div className=" flex flex-col pl-3  justify-center lg:text-[18px] text-[10px]  font-semibold relative top-5">
                    <div>NextJS</div>
                    <div>Tailwind CSS</div>
                    <div>React</div>
                    <div>React Toastify</div>
                    <div>MongoDB</div>
                    <div>Mongoose</div>
                    <div>ShortId</div>
                    <div>QR Code Generator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-53  flex flex-col gap-6   items-center justify-center border-red-600 bg-zinc-900">
        <div className=" font-bold text-[24px]">Find Me On :</div>
        <div className=" gap-3  w-[70%] h-16 flex items-center justify-center">
          <Link href={"https://github.com/AD1TYA-A1"}>
            <img src="github.png" alt="GitHUB" className="w-10 h-10" />
          </Link>
          <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
            <img src="instagram.png" alt="INSTAGRAM" className="w-10 h-10" />
          </Link>
          <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
            <img src="facebook.png" alt="INSTAGRAM" className="w-10 h-10" />
          </Link>
          <Link href={"https://www.instagram.com/4d1tya.ownsssss"}>
            <img src="twitter.png" alt="INSTAGRAM" className="w-10 h-10" />
          </Link>
        </div>
        <div className=" text-gray-500 font-bold text-[14px] flex flex-col items-center justify-center ">
          ©Copyright
          <div className=" text-center text-[10px]">
            We Trust your Priorities ❤️
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
