import { useState } from "react";
import NavMiddle from "../Navbutton/NavMiddle";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button/Button";
// import { useLocation } from "react-router-dom";
// import Banner from "../Banner/Banner";
// import Heading from "../Heading/Heading";
const Navbar = () => {
  // const currentPath = useLocation();
  // const title = {
  //   '/jobs':'All Jobs',
  //   '/statistics':'Statistics for Deep Analysis',
  //   '/applied':'All Applied Jobs',
  //   "/blog":'Blogs About Jobs'
  // }
  const [open, setOPen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/listed-books", name: "Listed Books", id: 2 },
    { path: "/pages-to-read", name: "Pages to Read", id: 3 },
    { path: "/pricing", name: "Pricing", id: 4 },
    { path: "/blog", name: "Blog", id: 5 },
  ];

  return (
    <div>
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto ">
        <div className="flex items-center gap-1">
          <div onClick={() => setOPen(!open)} className="text-2xl lg:hidden">
            {open ? <RxCross2 /> : <HiMenuAlt1 />}
          </div>
          <div className="text-3xl font-extrabold">boiPoka</div>
        </div>
        <NavMiddle routes={routes} open={open}></NavMiddle>
        <div className="flex gap-4">
          <Button innerText="sign Up"></Button>
          <Button innerText="sign In" bg="bg-[#59C6D2]"></Button>
        </div>
      </nav>
      {/* {currentPath.pathname === "/" ? <Banner></Banner> : <Heading title={title[currentPath.pathname]}></Heading>} */}
    </div>
  );
};

export default Navbar;
