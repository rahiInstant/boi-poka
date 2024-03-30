import { IoLocationOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ReadContext } from "../Root/root";
const ReadBooks = () => {
  const [read, setRead] = useContext(ReadContext)
  // const read = [...getData("read")];
  return (
    <div className="flex flex-col gap-6">
      {read.map((book, id) => {
        return (
          <div
            key={id}
            className="border border-[#13131399] p-6 rounded-2xl flex gap-6"
          >
            <div className="p-5 bg-[#1313130D] rounded-2xl w-[350px]">
              <img className="w-[200px] h-[240px]" src={book.image} alt="" />
            </div>
            <div className="w-full">
              <h1 className="text-2xl font-bold font-playfair">
                {book.bookName}
              </h1>
              <h1 className="mt-4 font-medium">By : {book.author}</h1>
              <div className="mt-4 flex gap-4 items-center">
                <h1 className="font-bold">Tag</h1>
                <h1 className="py-2 px-4 rounded-[30px] bg-[#23be0a0d] text-[#23BE0A] font-medium w-fit">
                  #{book.tags[0]}
                </h1>
                <h1 className="py-2 px-4 rounded-[30px] bg-[#23be0a0d] text-[#23BE0A] font-medium w-fit">
                  #{book.tags[1]}
                </h1>
                <div className="flex gap-1 items-center">
                  <IoLocationOutline />{" "}
                  <span>Year of Publishing: {book.yearOfPublishing}</span>
                </div>
              </div>
              <div className="mt-4 flex gap-4 items-center">
                <div className="flex gap-1 items-center">
                  <IoIosPeople />
                  <span>Publisher: {book.publisher}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <MdOutlineInsertPageBreak />
                  <span>Page {book.totalPages}</span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex gap-4 items-center">
                <h1 className="py-3 px-5 rounded-[30px] bg-[#328EFF26] text-[#328EFF] font-medium w-fit">
                  Category: {book.category}
                </h1>
                <h1 className="py-3 px-5 rounded-[30px] bg-[#FFAC3326] text-[#FFAC33] font-medium w-fit">
                  Rating: {book.rating}
                </h1>
                <Link to={`/book/${book.bookId}`}>
                <h1 className="py-3 px-5 rounded-[30px] bg-[#23BE0A] text-[#FFFFFF] text-lg font-medium w-fit">
                  View Details
                </h1>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadBooks;
