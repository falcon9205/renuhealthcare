import gsap from "gsap";
import { useEffect, useRef } from "react";
import React from "react";

const Home = () => {
  const carouselRef = useRef(null); //to ref particular div
  const vounteer_corousel_ref = useRef(null);
  useEffect(() => {
    const images = carouselRef.current.children;
    const timeline = gsap.timeline({ repeat: -1 });

    // Hide all images except the first one
    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    // Animation to transition between images
    timeline.to(images[0], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[1], { opacity: 1, duration: 1 });
    timeline.to(images[1], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[2], { opacity: 1, duration: 1 });
    timeline.to(images[2], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[3], { opacity: 1, duration: 1 });
    timeline.to(images[3], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[4], { opacity: 1, duration: 1 });
    timeline.to(images[4], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[5], { opacity: 1, duration: 1 });
    timeline.to(images[5], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[6], { opacity: 1, duration: 1 });
    timeline.to(images[6], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[7], { opacity: 1, duration: 1 });
    timeline.to(images[7], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[8], { opacity: 1, duration: 1 });
    timeline.to(images[8], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[0], { opacity: 1, duration: 1 });
  }, []);

  useEffect(() => {
    const images = vounteer_corousel_ref.current.children;
    const timeline = gsap.timeline({ repeat: -1 });

    // Hide all images except the first one
    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    // Animation to transition between images
    timeline.to(images[0], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[1], { opacity: 1, duration: 1 });
    timeline.to(images[1], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[2], { opacity: 1, duration: 1 });
    timeline.to(images[2], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[3], { opacity: 1, duration: 1 });
    timeline.to(images[3], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[4], { opacity: 1, duration: 1 });
    timeline.to(images[4], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[5], { opacity: 1, duration: 1 });
    timeline.to(images[5], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[6], { opacity: 1, duration: 1 });
    timeline.to(images[6], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[7], { opacity: 1, duration: 1 });
    timeline.to(images[7], { opacity: 0, duration: 1, delay: 2 });
    timeline.to(images[0], { opacity: 1, duration: 1 });
  }, []);

  return (
    <>
    <div className="">
      {/* GSAP corousel  */}
      <div
        ref={carouselRef}
        className="bg-gray-100 h-52 sm:h-96  md:h-[40rem] sm:w-11/12 m-auto relative rounded-sm"
      >
        <img
          src="./HomepageImages/Corousel/Home8.jpg"
          alt="photos"
          className="image absolute object-cover h-full w-full overflow-hidden rounded-sm"
        ></img>
        <img
          src="./HomepageImages/Corousel/Home2.jpg"
          alt="photos"
          className="image absolute object-cover h-full w-full overflow-hidden rounded-sm"
        ></img>
        <img
          src="./HomepageImages/Corousel/Home3.jpg"
          alt="photos"
          className="image absolute object-cover h-full w-full overflow-hidden rounded-sm"
        ></img>
        <img
          src="./HomepageImages/Corousel/Home4.jpg"
          alt="photos"
          className="image absolute object-cover h-full w-full overflow-hidden rounded-sm"
        ></img>
        <img
          src="./HomepageImages/Corousel/Home1.jpg"
          alt="photos"
          className="image absolute object-cover h-full w-full overflow-hidden rounded-sm"
        ></img>
        <img
          src="./HomepageImages/Corousel/Home6.jpg"
          alt="photos"
          className="image absolute object-cover h-full w-full overflow-hidden rounded-sm"
        ></img>
        <img
          src="./HomepageImages/Corousel/Home7.jpg"
          alt="photos"
          className="image absolute object-cover h-full w-full overflow-hidden rounded-sm"
        ></img>
        <img
          src="./HomepageImages/Corousel/Home5.jpg"
          alt="photos"
          className="image absolute object-cover h-full w-full overflow-hidden rounded-sm"
        ></img>
      </div>

      {/* donation,volunteer,sponsor portion */}
      <div className="bg-gray-100 mt-5 border  h-50 md:flex w-11/12 m-auto gap-5 space-y-10 md:space-y-0">
        {/* donation */}
        <div className=" h-full w-full flex border-blue-300 ">
          <img
            className="w-16 h-16 mt-14"
            src="./HomepageImages/ThreeSlogans/donation.gif"
            alt="donation"
          />
          <div>
            <h1 className="mb-2 font-semibold text-2xl text-center">
              Make a Donation
            </h1>
            <p className="font-normal">
              Every drop contributes to the ocean of change. Your donation, no
              matter how small, holds the power to create ripples of hope and
              transform lives. Together, let's weave a tapestry of compassion
              and kindness, making our world a brighter place for all.
            </p>
          </div>
        </div>

        {/* volunteer */}
        <div className=" h-full w-full flex ">
          <img
            className="w-16 h-16 mt-14"
            src="./HomepageImages/ThreeSlogans/volunteer.gif"
            alt="donation"
          />
          <div>
            <h1 className="mb-2  font-semibold text-2xl text-center">
              Become a volunteer
            </h1>
            <p className="font-normal">
              Become the heartbeat of change. As a volunteer in our NGO, you're
              not just lending your time; you're igniting a movement of
              compassion and empowerment. Join hands with us to paint a brighter
              tomorrow, one act of service at a time.
            </p>
          </div>
        </div>

        {/* sponsorship */}
        <div className="h-full  w-full flex">
          <img
            className="w-16 h-16 mt-14"
            src="./HomepageImages/ThreeSlogans/sponsor.gif"
            alt="donation"
          />
          <div>
            <h1 className="mb-2 font-semibold text-2xl text-center">
              Sponsorship
            </h1>
            <p className="font-normal">
              Fuel the journey of impact. By sponsoring our cause, you're not
              just investing in a project; you're investing in the future of
              communities, in dreams yet to be realized. Together, let's create
              a legacy of empowerment and transformation.
            </p>
          </div>
        </div>
      </div>

      {/* vounteer form section*/}
      <div className="h-[30rem] bg-gray-100 w-full sm:w-11/12 mt-5 mx-auto  md:flex md:h-96 mb-5">
        <div className="w-full  md:h-full  text-center space-y-4 md:mt-10">
          <h1 className="capitalize font-semibold font-sans text-2xl">Share your Volunteering Ideas</h1>
          <form
            className="flex flex-col"
            action="mailto:info@admedusociety.org"
            method="post"
            encType="text/plain"
          >
            <input
              className="m-auto border-solid border-black  px-2 border-1"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            ></input>
            <input
              className="m-auto mt-1 border-solid border-black  px-2 border-1"
              type="email"
              name="Mail"
              placeholder="Your Email-ID"
              required
            ></input>
            <input
              className="m-auto mt-1 h-10 border-black border-solid  px-2 border-1"
              type="text"
              name="Feedback"
              placeholder="Volunteering Ideas"
              required
            ></input>
            <div className="m-auto mt-2 space-x-2">
              <input
                className="bg-black text-white w-16 px-2 py-1 rounded-lg hover:bg-cyan-700"
                type="Submit"
                value="Send"
              ></input>
              <input
                className="bg-black text-white hover:bg-cyan-700 w-16 px-2 py-1 rounded-lg"
                type="reset"
                value="Reset"
              ></input>
            </div>
          </form>
        </div>

        <div className="md:h-full  md:w-full h-1/2 w-full m-auto relative object-cover" ref={vounteer_corousel_ref}>
          <img
            className=" absolute p-1 h-full w-full"
            src="./HomepageImages/volunteerform/volunteer1.jpg"
            alt="volunteer"
          />
          <img
            className=" absolute p-1 h-full w-full"
            src="./HomepageImages/volunteerform/volunteer2.jpg"
            alt="volunteer"
          />
          <img
            className=" absolute p-1 h-full w-full"
            src="./HomepageImages/volunteerform/volunteer3.jpg"
            alt="volunteer"
          />
          <img
            className=" absolute p-1 h-full w-full"
            src="./HomepageImages/volunteerform/volunteer4.jpg"
            alt="volunteer"
          />
          <img
            className=" absolute p-1 h-full w-full"
            src="./HomepageImages/volunteerform/volunteer5.jpg"
            alt="volunteer"
          />
          <img
            className=" absolute p-1 h-full w-full"
            src="./HomepageImages/volunteerform/volunteer6.jpg"
            alt="volunteer"
          />
          <img
            className=" absolute p-1 h-full w-full"
            src="./HomepageImages/volunteerform/volunteer7.jpg"
            alt="volunteer"
          />
        </div>
      </div>
      </div> 

     
    </>
  );
};

export default Home;
