import { BoxesLoader } from "react-awesome-loaders";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <BoxesLoader
        boxColor={"#FFC849"}
        desktopSize={"140px"}
        mobileSize={"80px"}
      />
    </div>
  );
}

export default Loader;
