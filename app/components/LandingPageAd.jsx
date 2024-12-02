'use client'
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function LandingPageAd() {
    const list = [
        {
          title: "Toy Sync from Anywhere",
          img: "/images/video-pic1.png",
          price: "$5.50",
        },
        {
          title: "Sync to Music",
          img: "/images/video-pic2.png",
          price: "$3.00",
        },
        {
          title: "Frisky Foreplay",
          img: "/images/video-pic3.png",
          price: "$10.00",
        },
        {
          title: "Wake Up the Lovense Way",
          img: "/images/video-pic4.png",
          price: "$5.30",
        },
      ];
    
      return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-5">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small text-default-500 justify-between">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
}
