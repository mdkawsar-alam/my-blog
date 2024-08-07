"use client";

import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  const categories = ["All", "Technology", "Startup", "LifeStyle"];
  const filteredBlogData = menu === "All" ? blog_data : blog_data.filter(item => item.category === menu);

  return (
    <div>
      <div className="flex gap-2 md:gap-6 items-center py-5 justify-center">
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => setMenu(category)}
              className={`text-sm md:text-base font-semibold relative ${menu === category ? "text-blue-500" : ""}`}
            >
              {category}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left ${
                  menu === category ? "scale-x-100" : ""
                }`}
              ></span>
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 xl:mx-24">
        {filteredBlogData.map((item, index) => (
          <BlogItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            author={item.author}
            id={item.id}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
