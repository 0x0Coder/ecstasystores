'use client';
import React from 'react';
import Image from 'next/image';
import { Button, Link } from '@nextui-org/react';

export default function AboutContent2() {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/banner2.png"
          alt="Image"
          quality={100}
          fill
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text and Button Content */}
        <div className="absolute top-10 left-10 z-10 text-white max-w-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Ecstasy Stores
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Differences do matter
          </p>
          <p className="mt-4 ">
          We work with diverse talents and stand for LGBTQ+ globally.
          </p>
          <Link href='/store'>
          <Button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            Shop Now
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
