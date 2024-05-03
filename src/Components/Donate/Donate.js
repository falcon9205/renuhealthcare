import React, {useState, useRef} from "react";
import {motion} from "framer-motion";
import { fadeIn } from "./Variant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";


const Donate = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const { value } = event.target;
    const regex = /^\d{10}$/;
    const isValidPhoneNumber = regex.test(value);
    setPhoneNumber(value);
    setIsValid(isValidPhoneNumber);
  };

  const slider = useRef(null);
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  
  return (
    <>
      <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="min-h-screen flex flex-col justify-center  sm:px-14 lg:px-32 px-5 text-white  bg-no-repeat bg-cover opacity-90"
        style={{
          backgroundImage: `url("/Donate/main3.png")`,
        }}
      >
<div className=" w-full lg:w-4/5 content-center space-y-5 ">
          <motion.img
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            src="/Donate/logo-give.png"
            alt="img"
          />
          <div className=" flex ">
            <p className=" font-bold w-3/4 text-start mt-10 hover:text-bPrimary hidden md:block tracking-widest ">
              With your contribution, we can helping children access education,
              providing healthcare to communities in need, supporting disaster
              relief efforts..
            </p>
          </div>
        </div>
      </motion.div>
      {/* card items */}
      <div>
        <div className=" max-w-full mx-auto my-5">
          <h1 className=" text-4xl text-center font-bold text-dGrey hover:text-bPrimary tracking-widest font-serif">
            Donate to the NGO
          </h1>
        </div>
        <div className=" max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-8">
          <div className="text-center shadow-xl mb-11 rounded-xl ">
            <div className=" overflow-hidden">
              <img
                src="./Donate/img1.png"
                className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
                alt=""
              />
            </div>
            <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
              Give for Poor children
            </h2>
            <p className="py-2">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
          </div>
          <div className="text-center shadow-xl mb-11 rounded-xl ">
            <div className=" overflow-hidden">
              <img
                src="./Donate/img2.png"
                className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
                alt=""
              />
            </div>
            <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
              Give for Better LIfe
            </h2>
            <p className="py-2">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
          </div>
          <div className="text-center shadow-xl mb-11 rounded-xl ">
            <div className=" overflow-hidden">
              <img
                src="./Donate/img4.png"
                className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
                alt=""
              />
            </div>
            <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
              Give for Home
            </h2>
            <p className="py-2">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
          </div>
          <div className="text-center shadow-xl mb-11 rounded-xl ">
            <div className=" overflow-hidden">
              <img
                src="./Donate/mainimg.png"
                className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
                alt=""
              />
            </div>
            <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
              Give for Better Food
            </h2>
            <p className="py-2">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
          </div>
          <div className="text-center shadow-xl mb-11 rounded-xl ">
            <div className=" overflow-hidden">
              <img
                src="./Donate/mainimg2.png"
                className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
                alt=""
              />
            </div>
            <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
              Give for Better Food
            </h2>
            <p className="py-2">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
          </div>
          <div className="text-center shadow-xl mb-11 rounded-xl ">
            <div className=" overflow-hidden">
              <img
                src="./Donate/education.png"
                className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
                alt=""
              />
            </div>
            <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
              Give for Better Education
            </h2>
            <p className="py-2">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
          </div>
        </div>
      </div>

{/* Slick carousal */}
      <motion.div className="min-h-screen w-full flex flex-col justify-center sm:px-10 sm:my-0  mb-10 mt-2">
        <motion.div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col items-center lg:flex-row justify-center mb-10 lg:mb-0"
        >
          <div>
            <h1 className="text-3xl font-semibold text-center justify-center mt-2  lg:text-start font-serif">
              Rise Your Hand To Help The Poor Family
            </h1>
          </div>
          <div className="flex float-end">
            <button
              className=" text-bPrimary px-2  py-2 rounded-lg  active:bg-slate-600"
              onClick={() => slider.current.slickPrev()}
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              className=" text-bPrimary px-4 py-2 rounded-lg  active:bg-slate-600"
              onClick={() => slider.current.slickNext()}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </motion.div>
        <div className="w-full mt-5 mb-0">
          <Slider ref={slider} {...settings}>
            <div className="h-[300px] w-full text-nGrey gap-10 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 sm:h[550px] cursor-pointer ">
              <div>
                <img
                  src="./Donate/mainimg2.png"
                  className=" h-56 rounded-t-xl gap-11 w-full object-cover"
                  alt=""
                />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h3 className="font-semibold text-xl pt-4">
                  Rise Your Hand for Education
                </h3>
              </div>
            </div>
            <div className="h-[300px] text-nGrey rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-5 mb-2 cursor-pointer ">
              <img src="./Donate/mainimg.png" className="h-56 rounded-t-xl w-full" alt="" />

              <div className="flex flex-col justify-center items-center">
                <h3 className="font-semibold text-xl pt-4">
                  Rise Your Hand for Medical
                </h3>
              </div>
            </div>
            <div className="h-[300px] text-nGrey rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer ">
              <img src="./Donate/tabimage1.png" className="h-56 rounded-t-xl w-full" alt="" />

              <div className="flex flex-col justify-center items-center">
                <h3 className="font-semibold text-xl pt-4">
                  Rise Your Hand for Poors
                </h3>
              </div>
            </div>
            <div className="h-[300px] text-nGrey rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer ">
              <img src="./Donate/education.png" className="h-56 rounded-t-xl w-full" alt="" />

              <div className="flex flex-col justify-center items-center">
                <h3 className="font-semibold text-xl pt-4">
                  Rise Your Hand for Children
                </h3>
              </div>
            </div>
            <div className="h-[300px] text-nGrey rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer ">
              <img src="./Donate/food.png" className="h-56 rounded-t-xl w-full" alt="" />

              <div className="flex flex-col justify-center  items-center">
                <h3 className="font-semibold text-xl  pt-4 mb-4">
                  Rise Your Hand for Orphans
                </h3>
              </div>
            </div>
            
            <div className="h-[300px] text-nGrey rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer ">
              <img src="./Donate/img4.png" className="h-56 rounded-t-xl w-full" alt="" />

              <div className="flex flex-col justify-center  items-center">
                <h3 className="font-semibold text-xl  pt-4 mb-4">
                  Rise Your Hand for Needy People
                </h3>
              </div>
            </div>
          </Slider>
        </div>
      </motion.div>

      {/* Donation Form */}

      <motion.div className=" w-full flex items-center justify-center min-h-screen bg-gray-100">
        <motion.div className="relative flex flex-col m-4 space-y-2 bg-white  shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col justify-center mt-0 72634mb-16 p-2 md:p-14 sm:item-center"
          >
            <span className="mb-4 text-4xl font-bold text-bPrimary ">
              Renu Sharma HealthCare
            </span>
            <span className="font-bold text-2xl text-center text-gray-1000 mb-4 tracking-widest">
              Support Us!
            </span>
            <span className="font-light text-gray-400 text-center mb-1">
              Hey! Enter your details here!
            </span>
            <div className="py-3">
              <span className="mb-2 text-md  tracking-wider">Name</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="Name"
                id="name"
                placeholder="Full Name"
              />
            </div>
            <div className="py-3">
              <span className="mb-2 text-md tracking-wider">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="Email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="py-3">
              <span className="mb-2 text-md tracking-wider ">
                Mobile Number
              </span>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="Mobile Number"
                id="Mobile"
                placeholder="Mobile Number"
                value={phoneNumber}
                onChange={handleChange}
              />
              {!isValid && (
                <p style={{ color: "red" }}>
                  Please enter a valid 10-digit phone number.
                </p>
              )}
            </div>
            <div className="py-3">
              <span className="mb-2 text-md tracking-wider ">Your Amount</span>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="Your Amount"
                id="amount"
                placeholder="Your Amount"
              />
            </div>
            <div className="flex justify-center">
            <button
              id="button"
              className="w-2/3  mt-8 bg-black text-white p-3 rounded-lg  hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Donate Now!
            </button></div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative"
          >
            <img
              src="./Donate/donate.png"
              alt="img"
              className="w-[500px] h-[681px] hidden  rounded-r-2xl md:block object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-full">
        <img
          src="./Donate/donateimg.png"
          alt=""
          className="w-full h-1/2 mt-6 mb-6 shadow-2xl rounded-2xl"
        />
      </div>
    </>
  );
};

export default Donate;
