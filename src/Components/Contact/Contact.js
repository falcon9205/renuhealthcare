import React from "react";

import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { TbMessageCircleQuestion } from "react-icons/tb";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  /* function to receive message on mail */
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "081a2add-f083-4d05-ab18-74d7baa4c29a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    event.target.reset();
    toast.success("Message sent successfully!!");
  };

  return (
    <>
      <ToastContainer />
      {/* hero section */}
      <div
        className="mb-4 contact-hero flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/Contact/contact-hero-1.jpg")`,
        }}
      >
        <h1 className="contact-us text-6xl font-semibold text-white ">
          Contact Us
        </h1>
      </div>

      {/* Form and location */}
      <div className="contact-section mx-12 m-12  flex flex-col md:flex-row md:justify-between ">
        {/* input for contact */}
        <div className="contact-input md:w-1/2 md:px-4 ">
          <h2 className="mb-4 text-3xl text-center">
            Do you have any questions?
          </h2>
          <form onSubmit={onSubmit}>
            <input
              name="name"
              className="mb-4 w-full py-3 px-3 border border-gray-400"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              name="email"
              className="mb-4 w-full h-12 px-3 border border-gray-400"
              type="mail"
              placeholder="Your Email"
              required
            />
            <input
              name="subject"
              className="mb-4 w-full h-12 px-3 border border-gray-400"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              className="mb-4 w-full px-3 py-2 h-40 border border-gray-400"
              placeholder="Message"
              required
            ></textarea>
            <div className="flex justify-center ">
              <button
                type="submit"
                className="mb-4 rounded-lg sm:w-1/2 content-center w-full p-2 font-semibold text-xl bg-orange-500 text-white shadow-lg hover:scale-110 duration-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* add location */}
        <div className="contact-location md:w-1/2 md:px-4">
          <div className="flex justify-center ">
            <a
              target="_blank"
              href="https://www.google.com/maps/search/1+branch---479,+(Baspadamka,+Tehsil+Pataudi,+Gurugram,+Haryana+-+122503,+India/@28.3379119,76.7788465,15z/data=!3m1!4b1?entry=ttu"
            >
              <img
                src="/Contact/contact-location.png"
                className="relative mt-20 lg:mt-0 rounded-lg border hover:shadow-2xl duration:500 border-gray-400 "
                alt="contact location"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Chat Partner Question */}
      <div className="contact-cards flex justify-around mt-20 mb-12 flex-wrap ">
        <div className=" contact-card h-60 w-80 m-8 flex justify-center relative rounded-lg bg-[#CAE4F7] hover:transform hover:translate-y-2 duration-500 ease-in-out">
          <div className=" flex justify-center items-center contact-circle rounded-full bg-white w-32 h-32 absolute top-[-60px] z-10 shadow-2xl shadow-slate-600 hover:transform hover:translate-y-2 duration-500 ease-in-out">
            <IoChatbubblesOutline className="h-16 align-middle w-16" />
          </div>
          <div className=" px-4 pb-4 flex justify-end font-semibold flex-col ">
            <p className="text-slate-500">Chat with live</p>
            <p className="text-wrap text-xl my-1">Chat with our live experts</p>
            <p className="text-red-600">Chat now</p>
          </div>
        </div>
        <div className="contact-card h-60 w-80 m-8 flex justify-center relative rounded-lg bg-[#CAE4F7] hover:transform hover:translate-y-2 duration-500 ease-in-out">
          <div className=" flex justify-center items-center contact-circle rounded-full bg-white w-32 h-32 absolute top-[-60px] z-10 shadow-2xl shadow-slate-600 hover:transform hover:translate-y-2 duration-500 ease-in-out">
            <FaRegHandshake className="h-16 align-middle w-16" />
          </div>
          <div className=" px-4 pb-4  flex justify-end font-semibold flex-col ">
            <p className="text-slate-500">Become a partner</p>
            <p className="text-wrap text-xl my-1">
              Enhance your helping hand for peoples
            </p>
            <p className="text-red-600">Join now</p>
          </div>
        </div>
        <div className="contact-card h-60 w-80 m-8 flex justify-center relative rounded-lg bg-[#CAE4F7] hover:transform hover:translate-y-2 duration-500 ease-in-out">
          <div className=" flex justify-center items-center contact-circle rounded-full bg-white w-32 h-32 absolute top-[-60px] z-10 shadow-2xl shadow-slate-600 hover:transform hover:translate-y-2 duration-500 ease-in-out">
            <TbMessageCircleQuestion className="h-16 align-middle w-16" />
          </div>
          <div className=" px-4 pb-4 flex justify-end font-semibold flex-col ">
            <p className="text-slate-500">Ask your question</p>
            <p className="text-wrap text-xl my-1">
              Ask your any question and get updates
            </p>
            <p className="text-red-600">Ask now</p>
          </div>
        </div>
      </div>
    </>
  );
};

gsap.to(".contact-hero .contact-us", {
  y: -100,
  duration: 1,
  opacity: 0,
  // scrollTrigger: {
  //   trigger: ".contact-section",
  //   scroller: "body",
  //   scrub: 1,
  // },
});

gsap.from(".contact-cards", {
  y: 100,
  duration: 1,
  scale: 0.5,
  stagger: true,
  // scrollTrigger: {
  //   trigger: ".contact-cards",
  //   scroller: "body",
  // },
});

export default ContactUs;
