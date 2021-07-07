import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/outline"

function FAQItem({question, answer}) {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div 
            className="mb-5 cursor-pointer" 
            onClick={() => setIsVisible(!isVisible)}
        >
            <div className="flex items-center max-h-6">
                {
                    isVisible ?
                    <ChevronDownIcon width={15} />
                    : <ChevronRightIcon width={15} />
                }
                <h3 className="font-semibold ml-2">{question}</h3>
            </div>

            <motion.p 
                initial={{height: 0, visibility:"hidden"}}
                animate={isVisible ? {height: "auto", visibility:"visible"} : {height: 0, visibility:"hidden"}}
                className="pl-5 text-sm text-gray-600 my-2"
            >{answer}</motion.p>
            
        </div>
    )
}

export default FAQItem
