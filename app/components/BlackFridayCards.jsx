'use client';
import { Card, CardBody, Button } from "@nextui-org/react";

export default function BlackFridayCards() {
  const cards = [
    {
      id: 1,
      title: "Stunning Portfolio",
      subtitle: "Showcase your work with style.",
      image: "/images/toy1.jpg",
      links: { learnMore: "#", buyNow: "#" },
    },
    {
      id: 2,
      title: "E-Commerce Ready",
      subtitle: "Sell your products effortlessly.",
      image: "/images/toy2.jpg",
      links: { learnMore: "#", buyNow: "#" },
    },
    {
      id: 3,
      title: "Modern Blog",
      subtitle: "Share your stories with the world.",
      image: "/images/toy3.jpg",
      links: { learnMore: "#", buyNow: "#" },
    },
    {
      id: 4,
      title: "Corporate Websites",
      subtitle: "Elevate your brand presence.",
      image: "/images/toy4.jpg",
      links: { learnMore: "#", buyNow: "#" },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-2">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="relative h-[400px] shadow-lg overflow-hidden rounded-lg bg-cover  bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <CardBody className="relative flex flex-col items-center justify-end text-center text-white space-y-3 p-4">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-sm">{card.subtitle}</p>
            <div className="flex justify-center gap-4">
              <Button
                auto
                as="a"
                href={card.links.learnMore}
                className="bg-transparent border border-white hover:bg-white hover:text-black text-white text-sm"
              >
                Learn More
              </Button>
              <Button
                auto
                as="a"
                href={card.links.buyNow}
                className="bg-primary text-sm text-white"
              >
                Buy Now
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
