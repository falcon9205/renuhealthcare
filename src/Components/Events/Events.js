import React from "react";

import { TbMapShare } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";

import gsap from "gsap";
// import scrollTrigger from "gsap/scrollTrigger";
// gsap.registerPlugin(scrollTrigger);

const Event = () => {
  return (
    <div>
      {/* hero section */}
      <div
        className="mb-4 contact-hero flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/Events/event-hero-modified.jpg")`,
        }}
      >
        <h1 className="event-heading text-6xl font-semibold text-white ">
          Events
        </h1>
      </div>
      {/* Events */}
      <div className="events-box flex flex-wrap mx-10 mt-20 mb-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <div className="">
        <p className="event-tagline text-orange-500 text-6xl mb-8 font-semibold whitespace-nowrap">
          &nbsp; Join the movement, amplify compassion, and drive meaningful
          change &nbsp;
        </p>
      </div> */}
    </div>
  );
};

/* Single event */
const Card = () => {
  return (
    <>
      <div className="event-card w-full md:w-1/2 lg:w-1/3 hover:shadow-2xl p-2 rounded-lg">
        {/* event image */}
        <div className="h-40 md:h-48 lg:h-56 ">
          <img
            className="object-cover w-full h-full"
            src="/Events/Medical-Camp.jpg"
            alt="Medical-Camp"
          />
        </div>
        {/* event discription */}
        <div className="flex flex-col justify-around h-40 md:h-48 lg:h-56 p-2 border rounded-bl-lg rounded-br-lg ">
          <p className="lg:text-sm sm:text-xs">Sep. 10, 2018</p>
          <h3 className="text-xl font-semibold">World Wide Donation</h3>
          <div className="flex justify-between">
            <div className="flex ">
              <FaRegClock className="text-orange-500 w-5 h-5 mr-2" />
              <p className="event-time text-sm lg:text-sm sm:text-xs">
                10:30AM-03:30PM
              </p>
            </div>
            <div className="flex">
              <TbMapShare className="text-orange-500 w-6 h-6 mr-2" />
              <p className="event-venue text-sm lg:text-sm sm:text-xs">
                Venue:
              </p>
            </div>
          </div>
          <p className="event-content text sm:p-2 lg:text-sm sm:text-xs">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </>
  );
};

gsap.from(".event-card", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
  stagger: 0.5,
  // scrollTrigger: {
  //   trigger: ".event-card",
  //   scroller: "body",
  //   scrub: 1,
  // },
});

gsap.to(".event-heading", {
  y: -100,
  duration: 1,
  opacity: 0,
  // scrollTrigger: {
  //   trigger: ".events-box",
  //   scroller: "body",
  //   scrub: 1,
  // },
});

// gsap.to(".event-tagline", {
//   x: "-50%",
//   delay: 1,
//   scrollTrigger: {
//     trigger: ".event-tagline",
//     scroller: "body",
//     scrub: 2,
//     markers: true,
//     start: " 90%",
//     end: " bottom",
//     pin: true,
//   },
// });

export default Event;
