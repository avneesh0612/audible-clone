import Header from "components/Header";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Image from "next/image";

function Help() {
  return (
    <div className="w-[82vw] flex  flex-col  items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
      <Head>
        <title>Cancellation | Audible Help</title>
        <link rel="icon" href="https://www.audible.in/favicon.ico" />
      </Head>
      <Header />
      <div className="flex w-full mt-10 mb-8">
        <Fade left>
          <Image
            src="https://m.media-amazon.com/images/G/31/Audible/KM/Community/IN_Category_Icon_02_20201014_176X143.png"
            className="justify-center mb-10"
            width={176}
            height={143}
          />
        </Fade>
        <Fade right>
          <div className="grid ml-10">
            <h1 className="text-2xl font-poppins font-bold mr-40 mb-1">
              Cancellation
            </h1>
            <p className="text-base font-poppins font-sm">
              Audible Account Cancellations are easy and flexible, find the
              solution that's right for you.
            </p>
          </div>
        </Fade>
      </div>
      <div className="flex w-full justify-center">
        <Fade left>
          <div className="bg-gray-100 shadow-lg width800 p-8 justify-center">
            <h1 className="text-xl font-medium justify-start font-poppins">
              All Articles on Cancellation
            </h1>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2 ">
              Will my audiobooks disappear after I cancel?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              How can I cancel my membership?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              What happens to my credits if I cancel?
            </p>
            <p className="text-lg cursor-pointer text-linkBlue padding active:ring-yellow-300 active:ring-2">
              Can my membership be placed on hold?
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

export default Help;
