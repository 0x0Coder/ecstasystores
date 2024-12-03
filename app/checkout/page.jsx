'use client';

import { useState } from 'react';

export default function page() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    billingAddress: '',
    ssn: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch('https://ecstasystoresbackendd.vercel.app/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to process checkout.');
      }

      alert('Checkout successful!');
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Checkout</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Name on Card
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            maxLength="16"
            pattern="\d{16}"
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Expiry and CVV */}
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              pattern="\d{2}/\d{2}"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-semibold mb-2">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              maxLength="3"
              pattern="\d{3}"
              placeholder="123"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Billing Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Billing Address
          </label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
            placeholder="123 Main St, City, State, ZIP"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* SSN */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            SSN
          </label>
          <input
            type="text"
            name="ssn"
            value={formData.ssn}
            onChange={handleChange}
            required
            maxLength="9"
            pattern="\d{9}"
            placeholder="123-45-6789"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {isSubmitting ? 'Processing...' : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
}
