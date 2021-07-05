import Image from "next/image";
import useComponentVisible from "../hooks/useComponentVisible";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/outline";
import { getSession, signIn, signOut } from "next-auth/client";

function Header({ session }) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleDropdown = () => {
    if (!isComponentVisible) {
      setIsComponentVisible(true);
    } else {
      setIsComponentVisible(false);
    }
  };

  return (
    <header className="sticky mt-5 font-poppins">
      <header className="flex text-xs font-semibold">
        <p className="ml-auto ">
          {session ? (
            <span className="font-poppins focus:outline-none ml-3 border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100">
              Hi, {session.user.name}
            </span>
          ) : (
            <span
              className="font-audible focus:outline-none ml-3 border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100"
              onClick={() => signIn()}
            >
              Sign in
            </span>
          )}
          <span className="ml-3 font-normal">|</span>
        </p>

        <span className="border-b-2 ml-3 md:mr-[270px] border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100">
          Help
        </span>
      </header>
      <header className="flex items-center px-[260px] justify-between mt-2">
        <div className="flex items-center ">
          <Image
            width={140}
            height={54}
            objectFit="contain"
            src="https://m.media-amazon.com/images/G/31/audibleweb/arya/navigation/audible_logo._CB490888215_.svg"
          />
          <div className="flex justify-evenly ml-4  mt-2 space-x-8">
            <p className="border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100">
              Home
            </p>
            <div className="flex">
              <button
                className="flex focus:outline-none items-end border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100"
                ref={ref}
                onClick={() => setIsComponentVisible(!isComponentVisible)}
              >
                Browse
                <ChevronDownIcon className="w-3 h-3 text-gray-700 ml-1 mb-1" />
              </button>
              {isComponentVisible ? (
                <div ref={ref} className="absolute top-20 browse-hover ">
                  <h1 className=" text-gray-700 " >Audiobook Categories</h1>
                  <div className="flex flex-row" >
                    <div>
                      <p className="cursor-pointer mr-3 border-b-2 hover:border-gray-800" >Fiction</p>
                      <p className="cursor-pointer mr-3 border-b-2 hover:border-gray-800" >Sci-Fi and Fantasy</p>
                      <p className="cursor-pointer mr-3 border-b-2 hover:border-gray-800" >Mysteries and Thrillers</p>
                      <p className="cursor-pointer mr-3 border-b-2 hover:border-gray-800" >Romance</p>
                      <p className="cursor-pointer mr-3 border-b-2 hover:border-gray-800" >Teen and Young Adult</p>
                      <p className="cursor-pointer mr-3 border-b-2 hover:border-gray-800" >Religion and Spirituality</p>
                    </div>
                    <div>
                      <p className="cursor-pointer  border-b-2 hover:border-gray-800" >Self-Development</p>
                      <p className="cursor-pointer  border-b-2 hover:border-gray-800" >Biographies & Memoirs</p>
                      <p className="cursor-pointer  border-b-2 hover:border-gray-800" >Mysteries and Thrillers</p>
                      <p className="cursor-pointer  border-b-2 hover:border-gray-800" >Romance</p>
                      <p className="cursor-pointer  border-b-2 hover:border-gray-800" >Teen and Young Adult</p>
                      <p className="cursor-pointer  border-b-2 hover:border-gray-800" >Religion and Spirituality</p>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <p className="border-b-2 border-transparent hover:border-gray-800 cursor-pointer delay-100 duration-100">
              About Membership
            </p>
          </div>
        </div>
        <div className="flex ring-1 ring-gray-400 px-4 items-center py-2 mr-2 w-60 justify-between">
          <input
            className="focus:outline-none text-xs"
            placeholder="Search for a great book"
          />
          <SearchIcon className="w-5 h-5 text-gray-500" />
        </div>
      </header>
    </header>
  );
}

export default Header;
