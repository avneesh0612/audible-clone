import Image from "next/image";
import BannerCheck from "./BannerCheck";
import Fade from "react-reveal/Fade";

function Banner() {
  return (
    <div
      style={{ zIndex: "-1" }}
      className="flex w-screen h-[50vh] bg-sapGreen mt-10"
    >
      <div className="relative w-[51vw] h-full">
        <Image
          layout="fill"
          objectFit="contain"
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625492514/imageedit_3_2559150679_l2j29i.jpg"
          alt="Banner"
        />
      </div>
      <div className="-ml-3">
        <h2 className="text-white font-poppins text-3xl mt-5 font-semibold">
          Try Audible today
        </h2>
        <div className="flex flex-col max-w-md">
          <Fade left cascade>
            <div>
              <BannerCheck
                text="1 credit a month to use on any audiobook of your choice. Choose from
              over 200,000 English and Hindi audiobooks."
              />
              <BannerCheck text="All the audiobooks in your Audible library are yours to keep, even if you cancel the membership." />
              <BannerCheck text="Free, unlimited listening to Audible Original shows. Download as many as you’d like." />
              <BannerCheck text="Listen offline, at no extra cost." />
            </div>
          </Fade>
          <div className="w-80 ml-9">
            <button className=" transition duration-500 ease-in-out bg-[#FFA000] hover:bg-[#FFC849] py-2  transform hover:-translate-y-1 hover:scale-110 rounded-md mt-2 w-full">
              Start your free trial now
            </button>
            <p className="text-white text-opacity-60 text-xs text-center">
              ₹199 per month after 30-day trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
