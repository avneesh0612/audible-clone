import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import HelpTrending from "../components/HelpTrending";

function Help() {
  return (
    <div className="w-[82vw] flex  flex-col center items-center justify-center mx-auto">
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
        <h3 className="absolute top-0 right-0 mt-80 mr-16 text-white text-4xl  font-semibold">
          How can we help?
        </h3>
      </div>
      <h1 className="text-center">
        <h2 className="text-2xl font-semibold -mt-2">What's Trending?</h2>
      </h1>
      <div className="flex mb-5 flex-wrap items-center justify-center mt-10 space-x-5 space-y-3">
        <HelpTrending
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625734595/AccountSupport_20201111_rufgbt.png"
          text="Troubleshooting"
        />
        <HelpTrending
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625734595/Cancel_20201111_hewgnr.png"
          text="Cancel"
        />
        <HelpTrending
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625734595/Library_2020111_td8qjk.png"
          text="Library"
        />
        <HelpTrending
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625734595/Credits_Solar_20201109_majd85.png"
          text="Credits"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-5">Find More Solutions</h2>
      <div className="w-full">
        <h2 className="border-b-2 ml-10 text-lg font-poppins font-medium text-center  border-yellow-400 w-20  mt-10">
          Popular
        </h2>
        <div className="flex w-full h-60">
          <div className="bg-gray-100 shadow-lg p-8 w-[65%] justify-center">
            <p className="text-linkBlue text-lg cursor-pointer active:ring-yellow-300 active:ring-2 ">
              How can I cancel my membership?
            </p>
            <p className="text-linkBlue text-lg cursor-pointer active:ring-yellow-300 active:ring-2">
              Why have I not been charged for my monthly subscription?
            </p>
            <p className="text-linkBlue text-lg cursor-pointer active:ring-yellow-300 active:ring-2">
              Will your audiobooks disappear after I cancel?
            </p>
            <p className="text-linkBlue text-lg cursor-pointer active:ring-yellow-300 active:ring-2">
              What happens to my credits if I cancel?
            </p>
            <p className="text-linkBlue text-lg cursor-pointer active:ring-yellow-300 active:ring-2">
              How can I return an audiobooks?
            </p>
          </div>
          <div className="bg-gradient-to-b from-gray-600 to-gray-800 ml-auto p-20 justify-center flex items-center flex-col rounded-2xl text-lg text-center text-white font-medium">
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
        </div>
      </div>
      <div className="relative h-60 w-full mt-10">
        <Image
          layout="fill"
          objectFit="contain"
          className="w-5/6 mx-auto cursor-pointer"
          alt="banner"
          src="https://m.media-amazon.com/images/G/01/Audible/KM/Group_3.png"
        />
        <h3 className=" text-4xl  font-semibold">How to listen Guide</h3>
      </div>
      <div className="flex bg-gradient-to-r from-gray-600  mt-10 p-10 w-full justify-center items-center to-gray-800">
        <h1 className="font-bold text-white mr-10 ">Need More Help?</h1>
        <button className="px-4 rounded-full py-0 button">Contact Us</button>
      </div>
    </div>
  );
}

export default Help;
