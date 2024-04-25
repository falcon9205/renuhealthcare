import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer main div */}
      <div className="footer   md:flex h-full md:h-72 w-full sm:w-11/12 m-auto  space-y-10 md:space-y-0">
        {/* ourvision Box */}
        <div className="ourvision  text-center capitalize  w-full">
          <h1 className="text-2xl ">Our Vision</h1>
          <p className="text-left text-sm text px-3 py-1 font-normal">
            To create a world where all individuals have equal access to basic
            human rights, education, healthcare, and opportunities for
            sustainable livelihoods. We envision empowered communities working
            together to overcome poverty, injustice, and environmental
            degradation, fostering a global society built on dignity, equality,
            and compassion.
          </p>
        </div>

        {/* Connect with us Box */}
        <div className="connectwithus      w-full uppercase space-y-4">
          <h1 className="text-2xl text-center">Connect with us</h1>

          {/* particular div for flex logo with h1-tag */}
          <div className="flex justify-center">
            <img
              src="./Footersvg/instagram.png"
              className="h-7 w-7 ml-5"
              alt="logo"
            />
            <h1 className="mt-2 capitalize ml-2">Instagram</h1>
          </div>

          {/* particular div for flex logo with h1-tag */}
          <div className="flex justify-center">
            <img
              src="./Footersvg/linkedin.png"
              className="h-7 w-7 ml-2"
              alt="logo"
            />
            <h1 className="mt-2  capitalize ml-2">Linkedin</h1>
          </div>

          {/* particular div for flex logo with h1-tag */}
          <div className="flex justify-center">
            <img
              src="./Footersvg/twitter.png"
              className="h-7 w-7 -ml-1"
              alt="logo"
            />
            <h1 className="mt-2 capitalize ml-2">Twitter</h1>
          </div>

          {/* particular div for flex logo with h1-tag */}
          <div className="flex justify-center">
            <img
              src="./Footersvg/facebook.png"
              className="h-7 w-7 ml-5"
              alt="logo"
            />
            <h1 className="mt-2 capitalize ml-2">Facebook</h1>
          </div>
        </div>

        {/* Any suggestion Box */}
        <div className="anysuggestion  w-full  uppercase space-y-4">
          <h1 className="text-2xl text-center">Any Suggestions</h1>
          <div>
            {/* form content */}
            <form
              className="flex flex-col space-y-3"
              action="mailto:info@admedusociety.org"
              method="post"
              encType="text/plain"
            >
              <input
                className="m-auto border-solid  px-2 border-1"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              ></input>
              <input
                className="m-auto mt-1 border-solid  px-2 border-1"
                type="email"
                name="Mail"
                placeholder="Your Email-ID"
                required
              ></input>
              <input
                className="m-auto mt-1 h-10 border-solid  px-2 border-1"
                type="text"
                name="Feedback"
                placeholder="Feedback/Suggestions"
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
        </div>

        {/* Contact us Box */}
        <div className="connectwithus items-center flex flex-col w-full uppercase space-y-4">
          <h1 className="text-2xl text-center">Contact us</h1>

          {/* particular div for flex logo with h1-tag */}
          <div className="flex md:justify-start  ">
            <img
              src="./Footersvg/house.gif"
              className="h-10 w-10"
              alt="logo"
            />
            <a
              href="https://www.google.com/maps/place/Sector+14,+Gurugram,+Haryana+122022/@28.47258,77.044489,12z/data=!4m6!3m5!1s0x390d19b2668b71e3:0xe4ba6a0849b01c0a!8m2!3d28.4710811!4d77.0454144!16s%2Fg%2F1tgwl1z5?hl=en&entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
             
              <h1 className="mt-2 text-sm capitalize">
                Gurugram,Haryana - 122503,India
              </h1>
            </a>
          </div>

          {/* particular div for flex logo with h1-tag */}
          <div className="flex justify-start">
            <img src="./Footersvg/Mail.gif" className="h-10 w-10" alt="logo" />
            <a
              href="mailto:info@admedusociety.org"
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="mt-2 ml-1 text-sm  capitalize ">info@admedusociety.org</h1>
            </a>
          </div>

          {/* particular div for flex logo with h1-tag */}
          <div className="flex justify-start">
            <img
              src="./Footersvg/Phone.gif"
              className="h-10 w-10"
              alt="logo"
            />
            <a href="tel:+919958586721" target="_blank" rel="noreferrer">
              <h1 className="mt-2 text-sm capitalize">+91-9958586721</h1>
            </a>
          </div>

          {/* particular div for flex logo with h1-tag */}
          <div className="flex justify-start text-sm">
            <img
              src="./Footersvg/Phone.gif"
              className="h-10 w-10"
              alt="logo"
            />
            <a href="tel:+9199671457355">
              <h1 className="mt-2 capitalize">+91-9671457355</h1>
            </a>
          </div>
        </div>
      </div>
      <h1 className="m-auto rounded-b-lg  text-center font text-black text-sm sm:text-lg  w-full">© 2024 Copyright : All Rights Reserved : Renu Sharma Healthcare & Education Foundation</h1>
    </>
    
  );
};

export default Footer;
