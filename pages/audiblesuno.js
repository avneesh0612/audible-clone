import Header from "components/Header";
import Head from "next/head";
import Footer from "components/Footer";
import Image from "next/image";
import InstructionItem from "components/InstructionItem";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function audiblesuno() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Audible Suno | India's most famous voices completely free</title>
        <link rel="icon" href="https://www.audible.in/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-6">
        <Image
          onClick={() =>
            router.push(
              "https://play.google.com/store/apps/details?id=com.audible.universal&pf_rd_p=4592e6fb-1533-408f-91c6-16f09d1dd5c6&pf_rd_r=JDCRZCZS53FMEQ19CR1Q"
            )
          }
          src="https://m.media-amazon.com/images/G/31/AudibleIN/2020/audibleweb/July/suno_top_banner_desktop_cta.png"
          width={1800}
          height={400}
          alt="alt-banner"
          className="cursor-pointer"
        />
        <div className="w-[82vw] flex mb-10 flex-col  items-center overflow-x-hidden justify-center mx-auto dark:text-gray-100">
          <div className="text-center dark:bg-gray-800">
            <div className="max-w-screen-xl grid-flow-row-dense grid-cols-3 py-10 mx-auto md:grid">
              <Fade left>
                <InstructionItem
                  heading="India's most famous voices"
                  description="Bollywood stars, TV celebrities, comedians, famous authors and more."
                  image="https://m.media-amazon.com/images/G/31/AudibleIN/2019/Suno/adbl_IN_suno_LP_rtb_star_updated._CB1198675309_.svg"
                />
              </Fade>
              <Fade bottom>
                <InstructionItem
                  heading="Completely free"
                  description="No payment, no sign-up.It's absolutely free."
                  image="https://m.media-amazon.com/images/G/35/AudibleAU/en_AU/CRO/AU_Member_2.0_onsite_icons_hoursv3._CB1198675309_.svg"
                />
              </Fade>
              <Fade right>
                <InstructionItem
                  heading="Engaging stories"
                  description="Take your pick from Audible Original dramas, talk-show, self-development, spirituality and more."
                  image="https://m.media-amazon.com/images/G/35/AudibleAU/en_AU/CRO/AU_Member_2.0_onsite_icons_anytimev3._CB1198675309_.svg"
                />
              </Fade>
            </div>
            <button className="text-center px-3 py-2 my-1 mt-2 w-96 transition duration-500 ease-in-out transform rounded-sm bg-darkYellow hover:bg-lightYellow hover:-translate-y-1 hover:scale-110 focus:outline-none">
              Download Audible Suno app
            </button>
          </div>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4 mt-10 mb-10">
            <Fade left>
              <Image
                src="https://m.media-amazon.com/images/G/31/AudibleIN/2019/audibleweb/September/adbl_IN_suno_LP_desktop_kaali._CB1198675309_.jpg"
                width={489}
                height={235}
                alt="alt-banner"
                className="cursor-pointer"
              />
            </Fade>
            <Fade left>
              <Image
                src="https://m.media-amazon.com/images/G/31/AudibleIN/2019/audibleweb/November/adbl_IN_suno_premium_marquee4._CB446797704_.jpg"
                width={489}
                height={235}
                alt="alt-banner"
                className="cursor-pointer"
              />
            </Fade>
            <Fade right>
              <Image
                src="https://m.media-amazon.com/images/G/31/AudibleIN/2019/Suno/Zing/adbl_IN_suno_LP_top_zing_yoddha._CB447339159_.jpg"
                width={489}
                height={235}
                alt="alt-banner"
                className="cursor-pointer"
              />
            </Fade>
            <Fade right>
              <Image
                src="https://m.media-amazon.com/images/G/31/AudibleIN/2019/audibleweb/November/adbl_IN_suno_premium_marquee1._CB446799277_.jpg"
                width={489}
                height={235}
                alt="alt-banner"
                className="cursor-pointer"
              />
            </Fade>
          </div>
          <h2 className="mb-5 mt-10 dark:text-gray-100">Learn more</h2>
          <Image
            src="https://m.media-amazon.com/images/G/01/seo/authors-project/black-horizontal-divider-line._CB1552407217_.png"
            width={50}
            height={2}
            alt="alt-banner"
          />
        </div>

        <Image
          src="https://m.media-amazon.com/images/G/31/AudibleIN/2020/audibleweb/November/1600x300.jpg"
          width={1600}
          height={300}
          alt="alt-banner"
          className="cursor-pointer"
        />
        <div className="w-[90vw] flex mt-10 mb-10 flex-col items-center justify-center mx-auto dark:text-gray-100">
          <h2 className="mb-5 dark:text-gray-100">Featured Voices</h2>
          <Image
            src="https://m.media-amazon.com/images/G/01/seo/authors-project/black-horizontal-divider-line._CB1552407217_.png"
            width={50}
            height={2}
            alt="alt-banner"
          />
          <div className="grid grid-flow-col grid-cols-4">
            <Fade left>
              <div className="p-7">
                <Image
                  src="https://m.media-amazon.com/images/G/31/AudibleIN/2019/audibleweb/November/adbl_IN_suno_LP_author4._CB1198675309_.jpg"
                  width={232}
                  height={279}
                  alt="alt-img"
                />
                <h3 className="my-2 text-xl font-medium text-center text-gray-600 dark:text-gray-100">
                  Vir Das
                </h3>
              </div>
            </Fade>
            <Fade left>
              <div className="p-7">
                <Image
                  src="https://m.media-amazon.com/images/G/31/AudibleIN/2019/audibleweb/November/adbl_IN_suno_LP_author3._CB446759516_.jpg"
                  width={232}
                  height={279}
                  alt="alt-img"
                />
                <h3 className="my-2 text-xl font-medium text-center text-gray-600 dark:text-gray-100">
                  Tahira Kashyap Khurrana
                </h3>
              </div>
            </Fade>
            <Fade right>
              <div className="p-7">
                <Image
                  src="https://m.media-amazon.com/images/G/31/AudibleIN/2019/audibleweb/November/adbl_IN_suno_LP_author1_updated._CB1198675309_.jpg"
                  width={232}
                  height={279}
                  alt="alt-img"
                />
                <h3 className="my-2 text-xl font-medium text-center text-gray-600 dark:text-gray-100">
                  Neena Gupta
                </h3>
              </div>
            </Fade>
            <Fade right>
              <div className="p-7">
                <Image
                  src="https://m.media-amazon.com/images/G/31/AudibleIN/2019/audibleweb/November/adbl_IN_suno_LP_author2_updated._CB1198675309_.jpg"
                  width={232}
                  height={279}
                  alt="alt-img"
                />
                <h3 className="my-2 text-xl font-medium text-center text-gray-600 dark:text-gray-100">
                  Om Swami
                </h3>
              </div>
            </Fade>
          </div>
          <h2 className="mb-5 dark:text-gray-100">Discover more shows</h2>
          <Image
            src="https://m.media-amazon.com/images/G/01/seo/authors-project/black-horizontal-divider-line._CB1552407217_.png"
            width={50}
            height={2}
            alt="alt-banner"
            className="mb-10"
          />
          <div className="grid grid-flow-col auto-cols-max gap-4 mt-10">
            <Fade left>
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div>
                  <Image
                    src="https://m.media-amazon.com/images/I/51xsdzLsp8L._SL320_.jpg"
                    width={149}
                    height={149}
                    alt="alt-img"
                  />
                </div>
                <div>
                  <Image
                    src="https://m.media-amazon.com/images/I/51SzJs6u9-L._SL320_.jpg"
                    width={149}
                    height={149}
                    alt="alt-img"
                  />
                </div>
                <div>
                  <Image
                    src="https://m.media-amazon.com/images/I/51eQfQ+wjmL._SL320_.jpg"
                    width={149}
                    height={149}
                    alt="alt-img"
                  />
                </div>
                <div>
                  <Image
                    src="https://m.media-amazon.com/images/I/617KwhNISiL._SL320_.jpg"
                    width={149}
                    height={149}
                    alt="alt-img"
                  />
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="grid grid-rows-1 grid-flow-col gap-4">
                <Image
                  src="https://m.media-amazon.com/images/I/61a7sMc1P3L._SL320_.jpg"
                  width={319}
                  height={315}
                  alt="alt-img"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div>
                  <Image
                    src="https://m.media-amazon.com/images/I/51bpZ8AQvoL._SL320_.jpg"
                    width={149}
                    height={149}
                    alt="alt-img"
                  />
                </div>
                <div>
                  <Image
                    src="https://m.media-amazon.com/images/I/61XA4bCPDIL._SL320_.jpg"
                    width={149}
                    height={149}
                    alt="alt-img"
                  />
                </div>
                <div>
                  <Image
                    src="https://m.media-amazon.com/images/I/61dCbFhb6IL._SL320_.jpg"
                    width={149}
                    height={149}
                    alt="alt-img"
                  />
                </div>
                <div>
                  <Image
                    src="https://m.media-amazon.com/images/I/51n57EwStjL._SL320_.jpg"
                    width={149}
                    height={149}
                    alt="alt-img"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default audiblesuno;
