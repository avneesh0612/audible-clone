import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/outline";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="mb-5 cursor-pointer"
      onClick={() => setIsVisible(!isVisible)}
    >
      <div className="flex items-center max-h-6 dark:text-gray-100">
        {isVisible ? (
          <ChevronDownIcon width={15} />
        ) : (
          <ChevronRightIcon width={15} />
        )}
        <h3 className="ml-2 font-semibold dark:text-gray-100">{question}</h3>
      </div>

      <motion.p
        initial={{ height: 0, visibility: "hidden" }}
        animate={
          isVisible
            ? { height: "auto", visibility: "visible" }
            : { height: 0, visibility: "hidden" }
        }
        className="pl-5 my-2 text-sm text-gray-600 dark:text-gray-300"
      >
        {answer}
      </motion.p>
    </div>
  );
};

export default FAQItem;
