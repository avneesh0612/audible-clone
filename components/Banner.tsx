import Image from "next/image";
import BannerCheck from "./BannerCheck";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row w-screen md:h-[50vh] bg-sapGreen mt-10">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div className="relative flex w-screen h-full md:h-[52vh]">
          <div
            className="relative flex flex-col items-center justify-center w-screen h-full"
            style={{
              background:
                "url(https://m.media-amazon.com/images/G/31/AudibleIN/2020/audibleweb/March/adbl_IN_anon_weblab_top_desktop._CB1198675309_.jpg)",
            }}
          >
            <h2 className="text-4xl font-semibold text-white font-poppins">
              BOOKS. STORIES.
            </h2>
            <h2 className="text-4xl font-semibold text-white font-poppins">
              TALK SHOWS.
            </h2>
            <h2 className="text-4xl font-semibold text-white font-poppins">
              LIFE LESSONS.
            </h2>
            <p className="text-xl text-white text-opacity-60">
              Try Audible today. Cancel anytime
            </p>
            <div className="w-80 ml-9">
              <button className="w-full py-2 mt-10 transition duration-500 ease-in-out transform rounded-md bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110">
                Start your free trial now
              </button>
              <p className="text-xs text-center text-white text-opacity-60">
                ₹199 per month after 30-day trial. Cancel anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row w-screen md:h-[52vh] bg-sapGreen">
          <div className="relative min-w-screen md:w-[51vw] md:h-full h-96">
            <Image
              layout="fill"
              objectFit="contain"
              src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1625492514/imageedit_3_2559150679_l2j29i.jpg"
              alt="Banner"
            />
          </div>
          <div className="mx-auto md:mx-0">
            <h2 className="mt-5 text-3xl font-semibold text-white font-poppins">
              Try Audible today
            </h2>
            <div className="flex flex-col max-w-md">
              <div>
                <BannerCheck
                  text="1 credit a month to use on any audiobook of your choice. Choose from
                over 200,000 English and Hindi audiobooks."
                />
                <BannerCheck text="All the audiobooks in your Audible library are yours to keep, even if you cancel the membership." />
                <BannerCheck text="Free, unlimited listening to Audible Original shows. Download as many as you’d like." />
                <BannerCheck text="Listen offline, at no extra cost." />
              </div>
              <div className="w-80 ml-9">
                <button className="w-full py-2 mt-2 transition duration-500 ease-in-out transform rounded-md outline-none focus:outline-none bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110">
                  Start your free trial now
                </button>
                <p className="text-xs text-center text-white text-opacity-60">
                  ₹199 per month after 30-day trial. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default Banner;
