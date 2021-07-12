import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import HelpTrending from "../components/HelpTrending";
import Fade from "react-reveal/Fade";

function Help() {
  return (
    <div className="w-[82vw] flex  flex-col  items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
      <Head>
        <title>Help Center | Audible</title>
        <link rel="icon" href="https://www.audible.in/favicon.ico" />
      </Head>

      <Header />
      <div className="relative flex flex-col w-full h-[42vw]">
        <Image
          layout="fill"
          objectFit="contain"
          src="https://m.media-amazon.com/images/G/31/Audible/KM/Community/IN_hero_noText_1158x487.jpg"
        />
        <h3 className="absolute top-0 right-0 mr-16 text-4xl font-semibold text-white mt-80">
          How can we help?
        </h3>
      </div>
      <h1 className="text-center">
        <h2 className="-mt-2 text-2xl font-semibold">What's Trending?</h2>
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-10 mb-5 space-x-5 space-y-3">
        <Fade left>
          <HelpTrending
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625734595/AccountSupport_20201111_rufgbt.png"
            text="Troubleshooting"
          />
        </Fade>
        <Fade left>
          <HelpTrending
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625734595/Cancel_20201111_hewgnr.png"
            text="Cancel"
          />
        </Fade>
        <Fade right>
          <HelpTrending
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625734595/Library_2020111_td8qjk.png"
            text="Library"
          />
        </Fade>
        <Fade right>
          <HelpTrending
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625734595/Credits_Solar_20201109_majd85.png"
            text="Credits"
          />
        </Fade>
      </div>
      <h2 className="mt-5 text-2xl font-semibold transform motion-safe:hover:scale-110">
        Find More Solutions
      </h2>
      <div className="w-full">
        <h2 className="w-20 mt-10 ml-10 text-lg font-medium text-center border-b-2 border-yellow-400 font-poppins">
          Popular
        </h2>
        <div className="flex w-full h-60">
          <Fade left>
            <div className="bg-gray-100 shadow-lg p-8 w-[65%] justify-center">
              <p className="text-lg cursor-pointer text-linkBlue active:ring-yellow-300 active:ring-2 ">
                How can I cancel my membership?
              </p>
              <p className="text-lg cursor-pointer text-linkBlue active:ring-yellow-300 active:ring-2">
                Why have I not been charged for my monthly subscription?
              </p>
              <p className="text-lg cursor-pointer text-linkBlue active:ring-yellow-300 active:ring-2">
                Will your audiobooks disappear after I cancel?
              </p>
              <p className="text-lg cursor-pointer text-linkBlue active:ring-yellow-300 active:ring-2">
                What happens to my credits if I cancel?
              </p>
              <p className="text-lg cursor-pointer text-linkBlue active:ring-yellow-300 active:ring-2">
                How can I return an audiobooks?
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="flex flex-col items-center justify-center p-20 ml-auto text-lg font-medium text-center text-white bg-gradient-to-b from-gray-600 to-gray-800 rounded-2xl">
              <p>
                Explore best-selling Indian
                <p>
                  audiobooks and award<p>-winning stories</p>
                </p>
              </p>
              <p>
                We are always adding more
                <p>
                  titles, here
                  <span className="text-yellow-600">{">"}</span>
                </p>
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="relative w-full mt-10 h-60">
        <div style={{ zIndex: "-1" }}>
          <Image
            layout="fill"
            objectFit="contain"
            className="w-5/6 mx-auto cursor-pointer negative-z"
            alt="banner"
            src="https://m.media-amazon.com/images/G/01/Audible/KM/Group_3.png"
          />
        </div>
        <div className="z-50 font-semibold ml-[50%] h-full justify-center flex-col mt-16 items-center">
          <h3 className="text-4xl dark:text-gray-800">How to listen Guide</h3>
          <p className="mt-10 text-linkBlue">
            Learn More <span className="text-yellow-600">{">"}</span>
          </p>
        </div>
      </div>
      <Fade bottom>
        <div className="flex items-center justify-center w-full p-10 mt-10 bg-gradient-to-r from-gray-600 to-gray-800">
          <h1 className="mr-10 font-bold text-white ">Need More Help?</h1>
          <button className="px-4 py-0 rounded-full button">Contact Us</button>
        </div>
      </Fade>
    </div>
  );
}

export default Help;
