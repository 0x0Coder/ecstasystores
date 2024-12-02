'use client';
import { useCart } from '../components/CartContext';
import products from '../components/Products.json';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  // Find product details by ID from the products JSON
  const getProductDetails = (id) => products.find((product) => product.id === id);

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * getProductDetails(item.id)?.price || 0,
    0
  );

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className=" rounded-lg shadow-md p-4">
          {cartItems.map((item) => {
            const product = getProductDetails(item.id);
            return (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded"
                />

                {/* Product Details */}
                <div className="flex-grow ml-4">
                  <h2 className="text-lg font-bold">{product.title}</h2>
                  <p className="text-sm text-gray-600">{product.subtitle}</p>
                  <p className="text-sm">
                    Quantity: <span className="font-semibold">{item.quantity}</span>
                  </p>
                  <p className="text-sm">
                    Price: <span className="font-semibold">$ {product.price}</span>
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            );
          })}

          {/* Total Price */}
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">Total Price:</h2>
            <p className="text-xl font-semibold">$ {totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <Link href='/checkout'>
          <button
            className="w-full bg-primary text-white py-3 mt-6 rounded-lg text-lg font-bold hover:bg-primary-600"
            
          >
            Checkout
          </button>
          </Link>
        </div>
      )}
    </div>
  );
}
