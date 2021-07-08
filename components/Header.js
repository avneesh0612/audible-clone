import Image from "next/image";
import { useRouter } from "next/router";
import useComponentVisible from "../hooks/useComponentVisible";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { getSession, signIn, signOut } from "next-auth/client";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import { useState } from "react";

function Header({ session }) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const handleDropdown = () => {
    if (!isComponentVisible) {
      setIsComponentVisible(true);
    } else {
      setIsComponentVisible(false);
    }
  };

  return (
    <Fade top>
      <header className="sticky mt-2 font-poppins !z-20">
        <header className="flex text-xs font-semibold px-3">
          <div className="ml-auto">
            {session ? (
              <span
                onClick={() => signOut()}
                className="font-poppins focus:outline-none ml-3 border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100"
              >
                Hi, {session.user.name}
              </span>
            ) : (
              <span
                className="focus:outline-none ml-3 border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100"
                onClick={() => signIn()}
              >
                Sign in
              </span>
            )}
            <span className="ml-3 font-normal">|</span>
          </div>

          <span
            onClick={() => router.push("help")}
            className="border-b-2 ml-3 md:mr-[270px] border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100"
          >
            Help
          </span>
        </header>
        <header className="flex items-center px-5 justify-between mt-2 max-w-5xl mx-auto w-full">
          <Image
            width={140}
            height={54}
            className="cursor-pointer"
            objectFit="contain"
            onClick={() => router.push("/")}
            src="https://m.media-amazon.com/images/G/31/audibleweb/arya/navigation/audible_logo._CB490888215_.svg"
          />
          <div className="hidden sm:flex items-center flex-1">
            <div className="flex justify-evenly items-center ml-4  mt-2 space-x-8">
              <p className="border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100">
                Home
              </p>
              <div className="flex !z-50">
                <button
                  className="flex focus:outline-none items-end border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100"
                  ref={ref}
                  onClick={() => setIsComponentVisible(!isComponentVisible)}
                >
                  Browse
                  <ChevronDownIcon className="w-3 h-3 text-gray-700 ml-1 mb-1" />
                </button>
                {isComponentVisible && (
                  <motion.div
                    ref={ref}
                    className="absolute top-20 p-3 border-2 border-gray-400 rounded-md !z-50 bg-white"
                    initial={{ height: 0, visibility: "hidden" }}
                    animate={
                      isComponentVisible
                        ? { height: "auto", visibility: "visible" }
                        : { height: 0, visibility: "hidden" }
                    }
                  >
                    <h1 className=" text-gray-700 ">Audiobook Categories</h1>
                    <div className="flex flex-row">
                      <div>
                        <p className="dropdown_option">Fiction</p>
                        <p className="dropdown_option">Sci-Fi and Fantasy</p>
                        <p className="dropdown_option">
                          Mysteries and Thrillers
                        </p>
                        <p className="dropdown_option">Romance</p>
                        <p className="dropdown_option">Teen and Young Adult</p>
                        <p className="dropdown_option">
                          Religion and Spirituality
                        </p>
                      </div>
                      <div>
                        <p className="dropdown_option">Self-Development</p>
                        <p className="dropdown_option">Biographies & Memoirs</p>
                        <p className="dropdown_option">
                          Mysteries and Thrillers
                        </p>
                        <p className="dropdown_option">Romance</p>
                        <p className="dropdown_option">Teen and Young Adult</p>
                        <p className="dropdown_option">
                          Religion and Spirituality
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <p className="border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100">
                About Membership
              </p>
            </div>
          </div>
          <div className="flex ring-1 ring-gray-400 px-4 items-center py-2 mx-5 w-60 justify-between">
            <input
              className="focus:outline-none text-xs"
              placeholder="Search for a great book"
            />
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
          {isNavOpen ? (
            <ChevronUpIcon
              className="sm:hidden cursor-pointer"
              width={20}
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          ) : (
            <ChevronDownIcon
              className="sm:hidden cursor-pointer"
              width={20}
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          )}
        </header>

        <motion.nav
          initial={{ height: 0, visibility: "hidden" }}
          animate={
            isNavOpen
              ? { height: "auto", visibility: "visible" }
              : { height: 0, visibility: "hidden" }
          }
          className="sm:hidden px-4 text-center"
        >
          <p className="p-3">Home</p>
          <p
            className="p-3 flex justify-center cursor-pointer max-h-12"
            onClick={() => setIsComponentVisible(!isComponentVisible)}
          >
            <p>Browse</p>

            {isComponentVisible ? (
              <ChevronUpIcon className="sm:hidden pl-2" width={20} />
            ) : (
              <ChevronDownIcon className="sm:hidden pl-2" width={20} />
            )}
          </p>
          <motion.div
            className={`${isComponentVisible && "pb-3"}`}
            initial={{ height: 0 }}
            animate={
              isComponentVisible
                ? { height: "auto", visibility: "visible" }
                : { height: 0, visibility: "hidden" }
            }
          >
            <p>Category 1</p>
            <p>Category 2</p>
            <p>Category 3</p>
            <p>Category 4</p>
            <p>Category 5</p>
          </motion.div>

          <p className="p-3">About Membership</p>
        </motion.nav>
      </header>
    </Fade>
  );
}

export default Header;
