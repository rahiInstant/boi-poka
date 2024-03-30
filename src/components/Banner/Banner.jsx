import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="mx-3 bg-[#1313130d] py-8 lg:py-20 px-4 lg:px-32 rounded-[24px] flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="lg:w-[60%] w-[95%] mt-10 lg:mt-0 flex flex-col items-center lg:items-start">
        <h1 className="text-3xl lg:text-[56px] text-center lg:text-left font-bold lg:leading-[84px] mb-6 lg:mb-12 font-playfair">
          Books to freshen up your bookshelf
        </h1>
        <Link to="/listed-books"><Button innerText="View The List" font="font-bold"></Button></Link>
      </div>
      <div className="flex justify-end">
        <img className="w-[80%] " src="./banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
