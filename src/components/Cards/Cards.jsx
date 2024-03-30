import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const BooksArray = createContext(0);
const Cards = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch("./book.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return (
    <div className="mt-10 lg:mt-24 flex flex-col items-center mb-14">
      <h1 className="text-3xl lg:text-[40px] font-playfair text-center font-bold">
        Books
      </h1>
      <div className="mt-5 lg:mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl ">
        {books.map((book, id) => {
          return (
            
              <div key={id}>
                <BooksArray.Provider value={[books, setBook]}>
                <Link  to={`/book/${book.bookId}`}>
                <div className="p-6 border rounded-2xl w-[350px] place-self-center">
                  <div className="bg-[#F3F3F3] p-7 rounded-2xl w-full flex justify-center">
                    <img className=" w-36 h-48" src={book.image} alt="" />
                  </div>
                  <div className="mt-6 flex gap-5">
                    <h1 className="py-2 px-4 rounded-[30px] bg-[#23be0a0d] text-[#23BE0A] font-medium w-fit">
                      {book.tags[0]}
                    </h1>
                    <h1 className="py-2 px-4 rounded-[30px] bg-[#23be0a0d] text-[#23BE0A] font-medium w-fit">
                      {book.tags[1]}
                    </h1>
                  </div>
                  <h1 className="text-2xl font-bold font-playfair mt-4">
                    {book.bookName}
                  </h1>
                  <h1 className="font-medium text-[#131313cc] mt-4">
                    By: <span>{book.author}</span>
                  </h1>
                  <hr className="my-5 border-dashed border" />
                  <div className="font-medium text-[#131313cc] flex justify-between">
                    <div>{book.category}</div>
                    <div>{book.rating}</div>
                  </div>
                </div>
                </Link>
              </BooksArray.Provider>
              </div>
        
            
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
