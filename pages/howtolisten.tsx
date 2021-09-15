import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const howtolisten = () => {
  return (
    <div>
      <Head>
        <title>How to listen | Audible.in</title>
        <link rel="icon" href="https://www.audible.in/favicon.ico" />
      </Head>
      <Header />
      <main className="w-[82vw] flex flex-col mt-10 items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
        <div className="mb-5">
          <Image
            src="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/5ways_desktop_hp_1000x350._CB1198675309_.jpg"
            width={1000}
            height={350}
            alt="alt-banner"
          />
        </div>
        <div className="mt-10">
          <Fade left>
            <div className="-mt-2 -mb-2 div">
              <Image
                src="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/5ways_banner1_desktop._CB1198675309_.jpg"
                width={1000}
                height={350}
                alt="alt-banner"
              />
            </div>
          </Fade>
          <Fade right>
            <div className="-mt-2 -mb-2 div">
              <Image
                src="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/5ways_to_get_most_desktop_banner2._CB1198675309_.jpg"
                width={1000}
                height={350}
                alt="alt-banner"
              />
            </div>
          </Fade>
          <Fade left>
            <div className="-mt-2 -mb-2 div">
              <Image
                src="https://m.media-amazon.com/images/G/31/AudibleIN/2018/audibleweb/October/5ways_banner3_desktop._CB481120297_.jpg"
                width={1000}
                height={350}
                alt="alt-banner"
              />
            </div>
          </Fade>
          <Fade right>
            <div className="-mt-2 -mb-2 div">
              <Image
                src="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/5ways_to_get_most_desktop_banner4._CB1198675309_.jpg"
                width={1000}
                height={350}
                alt="alt-banner"
              />
            </div>
          </Fade>
          <Fade left>
            <div className="-mt-2 -mb-2 div">
              <Image
                src="https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/5ways_to_get_most_desktop_banner5._CB1198675309_.jpg"
                width={1000}
                height={350}
                alt="alt-banner"
              />
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <h1 className="mt-5 mb-5 text-3xl font-medium justify-self-start">
            Start your journey with these great first listens
          </h1>
        </Fade>
        <div className="grid grid-flow-col gap-4 mt-10 mb-10 auto-cols-max">
          <Fade left>
            <div className="grid grid-flow-col grid-rows-2 gap-4">
              <div>
                <Image
                  src="https://m.media-amazon.com/images/I/51ohTl7gYFL._SL320_.jpg"
                  width={149}
                  height={149}
                  alt="alt-img"
                />
              </div>
              <div>
                <Image
                  src="https://m.media-amazon.com/images/I/41IGLTetzeL._SL320_.jpg"
                  width={149}
                  height={149}
                  alt="alt-img"
                />
              </div>
              <div>
                <Image
                  src="https://m.media-amazon.com/images/I/51Cyok-6TuL._SL320_.jpg"
                  width={149}
                  height={149}
                  alt="alt-img"
                />
              </div>
              <div>
                <Image
                  src="https://m.media-amazon.com/images/I/51WtRZ7AtpL._SL320_.jpg"
                  width={149}
                  height={149}
                  alt="alt-img"
                />
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="grid grid-flow-col grid-rows-1 gap-4">
              <Image
                src="https://m.media-amazon.com/images/I/41Y1DPGbDvL._SL320_.jpg"
                width={319}
                height={315}
                alt="alt-img"
              />
            </div>
          </Fade>
          <Fade right>
            <div className="grid grid-flow-col grid-rows-2 gap-4">
              <div>
                <Image
                  src="https://m.media-amazon.com/images/I/51N-9WgqjsL._SL320_.jpg"
                  width={149}
                  height={149}
                  alt="alt-img"
                />
              </div>
              <div>
                <Image
                  src="https://m.media-amazon.com/images/I/51Z4y2i1xHL._SL320_.jpg"
                  width={149}
                  height={149}
                  alt="alt-img"
                />
              </div>
              <div>
                <Image
                  src="https://m.media-amazon.com/images/I/51cEzKIUQrL._SL320_.jpg"
                  width={149}
                  height={149}
                  alt="alt-img"
                />
              </div>
              <div>
                <Image
                  src="https://m.media-amazon.com/images/I/51MtGRN9C2L._SL320_.jpg"
                  width={149}
                  height={149}
                  alt="alt-img"
                />
              </div>
            </div>
          </Fade>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default howtolisten;
