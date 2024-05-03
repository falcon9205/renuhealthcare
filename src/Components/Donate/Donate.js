import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variant";

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

  return (
    <>
      <div className="sm:w-11/12 m-auto bg-gray-100">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h-52 sm:h-96  md:h-[40rem] rounded-sm flex flex-col justify-center  sm:px-14 lg:px-32 px-5 text-white  bg-no-repeat bg-cover opacity-90"
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
                With your contribution, we can helping children access
                education, providing healthcare to communities in need,
                supporting disaster relief efforts..
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
              <img src="./logo.png" className="h-20 w-20 m-auto" alt="logo" />
              <span className="mb-4 capitalize text-4xl font-bold text-bPrimary ">
                RSHE & Foundation
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
                <span className="mb-2 text-md tracking-wider ">
                  Your Amount
                </span>
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
                </button>
              </div>
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
      </div>
    </>
  );
};

export default Donate;
