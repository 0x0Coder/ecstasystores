'use client'
import React from 'react'
import Image from 'next/image'

export default function AboutContent1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white">
      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src="/images/ses.png"
          height={500}
          width={1500}
          alt="no image"
          className="object-contain rounded-tr-[20px] rounded-br-[20px]"
        />
      </div>

      {/* Text Section */}
      <div className="font-bold mt-10 px-4 md:px-8">
        <small className="block text-gray-900 mb-2">Who we are</small>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary">Technology & Sex</h2>
        <p className="text-gray-700">
          Since 2010, EcstasyStores has not only revolutionized intimacy through technology; we have
          also created an environment where every gender, age, and body type can fulfill their
          sexual wellness. At EcstasyStores, we believe in a world where pleasure knows no bounds.
        </p>
      </div>
    </div>
  )
}
