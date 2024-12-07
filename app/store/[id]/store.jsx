'use client'; // This makes the component interactive
import { useState } from 'react';
import { useCart } from '../../components/CartContext';
import { useRouter } from 'next/navigation'; // To handle navigation

export default function Store({ product }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const router = useRouter(); // Initialize router for navigation

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
    };

    const handleVisitCart = () => {
        // Navigate to cart page
        router.push('/cart');
    };

    const handleCheckout = () => {
        // Navigate to checkout page
        router.push('/checkout');
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Product Image */}
                <div
                    className="h-64 md:h-96 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                ></div>

                {/* Product Details */}
                <div className="p-6 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-lg text-gray-600">{product.subtitle}</p>
                    <p className="text-2xl font-semibold text-primary">$ {product.price}</p>

                    {/* Buttons */}
                    <div className="mt-4 flex flex-col gap-3">
                        {!isAdded ? (
                            <button
                                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition duration-200"
                                onClick={handleAddToCart}
                            >
                                Buy Now
                            </button>
                        ) : (
                            <>
                                <button
                                    className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
                                    onClick={handleVisitCart}
                                >
                                    Visit Cart
                                </button>
                                <button
                                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                                    onClick={handleCheckout}
                                >
                                    Proceed to Checkout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
