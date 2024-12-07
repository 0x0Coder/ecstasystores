// This file should NOT include 'use client'
import products from '../../components/Products.json'; // Adjust the path as needed
import Store from './store'; // Import the Client Component

export default function StoreDetails({ params }) {
    const { id } = params;

    // Find the product by ID
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-500 text-lg">
                Product not found
            </div>
        );
    }

    // Pass product data to the Client Component
    return <Store product={product} />;
}
