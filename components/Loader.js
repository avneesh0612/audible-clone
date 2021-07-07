import { BookLoader } from "react-awesome-loaders";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <BookLoader
        boxColor={""}
        background={"linear-gradient(50deg, #FFC849, #ffde91)"}
        desktopSize={"100px"}
        mobileSize={"60px"}
        textColor={"#FFC849"}
      />
    </div>
  );
}

export default Loader;
