'use client';
import { Card, CardBody, Button, Link } from '@nextui-org/react';
import { useState } from 'react';
import { useCart } from '../components/CartContext';
import { useRouter } from 'next/navigation';
import products from '../components/Products.json';

export default function Page() {
  const { addToCart } = useCart();
  const [addedProducts, setAddedProducts] = useState({});
  const router = useRouter();

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts((prev) => ({
      ...prev,
      [product.id]: true,
    }));
  };

  const handleViewCart = () => {
    router.push('/cart'); // Customize the path if necessary
  };

  const handleCheckout = () => {
    router.push('/checkout'); // Customize the path if necessary
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gray-100">
      {products.map((card) => (
        <div 
          key={card.id} 
          className="relative flex flex-col items-center justify-between rounded-lg shadow-lg overflow-hidden bg-white"
        >
          <Link href={`/store/${card.id}`} className="w-full h-full">
            <Card
              className="relative w-full aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <CardBody className="relative flex flex-col items-center justify-center text-center text-white p-4 space-y-3">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-sm">{card.subtitle}</p>
              </CardBody>
            </Card>
          </Link>
          <div className="w-full flex flex-col items-center bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-700">Price: $ {card.price}</p>
            {!addedProducts[card.id] ? (
              <Button
                auto
                className="mt-2 bg-primary text-sm text-white hover:bg-primary-dark transition-colors w-full"
                onClick={() => handleAddToCart(card)}
              >
                Add to Cart
              </Button>
            ) : (
              <div className="w-full flex flex-col gap-2">
                <Button
                  auto
                  className="mt-2 bg-yellow-500 text-sm text-white hover:bg-yellow-600 transition-colors w-full"
                  onClick={handleViewCart}
                >
                  View Cart
                </Button>
                <Button
                  auto
                  className="bg-blue-500 text-sm text-white hover:bg-blue-600 transition-colors w-full"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
