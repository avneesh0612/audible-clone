const Footer: React.FC = () => {
  return (
    <div className="w-full p-10 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      <div className="grid w-3/4 grid-flow-row-dense mx-auto leading-loose max-w-7xl sm:grid-cols-4">
        <div className="mb-5">
          <p className="cursor-pointer hover:underline">Contact Us</p>
          <p className="cursor-pointer hover:underline">Help</p>
          <p className="cursor-pointer hover:underline">Business Enquiries</p>
          <p className="cursor-pointer hover:underline">Affiliates</p>
          <p className="cursor-pointer hover:underline">Mobile Site</p>
        </div>
        <div className="mb-5">
          <p className="cursor-pointer hover:underline">Audible Mobile Apps</p>
          <p className="cursor-pointer hover:underline">Gift Centre</p>
          <p className="cursor-pointer hover:underline">
            Redeem a Promotional Code
          </p>
          <p className="cursor-pointer hover:underline">
            Whispersync for Voice
          </p>
        </div>
        <div className="mb-5 ">
          <p className="cursor-pointer hover:underline">Best Sellets</p>
          <p className="cursor-pointer hover:underline">New Releases</p>
          <p className="cursor-pointer hover:underline">Foreign Language</p>
          <p className="cursor-pointer hover:underline">
            Mystery, Thriller & Suspense
          </p>
          <p className="cursor-pointer hover:underline">
            Science Ficiton & Fantasy
          </p>
          <p className="cursor-pointer hover:underline">Road Tripe Listens</p>
          <p className="cursor-pointer hover:underline">Summer Listens</p>
        </div>
        <div className="mb-5">
          <p className="cursor-pointer hover:underline">History</p>
          <p className="cursor-pointer hover:underline">
            Biographies & Memoirs
          </p>
          <p className="cursor-pointer hover:underline">Business & Careers</p>
          <p className="cursor-pointer hover:underline">Health & Wellness</p>
          <p className="cursor-pointer hover:underline">
            Literacture & Fiction
          </p>
          <p className="cursor-pointer hover:underline">
            Children&apos;s Audiobooks
          </p>
          <p className="cursor-pointer hover:underline">Comedy</p>
        </div>
      </div>
      <hr className="my-5 border-gray-400 dark:border-gray-100" />
      <div className="flex items-center w-3/4 mx-auto justify-evenly">
        <p className="border-r-[1px] pr-5 text-sm border-gray-800 dark:border-gray-100">
          © Copyright 1997 - 2021 Audible, Inc
        </p>
        <p className="border-r-[1px] pr-5 text-sm border-gray-800 dark:border-gray-100">
          Conditions of Use
        </p>
        <p className="border-r-[1px] pr-5 text-sm border-gray-800 dark:border-gray-100">
          Privacy Policy
        </p>
        <p className="border-r-[1px] pr-5 text-sm border-gray-800 dark:border-gray-100">
          Interest-Based Ads
        </p>
        <p className="border-r-[1px] pr-5 text-sm border-gray-800 dark:border-gray-100">
          Recurring Payment
        </p>
        <p className="pr-5 text-sm">Terms India (English)</p>
      </div>
    </div>
  );
};

export default Footer;
