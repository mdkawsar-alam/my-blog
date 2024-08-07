

import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ image, title, description, author, id, category }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Link href={`/blogs/${id}`}>
        <Image className="w-full" src={image} alt={title} width={400} height={200} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <Link href={`/blogs/${id}`}>
          <div className="flex items-center text-gray-700 gap-1 text-base">
            Read more
            <Image src={assets.arrow} alt="read more" width={14} height={14} />
          </div>
        </Link>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {author}
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
