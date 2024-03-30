import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/errorElement/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/LIstedBooks/ListedBooks.jsx";
import PagesToRead from "./components/pagesToRead/PagesToRead.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Book from "./components/Book/Book.jsx";
import ReadBooks from "./components/ReadBooks/ReadBooks.jsx";
import WishList from "./components/WishList/WishList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: '/listed-books',
            element: <ReadBooks></ReadBooks>
          },
          { 
            path:'/listed-books/read',
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "/listed-books/wish",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/book/:bookID",
        loader: ({ params }) => fetch('/book.json'),
        element: <Book></Book>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
