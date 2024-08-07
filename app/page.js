"use client";

import React from "react";
import Header from "@/component/share/Header";
import BlogList from "@/component/ui/home/BlogList";
import Footer from "@/component/share/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <BlogList />
      <Footer/>
    </div>
  );
};

export default Home;
