import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useComponentVisible from "hooks/useComponentVisible";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import { useState } from "react";
import useDarkMode from "hooks/useDarkMode";
import requests from "utils/requests";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Header() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [colorTheme, setTheme] = useDarkMode();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <Fade top>
      <header className="sticky mt-2 font-poppins !z-20">
        <header className="flex px-3 text-xs font-semibold items-center justify-center">
          <div className="ml-auto flex items-center justify-center dark:text-gray-100">
            <SignedOut>
              <Link href="/sign-in">
                <span className="cursor-pointer ml-3 font-normal dark:text-gray-100">
                  Sign in
                </span>
              </Link>
              <span className="ml-3 font-normal dark:text-gray-100">|</span>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          <span
            onClick={() => router.push("help")}
            className="border-b-2 dark:text-gray-100 ml-3 md:mr-[270px] border-transparent hover:border-gray-800 dark:hover:border-gray-100 cursor-pointer delay-100 duration-100"
          >
            Help
          </span>
        </header>
        <header className="flex items-center justify-between w-full max-w-5xl px-5 mx-auto mt-2">
          <div className="hidden md:inline-flex">
            {colorTheme === "dark" ? (
              <Image
                width={140}
                height={54}
                className="cursor-pointer"
                objectFit="contain"
                onClick={() => router.push("/")}
                src="https://m.media-amazon.com/images/G/31/audibleweb/arya/navigation/audible_logo._CB490888215_.svg"
                alt="logo"
              />
            ) : (
              <Image
                width={140}
                height={54}
                className="cursor-pointer"
                objectFit="contain"
                onClick={() => router.push("/")}
                src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1626081418/782-7825680_audible-logo-graphic-design-hd-png-download-removebg-preview_ljltcm.png"
                alt="logo"
              />
            )}
          </div>
          <div className="items-center flex-1 hidden sm:flex">
            <div className="flex items-center mt-2 ml-4 space-x-8 justify-evenly">
              <p className="duration-100 delay-100 border-b-2 border-transparent cursor-pointer dark:text-gray-100 hover:border-gray-800 dark:hover:border-gray-100">
                Home
              </p>
              <div className="flex !z-50">
                <button
                  className="flex items-end duration-100 delay-100 border-b-2 border-transparent cursor-pointer dark:text-gray-100 focus:outline-none hover:border-gray-800 dark:hover:border-gray-100"
                  ref={ref}
                  onClick={() => setIsComponentVisible(!isComponentVisible)}
                >
                  Browse
                  <ChevronDownIcon className="w-3 h-3 mb-1 ml-1 text-gray-700 dark:text-gray-100" />
                </button>
                {isComponentVisible && (
                  <motion.div
                    ref={ref}
                    className="absolute top-20 p-3 border-2 border-gray-400 rounded-md !z-50 bg-white flex-wrap"
                    initial={{ height: 0, visibility: "hidden" }}
                    animate={
                      isComponentVisible
                        ? { height: "auto", visibility: "visible" }
                        : { height: 0, visibility: "hidden" }
                    }
                  >
                    <h1 className="text-gray-700">Audiobook Categories</h1>
                    <div className="flex">
                      <div>
                        {Object.entries(requests)
                          .slice(0, 6)
                          .map(([key, { title }]) => (
                            <h2
                              key={key}
                              className="mr-3 text-black cursor-pointer hover:underline"
                              onClick={() =>
                                router.push(`/books/?volume=${key}`)
                              }
                            >
                              {title}
                            </h2>
                          ))}
                      </div>
                      <div>
                        {Object.entries(requests)
                          .slice(6, 12)
                          .map(([key, { title }]) => (
                            <h2
                              key={key}
                              className="mr-3 text-black  cursor-pointer hover:underline"
                              onClick={() =>
                                router.push(`/books/?volume=${key}`)
                              }
                            >
                              {title}
                            </h2>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <p
                onClick={() => router.push("/membership")}
                className="duration-100 delay-100 border-b-2 border-transparent cursor-pointer dark:text-gray-100 hover:border-gray-800 dark:hover:border-gray-100"
              >
                <span className="hidden md:inline-block">About</span> Membership
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2 mx-5 ring-1 ring-gray-400 dark:ring-gray-100 w-60">
            <input
              className="text-xs bg-transparent focus:outline-none dark:text-gray-100 dark:placeholder-gray-100"
              placeholder="Search for a great book"
            />
            <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-100" />
          </div>
          {colorTheme !== "dark" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
          {isNavOpen ? (
            <ChevronUpIcon
              className="cursor-pointer sm:hidden dark:text-gray-100"
              width={20}
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          ) : (
            <ChevronDownIcon
              className="cursor-pointer sm:hidden dark:text-gray-100"
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
          <p className="p-3 dark:text-gray-100">Home</p>
          <p
            className="flex justify-center p-3 cursor-pointer max-h-12"
            onClick={() => setIsComponentVisible(!isComponentVisible)}
          >
            <p className="dark:text-gray-100">Browse</p>

            {isComponentVisible ? (
              <ChevronUpIcon
                className="pl-2 sm:hidden dark:text-gray-100"
                width={20}
              />
            ) : (
              <ChevronDownIcon
                className="pl-2 sm:hidden dark:text-gray-100"
                width={20}
              />
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
            <p className="dark:text-gray-100">Category 1</p>
            <p className="dark:text-gray-100">Category 2</p>
            <p className="dark:text-gray-100">Category 3</p>
            <p className="dark:text-gray-100">Category 4</p>
            <p className="dark:text-gray-100">Category 5</p>
          </motion.div>

          <p
            className="p-3 dark:text-gray-100"
            onClick={() => router.push("/membership")}
          >
            About Membership
          </p>
        </motion.nav>
      </header>
    </Fade>
  );
}

export default Header;
