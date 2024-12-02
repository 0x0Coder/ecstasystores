'use client';
import React from "react";
import Image from "next/image";
import AboutContent1 from "../components/AboutContent1";
import AboutContent2 from "../components/AboutContent2";
import AboutContent3 from "../components/AboutContent3";

export default function Page() {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/banner.png"
          alt="Image"
          fill
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ecstasy Stores
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Sex at its peak
          </p>
        </div>
      </div>
      <AboutContent1 />
      <AboutContent2 />
      <AboutContent3/>
      <div className="flex flex-col items-center justify-center h-full bg-white text-black  mb-10 p-10">
      <h6 className="text-lg font-bold mt-10">Listen to what they say about us</h6>
        <p>With over 10 years of dedication to pleasure, we have been capturing the attention of diverse people.</p>
          <p>Our awards, achievements, and stories... are still being widely shared. </p>
          <p>Discover firsthand and learn more about who we are.</p>
        
      </div>
    </div>
  );
}
