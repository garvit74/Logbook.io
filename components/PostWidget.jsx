import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-transparent shadow-xl rounded-lg p-8 mb-8">
        <h3 className="text-2xl text-center mb-8 font-semibold border-b pb-4">
            {slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
        {relatedPosts.map((post) => (
            <div key={post.title} className="flex items-center w-full mb-4">
                <div className="w-16 flex-none">
                    <img
                        alt={post.title}
                        height="60px"
                        width="60px"
                        className=" cursor-pointer align-middle rounded-full transition duration-1000 transform hover:-translate-y-3"
                        src={post.featuredImage.url}
                    /> 
                </div>
                <div className="flex-grow ml-4">
                    <p className="text-white text-xs">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </p>
                    <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                        {post.title}
                    </Link>
                </div>
            </div>
        ))}
    </div>
  )
};

export default PostWidget;
