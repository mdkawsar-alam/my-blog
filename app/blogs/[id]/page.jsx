"use client";

import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Blog = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return data ? (
    <>
    <div className="bg-gray-200 px-5 py-5 md:px-12 lg:px:24">
        <div className="flex justify-between items-center">
          <Image
            src={assets.logo}
            alt="logo"
            width={180}
            className="w-[130px] sm:auto"
          />
          <button
            className="flex items-center gap-2 font-medium py-1 px-3 md:py-3 md:px-6 border border-black shadow-[-7px_7px_7px_#000000]"
          >
            Get started <Image src={assets.arrow} alt="arrow icon" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img}
            alt={data.author}
          />
          <p className="mt-1 pb-2 text-lg max-w-[700px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className=" max-w-[800px] mx-auto md:max-w-auto mt-[-100px] mb-10">
        <Image className="border-4 border-white" src={data.image} alt={data.title} />
        <h1 className="my-8 text-[26px] font-semibold"> Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-lg font-semibold">step 1: Lorem ipsum dolor sit amet.</h3>
        <p className="my-2 "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ea voluptatum deleniti, exercitationem sed natus. Nostrum odit quisquam quia mollitia. Sunt natus fugit nesciunt quo laborum aliquam pariatur officia. Ullam.</p>
        
       
        <h3 className="my-5 text-lg font-semibold">step 2: Lorem ipsum dolor sit amet.</h3>
        <p className="my-2 "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ea voluptatum deleniti, exercitationem sed natus. Nostrum odit quisquam quia mollitia. Sunt natus fugit nesciunt quo laborum aliquam pariatur officia. Ullam.</p>
        
        <h3 className="my-5 text-lg font-semibold">step 3: Lorem ipsum dolor sit amet.</h3>
        <p className="my-2 "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ea voluptatum deleniti, exercitationem sed natus. Nostrum odit quisquam quia mollitia. Sunt natus fugit nesciunt quo laborum aliquam pariatur officia. Ullam.</p>
        <h1 className="my-8 text-[26px] font-semibold"> Conclusion:</h1>
        
        <p className="my-"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus, cupiditate dolor est commodi laudantium illo reprehenderit, repellat sunt ratione minima nam cum, consectetur explicabo aspernatur tempora suscipit dignissimos repudiandae?</p>
         <div className="my-24">
          <p className="my-4 text-black font-semibold">share this article on social media</p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt=''/>
            <Image src={assets.twitter_icon} width={50} alt=''/>
            <Image src={assets.googleplus_icon} width={50} alt=''/>
          </div>
         </div>
      </div>

    </>
  ) : (
    <> </>
  );
};

export default Blog;
