import React from "react";

const About = () => {
  return (
    <>
      <div className="sm:w-11/12 m-auto">
        {/* Main div */}

        <div id="maindiv" className="bg-gray-100 overflow-hidden">
          {/* About page images full width */}

          <div
            className="mb-4 flex rounded-sm items-center h-52 sm:h-96  md:h-[40rem] justify-center w-full  bg-cover bg-left bg-no-repeat"
            style={{
              backgroundImage: `url("/About-img/about-page-img-1.jpg")`,
            }}
          >
            <h1 className="text-6xl font-semibold text-white">About</h1>
          </div>

          {/* chield div image and text*/}

          <div
            id="2"
            className="lg:px-20 lg:flex my-24 sm: min-w-screen overflow-hidden"
          >
            <div className="lg:w-1/2 px-4">
              <img
                className="md:w-8/10 sm: min-w-screen"
                src="./About-img/about-page-img-2.jpg"
                alt="images"
              />
            </div>

            {/* Text Paragraph div right side */}

            <div className="lg:w-1/2 px-4">
              <h3 className="lg: text-3xl sm: mt-3">
                Welcome To Welfare Stablished Since
                <span className="text-blue-600"> 2015</span>
              </h3>
              <p className="mb-10 text-md mt-2 md:w-6/6 text-justify opacity-70">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way.
                <p className="lg:mt-2 sm: mt-2">
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </p>
            </div>
          </div>

          {/* card section Data show area */}

          <div
            id="3"
            className="lg:px-20 flex flex-col justify-center md:flex-row sm: mx-4 h overflow-hidden"
          >
            <div className="bg-orange-600 lg:w-2/5 h-64 ">
              <h3 className="text-2xl mt-3 ml-6">Served Over</h3>
              <div>
                <p className="lg: text-5xl mt-4 ml-6  ">1‚432‚804</p>
              </div>
              <p className="text-xl mt-5 ml-6">
                Children in 190 countries in the world
              </p>
            </div>
            <div className="bg-orange-400 lg:w-1/3 h-64">
              <h3 className="text-2xl mt-3 ml-6">Donate Money</h3>
              <p className="lg:text-lg mt-4 ml-6 opacity-70 ">
                Even the all-powerful Pointing has no control about the blind
                texts.
              </p>
              <button className="bg-slate-50 mt-5 ml-6 h-10 w-36">
                Donate Now
              </button>
            </div>
            <div className="bg-yellow-500 lg:w-1/3 h-64">
              <h3 className="text-2xl mt-3 ml-6">Be a Volunteer</h3>
              <p className="lg:text-lg mt-4 ml-6 opacity-70">
                Even the all-powerful Pointing has no control about the blind
                texts.
              </p>
              <button className="bg-slate-50 mt-5 ml-6 h-10 w-36">
                Volunteer
              </button>
            </div>
          </div>

          {/* latest Donation show feedback area */}

          <div
            id="4"
            className="lg:px-20 flex flex-col justify-center items-center my-20 mx-4 overflow-hidden"
          >
            <h3 className="lg:text-4xl sm: text-xl">LATEST DONATIONS</h3>
            <p className="my-8 text-center text-lg opacity-50 font-medium sm:w-2/3 sm: mx-2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>

          {/* review section and feedback */}

          <div
            id="5"
            className="lg:px-20 flex sm: mx-4 flex-col justify-center md:flex-row gap-10 overflow-hidden"
          >
            <div className="flex justify-around h-64 lg:w-1/3 shadow-2xl bg-white">
              <div>
                <img
                  className="lg:h-24 lg:w-24 my-6 rounded-full sm: w-14 h-14"
                  src="./About-img/dp2.jpeg"
                  alt="Profile Images"
                />
              </div>
              <div>
                <p className="mt-4 ml-5 text-xl">Himanshu</p>
                <p className="mt-4 ml-5 opacity-40">Donated Just now</p>
                <p className="lg:mt-5 ml-5 opacity-60 font-medium sm: my-7">
                  Donated <span className="text-green-600">₹500</span> for
                </p>
                <button className="ml-5 text-orange-600 underline">
                  Children Needs Food
                </button>
              </div>
            </div>
            <div className="flex justify-around h-64 lg:w-1/3 shadow-2xl bg-white">
              <div>
                <img
                  className="lg:h-24 lg:w-24 my-6 rounded-full sm: w-14 h-14"
                  src="./About-img/dp3.jpg"
                  alt="Profile Images"
                />
              </div>
              <div>
                <p className="mt-4 ml-5 text-xl">Geetika</p>
                <p className="mt-4 ml-5 opacity-40">Donated Just now</p>
                <p className="lg:mt-5 ml-5 opacity-60 font-medium sm: my-7">
                  Donated <span className="text-green-600">₹300</span> for
                </p>
                <button className="ml-5 text-orange-600 underline">
                  Children Needs Food
                </button>
              </div>
            </div>
            <div className="flex justify-around h-64 lg:w-1/3 shadow-2xl bg-white mb-10">
              <div>
                <img
                  className="lg:h-24 lg:w-24 my-6 rounded-full sm: w-14 h-14"
                  src="./About-img/dp1.jpeg"
                  alt="Profile Images"
                />
              </div>
              <div>
                <p className="mt-4 ml-5 text-xl">Farhan</p>
                <p className="mt-4 ml-5 opacity-40">Donated Just now</p>
                <p className="lg:mt-5 ml-5 opacity-60 font-medium sm: my-7">
                  Donated <span className="text-green-600">₹400</span> for
                </p>
                <button className="ml-5 text-orange-600 underline">
                  Children Needs Food
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
