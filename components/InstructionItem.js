import Image from "next/image";

function InstructionItem({ image, heading, description }) {
  return (
    <div className="p-7">
      <Image src={image} width={120} height={120} alt="alt-logo" />
      <h3 className="my-2 text-xl font-medium dark:text-gray-100">{heading}</h3>
      <p className="text-sm text-gray-400 dark:text-gray-200">{description}</p>
    </div>
  );
}

export default InstructionItem;
