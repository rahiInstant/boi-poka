import { useEffect, useState } from "react";
import { GoComment } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { BsEnvelopeOpen } from "react-icons/bs";
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);
  console.log(posts);
  return (
    <div className="max-w-7xl  mx-auto  mb-24">
      <div className="border-b border-t  py-4 px-4 mx-4 mb-10">
        <p className="text-lg w-full lg:w-[75%] text-center mx-auto">
          Welcome to BoiPoka's Blog! Immerse yourself in the world of literature
          with our latest articles, author interviews, book reviews, and
          literary insights. Stay connected, stay informed, and fuel your
          passion for reading with BoiPoka's vibrant community of book lovers.
          Happy reading!
        </p>
      </div>
      <div className="grid grid-cols-1 px-4 lg:grid-cols-2 gap-6 ">
        {posts.map((post, id) => {
          return (
            <div
              key={id}
              className="border mx-4 p-4 lg:p-10 rounded-lg lg:rounded-2xl gap-6 flex lg:flex-row flex-col lg:items-start items-center"
            >
              <div className="relative h-fit w-fit">
                <img src={post.image} className="w-16 h-16 rounded-md" alt="" />
                <div
                  className={`h-5 w-5 rounded-full border-2 border-[#F3F3F5] absolute -top-1 -right-1 ${
                    post.isActive ? "bg-green-600" : "bg-red-600"
                  }`}
                ></div>
              </div>
              <div className="flex-1">
                <div className="flex lg:flex-row flex-col gap-2 lg:gap-5 items-center">
                  <h1 className="text-sm font-medium">#{post.category}</h1>
                  <h1 className="text-sm font-medium">
                    Author : {post.author.name}
                  </h1>
                </div>
                <h1 className="mt-3 text-xl font-bold lg:text-left text-center">
                  {post.title}
                </h1>
                <h1 className="mt-4 text-base lg:text-left text-center">
                  {post.description}
                </h1>
                <hr className="border-dashed border border-[#12132D40] mt-5" />
                <div className="mt-6 flex lg:flex-row flex-col gap-5 justify-between items-center text-base">
                  <div className="flex gap-6">
                    <h1 className="flex gap-1 items-center">
                      <GoComment />
                      <span>{post.comment_count}</span>
                    </h1>
                    <h1 className="flex gap-1 items-center">
                      <MdOutlineRemoveRedEye />
                      <span>{post.view_count}</span>
                    </h1>
                    <h1 className="flex gap-1 items-center">
                      <MdAccessTime />
                      <span>{post.posted_time} min</span>
                    </h1>
                  </div>
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                    <BsEnvelopeOpen />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
