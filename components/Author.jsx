import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-8">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100"
        width="100"
        className="align-middle rounded-full mx-auto"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold transition duration-700 transform hover:text-yellow-500 hover:scale-150">
      {author.name}
    </h3>
    <p className="text-white text-ls transition duration-700 transform hover:text-yellow-500 hover:scale-150">
      {author.bio}
    </p>
  </div>
);

export default Author;
