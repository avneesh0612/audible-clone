function FeatureItem({ title, description }) {
  return (
    <div className="flex my-5">
      <div>
        <h2 className="text-xl font-medium dark:text-gray-100">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;
