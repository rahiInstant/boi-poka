import { IoIosArrowDown } from "react-icons/io";
import "./ListedBooks.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Listed.js";
import { useContext } from "react";
import { ReadContext, WishContext } from "../Root/root.js";

const ListedBooks = () => {
  const [read, setRead] = useContext(ReadContext);
  const [wish, setWish] = useContext(WishContext);
  const currentPath = useLocation();
  function handleOnChange(e) {
    if (e.target.value === "1") {
      if (currentPath.pathname === "/listed-books/read") {
        const sortRead = [...read].sort((a, b) => b.rating - a.rating);
        setRead(sortRead);
      } else if (currentPath.pathname === "/listed-books/wish") {
        const sortWish = [...wish].sort((a, b) => b.rating - a.rating);
        setWish(sortWish);
      }
    } else if (e.target.value === "2") {
      if (currentPath.pathname === "/listed-books/read") {
        const sortRead = [...read].sort((a, b) => b.totalPages - a.totalPages);
        setRead(sortRead);
      } else if (currentPath.pathname === "/listed-books/wish") {
        const sortWish = [...wish].sort((a, b) => b.totalPages - a.totalPages);
        setWish(sortWish);
      }
    } else if (e.target.value === "3") {
      if (currentPath.pathname === "/listed-books/read") {
        const sortRead = [...read].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setRead(sortRead);
      } else if (currentPath.pathname === "/listed-books/wish") {
        const sortWish = [...wish].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setWish(sortWish);
      }
    }
  }
  function handleCurrentPath() {
    if (currentPath.pathname == "/listed-books") {
      return 'active';
    } else {
      return '';
    }
  }
  return (
    <div className="max-w-7xl mx-auto mb-24">
      <div className="text-[28px] font-bold bg-[#1313130D] py-8 rounded-2xl text-center">
        Books
      </div>
      <div className="my-3 py-8 flex justify-center">
        <div className="relative h-fit w-fit">
          <select
            onChange={handleOnChange}
            name=""
            id="select"
            className="bg-[#23BE0A] py-4 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-[250px]"
          >
            <option value="" className="hidden">
              Sort by--
            </option>
            <option className="bg-white text-lg font-semibold" value="1">
              Rating
            </option>
            <option className="bg-white text-lg font-semibold" value="2">
              Number of Pages
            </option>
            <option className="bg-white text-lg font-semibold" value="3">
              Published Year
            </option>
          </select>
          <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex border-b border-b-[#1313134D] gap-2 text-lg h-[40px] text-[#13131380]">
          <NavLink className={handleCurrentPath()} to="/listed-books/read">
            <button className="p-2 pb-0 h-[40px]">Read Books</button>
          </NavLink>
          <NavLink to="/listed-books/wish">
            <button className="p-2 pb-0 h-[40px]">Wish List</button>
          </NavLink>
        </div>
        <div className="mt-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
