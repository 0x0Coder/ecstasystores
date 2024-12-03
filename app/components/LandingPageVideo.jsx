'use client';
import React from "react";
import { Button,Link } from "@nextui-org/react";

export default function LandingPageVideo() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/landingpage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Toy Sync from Anywhere
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Sync your toys together to feel the same sensations no matter the
          distance!
        </p>
        <Link href="/store">
        <Button className="bg-primary mt-2 text-white">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
}

