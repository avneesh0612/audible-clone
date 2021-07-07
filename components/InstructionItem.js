import Image from "next/image"

function InstructionItem({image, heading, description}) {
    return (
        <div className="p-7">
            <Image
                src={image}
                width={120}
                height={120}
                alt="alt-logo"
            />
            <h3 className="font-medium text-xl my-2">{heading}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    )
}

export default InstructionItem
