import { useLoaderData, useParams } from "react-router-dom";
import { useContext } from "react";
// import { ReadContext, WishContext } from "../Root/Root";
import { getData, removeData, setData } from "../local";
import { ReadContext, WishContext } from "../Root/root";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Book = () => {
  const loaderData = useLoaderData();
  const data = [...loaderData];
  const param = useParams();
  const [read, setRead] = useContext(ReadContext);
  const [wish, setWish] = useContext(WishContext);
  function currentData() {
    const actualData = data.find(
      (item) => item.bookId === parseInt(param.bookID)
    );
    return actualData;
  }

  const actData = currentData();
  const {
    image,
    author,
    bookName,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = currentData();

  // let obj ={image,author,bookName,category,review,tags,totalPages,publisher,yearOfPublishing, rating}
  function isReadList() {
    for (let book of read) {
      if (book.bookId === actData.bookId) {
        return false;
      }
    }
    return true;
  }

  function isWishList() {
    for (let book of wish) {
      if (book.bookId === actData.bookId) {
        return false;
      }
    }
    return true;
  }
  const notify = (text) => toast(text);
  function isLS(key) {
    const data = getData(key);
    for (let item of data) {
      if (item.bookId === actData.bookId) {
        return false;
      }
    }
    return true;
  }
  return (
    <div className="max-w-7xl mx-auto lg:h-[600px] flex flex-col lg:flex-row gap-10 mt-10  px-7 mb-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="p-4 lg:p-16 bg-[#1313130D] lg:h-full w-full lg:w-1/2 rounded-2xl flex justify-center items-center">
        <img
          className="w-[200px] lg:w-[350px] h-[280px] lg:h-[400px]"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 ">
        <h1 className="text-2xl font-bold font-playfair mt-4">{bookName}</h1>
        <h1 className="font-medium text-[#131313cc] mt-4">
          By: <span>{author}</span>
        </h1>
        <hr className="mt-6 mb-4" />
        <h2 className="font-medium text-[#131313cc] flex justify-between">
          {category}
        </h2>
        <hr className="mt-4 mb-6" />
        <p>
          <span className="font-bold">Review </span>: {review}
        </p>
        <div className="mt-6 flex gap-4 items-center">
          <h1 className="font-bold">Tag</h1>
          <h1 className="py-2 px-4 rounded-[30px] bg-[#23be0a0d] text-[#23BE0A] font-medium w-fit">
            {tags[0]}
          </h1>
          <h1 className="py-2 px-4 rounded-[30px] bg-[#23be0a0d] text-[#23BE0A] font-medium w-fit">
            {tags[1]}
          </h1>
        </div>
        <hr className="my-6" />
        <div className="grid grid-cols-2 w-full lg:w-[450px]  gap-3">
          <div>Number of Pages:</div>
          <span className="font-semibold">{totalPages}</span>
          <div>Publisher:</div>
          <span className="font-semibold">{publisher}</span>
          <div>Year of Publishing:</div>
          <span className="font-semibold">{yearOfPublishing}</span>
          <div>Rating:</div>
          <span className="font-semibold">{rating}</span>
        </div>
        <div className="mt-8 flex gap-6">
          <button
            onClick={() => {
              if (isReadList()) {
                const newRead = [...read, actData];
                setRead(newRead);
                if (isLS("read")) {
                  setData("read", actData);
                }
                if (!isWishList()) {
                  const actualData = wish.filter(
                    (item) => item.bookId !== actData.bookId
                  );
                  removeData("wish", actData);
                  setWish(actualData);
                }
              } else {
                notify("Already add in read list.");
              }
            }}
            className=" border text-black px-5 lg:px-7 py-2 lg:py-4 rounded-lg text-center text-lg font-semibold"
          >
            Read
          </button>
          <button
            onClick={() => {
              if (isReadList() && isWishList()) {
                const newWish = [...wish, actData];
                setWish(newWish);
                if (isLS("wish") && isLS("read")) {
                  setData("wish", actData);
                }
              } else {
                if (!isWishList()) {
                  notify("Already add in wish List.");
                } else if (!isReadList()) {
                  notify("Already add in read List.");
                }
              }
            }}
            className="bg-[#50B1C9] text-white px-5 lg:px-7 py-2 lg:py-4 rounded-lg text-center text-lg font-semibold"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
