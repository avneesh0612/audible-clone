import { motion } from "framer-motion";

function HelpTrending({ image, text }) {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.1, 1.05],
        zIndex: 1,
        transition: {
          duration: 1,
        },
      }}
      style={{ background: `url(${image})` }}
      className="h-56 ml-2 !rounded-lg justify-items-end flex text-center w-52 !bg-center orange-shadow cursor-pointer hover:underline"
    >
      <h1 className="text-base text-center !mt-auto font-medium  font-poppins w-full mb-2 ">
        {text}
      </h1>
    </motion.div>
  );
}

export default HelpTrending;
