'use client';
import { Card, CardBody, Button } from '@nextui-org/react';
import { useCart } from '../components/CartContext';
import products from '../components/Products.json';

export default function Page() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2 bg-white">
      {products.map((card) => (
        <Card
          key={card.id}
          className="relative h-[400px] shadow-lg overflow-hidden rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <CardBody className="relative flex flex-col items-center justify-end text-center text-white space-y-3 p-4">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-sm">{card.subtitle}</p>
            <p className="text-sm">Price: $ {card.price}</p>
            <div className="flex justify-center gap-4">
              

              <Button
                auto
                className="bg-primary text-sm text-white"
                onClick={() => {
                  console.log('Adding to cart:', card);
                  addToCart(card);
                }}
              >
                
                Add to Cart
                
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
