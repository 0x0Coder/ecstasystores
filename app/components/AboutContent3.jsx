'use client'
import React from 'react'
import Image from 'next/image'

export default function AboutContent3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white">
    

      {/* Text Section */}
      <div className="font-bold mt-10 px-4 md:px-8">
        <small className="block text-gray-900 mb-2">Who we are</small>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary">Learn sex from the best</h2>
        <p className="text-gray-700">
        Whether a newbie or an expert, you can always find and learn the most worthwhile sex education in the world.
        </p>
      </div>
        {/* Image Section */}
        <div className="flex justify-center">
        <Image
          src="/images/banner4.png"
          height={500}
          width={1500}
          alt="no image"
          className="object-contain rounded-tl-[20px] rounded-bl-[20px]"
        />
      </div>
    </div>
  )
}
