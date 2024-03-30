import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { getData } from "../local";
import { ReadContext, WishContext } from "./root.js";

const Root = () => {
  const [read, setRead] = useState([]);
  const [wish, setWish] = useState([]);
  // console.log(read);
  // console.log(wish);
  useEffect(() => {
    setRead(getData("read"));
    setWish(getData("wish"));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <WishContext.Provider value={[wish, setWish]}>
        <ReadContext.Provider value={[read, setRead]}>
          <Outlet></Outlet>
        </ReadContext.Provider>
      </WishContext.Provider>
    </div>
  );
};

export default Root;
