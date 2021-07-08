import { CheckIcon } from "@heroicons/react/outline";

function BannerCheck({ text }) {
  return (
    <div className="flex mt-2 items-start">
      <CheckIcon className="min-w-[20px] mt-1 max-w-[20px]  text-white mr-5" />
      <p className="-ml-2 text-left text-white text-opacity-60">{text}</p>
    </div>
  );
}

export default BannerCheck;
