import Header from "../../components/Header";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const Help = () => {
  return (
    <div className="w-[82vw] flex  flex-col  items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
      <Head>
        <title>Credits</title>
        <link rel="icon" href="https://www.audible.in/favicon.ico" />
      </Head>
      <Header />
      <div className="flex w-full mt-10 mb-8">
        <Fade left>
          <Image
            alt="avatar"
            src="https://m.media-amazon.com/images/G/31/Audible/KM/Community/IN_Category_Icon_03_20201014_176X143.png"
            className="justify-center mb-10"
            width={176}
            height={143}
          />
        </Fade>
        <Fade right>
          <div className="grid ml-10">
            <h1 className="mb-1 mr-40 text-2xl font-bold font-poppins">
              Credits
            </h1>
            <p className="text-base font-poppins font-sm">
              Get the best out of your Audible experience and learn all about
              credits and what they can do for you.
            </p>
          </div>
        </Fade>
      </div>
      <div className="flex justify-center w-full">
        <Fade left>
          <div className="justify-center p-8 bg-gray-100 shadow-lg width800">
            <h1 className="justify-start text-xl font-medium font-poppins">
              All Articles on Credits
            </h1>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2 ">
              Why didn&apos;t I receive my Audible credit?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              When do I receive my credits?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              What is a credit?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              Where are my credits?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              What happens to my credits if I cancel?
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
};

export default Help;
