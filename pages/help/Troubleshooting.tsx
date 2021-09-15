import Header from "../../components/Header";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Image from "next/image";

function Troubleshooting() {
  return (
    <div className="w-[82vw] flex  flex-col  items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
      <Head>
        <title>Troubleshooting | Audible Help</title>
        <link rel="icon" href="https://www.audible.in/favicon.ico" />
      </Head>
      <Header />
      <div className="flex w-full mt-10 mb-8">
        <Fade left>
          <Image
            src="https://m.media-amazon.com/images/G/31/Audible/KM/Community/IN_Category_Icon_05_20201014_176X143.png"
            alt="avatar"
            className="justify-center mb-10"
            width={176}
            height={143}
          />
        </Fade>
        <Fade right>
          <div className="grid ml-10">
            <h1 className="mb-1 mr-40 text-2xl font-bold font-poppins">
              Troubleshooting
            </h1>
            <p className="text-base font-poppins font-sm">
              We can help you with easy to follow troubleshooting steps so you
              can continue on your Audible journey and be a happy listener!
            </p>
          </div>
        </Fade>
      </div>
      <div className="flex justify-center w-full">
        <Fade left>
          <div className="justify-center p-8 bg-gray-100 shadow-lg width800">
            <h1 className="justify-start text-xl font-medium font-poppins">
              All Articles on Troubleshooting
            </h1>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2 ">
              Why isn’t my audiobook showing up on my Android device?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              Why won&apos;t the Cloud Player load?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              How can I troubleshoot playback issues on my device?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              What browsers are compatible with Cloudplayer?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              What should I do if I&apos;m experiencing payment issues?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              Why isn’t my audiobook showing up on my iOS device?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              How do I enable Audible on my Waze app?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              How do I play Audible titles on my Waze app?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              How do I enable Waze on my Audible app?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              How can I redeem my G-Pay code?
            </p>
            <p className="font-semibold cursor-pointer text-md text-linkBlue ">
              See More ...
            </p>
          </div>
        </Fade>
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

export default Troubleshooting;
