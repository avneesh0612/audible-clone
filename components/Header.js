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
        <header className="flex px-3 text-xs font-semibold">
          <div className="ml-auto">
            {session ? (
              <span
                onClick={() => signOut()}
                className="ml-3 duration-100 delay-100 border-b-2 border-transparent cursor-pointer font-poppins focus:outline-none hover:border-gray-800"
              >
                Hi, {session.user.name}
              </span>
            ) : (
              <span
                className="ml-3 duration-100 delay-100 border-b-2 border-transparent cursor-pointer focus:outline-none hover:border-gray-800"
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
        <header className="flex items-center justify-between w-full max-w-5xl px-5 mx-auto mt-2">
          <Image
            width={140}
            height={54}
            className="cursor-pointer"
            objectFit="contain"
            onClick={() => router.push("/")}
            src="https://m.media-amazon.com/images/G/31/audibleweb/arya/navigation/audible_logo._CB490888215_.svg"
            alt="logo"
          />
          <div className="items-center flex-1 hidden sm:flex">
            <div className="flex items-center mt-2 ml-4 space-x-8 justify-evenly">
              <p className="duration-100 delay-100 border-b-2 border-transparent cursor-pointer hover:border-gray-800">
                Home
              </p>
              <div className="flex !z-50">
                <button
                  className="flex items-end duration-100 delay-100 border-b-2 border-transparent cursor-pointer focus:outline-none hover:border-gray-800"
                  ref={ref}
                  onClick={() => setIsComponentVisible(!isComponentVisible)}
                >
                  Browse
                  <ChevronDownIcon className="w-3 h-3 mb-1 ml-1 text-gray-700" />
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
                    <h1 className="text-gray-700 ">Audiobook Categories</h1>
                    <div className="flex">
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
              <p className="duration-100 delay-100 border-b-2 border-transparent cursor-pointer hover:border-gray-800">
                <span
                  className="hidden md:inline-block"
                  onClick={() => router.push("/membership")}
                >
                  About
                </span>{" "}
                Membership
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2 mx-5 ring-1 ring-gray-400 w-60">
            <input
              className="text-xs focus:outline-none"
              placeholder="Search for a great book"
            />
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
          {isNavOpen ? (
            <ChevronUpIcon
              className="cursor-pointer sm:hidden"
              width={20}
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          ) : (
            <ChevronDownIcon
              className="cursor-pointer sm:hidden"
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
          className="px-4 text-center sm:hidden"
        >
          <p className="p-3">Home</p>
          <p
            className="flex justify-center p-3 cursor-pointer max-h-12"
            onClick={() => setIsComponentVisible(!isComponentVisible)}
          >
            <p>Browse</p>

            {isComponentVisible ? (
              <ChevronUpIcon className="pl-2 sm:hidden" width={20} />
            ) : (
              <ChevronDownIcon className="pl-2 sm:hidden" width={20} />
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

          <p className="p-3" onClick={() => router.push("/membership")}>
            About Membership
          </p>
        </motion.nav>
      </header>
    </Fade>
  );
}

export default Header;
