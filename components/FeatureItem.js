function FeatureItem({title, description}) {
    return (
        <div className="flex my-5">
            <div>
                <h2 className="text-xl font-medium">{title}</h2>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default FeatureItem
