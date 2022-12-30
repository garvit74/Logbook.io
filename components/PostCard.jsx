import React from "react";
import moment from "moment/moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-lg mb-6 bg-transparent">
        <Link href={`/post/${post.slug}`}>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </Link>
      </div>
      <h1 className=" text-white transition duration-700 text-center mb-8 cursor-pointer transform hover:text-yellow-500 hover:scale-125 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="text-white inline align-middle ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="h-6 w-6 inline mr-2"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-lg font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 transform hover:-translate-y-5 inline-block bg-white text-yellow-700 text-lg px-8 py-3 font-semibold cursor-pointer rounded-full">
                Continue Reading
            </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
