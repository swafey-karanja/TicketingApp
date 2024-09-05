// components/PaymentForm.tsx
'use client';

import { useState } from 'react';

const PaymentSheet: React.FC = () => {
  const [enableRecurring, setEnableRecurring] = useState(false);

  return (
    <div className="mx-auto container">
      {/* Title */}
      <div className='flex mx-auto container '> {/* Reduced margin-bottom */}
        <h3 className='font-semibold text-black dark:text-white md:font-semibold md:text-5xl text-3xl w-full md:w-2/3'>
          Buy Ticket
        </h3>
      </div>

      {/* Payment Section */}
      <section className="flex md:flex-row flex-col px-4 py-16 items-center gap-12 container mx-auto text-black dark:text-white "> {/* Reduced padding from py-10 to py-6 */}
        {/* Left side - Payment Form (3/4 of the width) */}
        <div className="md:w-3/4 w-full bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Payment Method</h2>

          {/* VAT Number and PO Number */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="vat" className="block text-sm font-medium">VAT Number (Optional)</label>
              <input
                type="text"
                id="vat"
                className="mt-1 block w-full h-12 border-b border-black dark:border-white focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent sm:text-sm"
                placeholder="12345679"
              />
            </div>
            <div>
              <label htmlFor="po" className="block text-sm font-medium">PO Number (Optional)</label>
              <input
                type="text"
                id="po"
                className="mt-1 block w-full h-12 border-b border-black dark:border-white focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent sm:text-sm"
                placeholder="12345679"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Select Payment Method</label>
            <div className="flex space-x-4">
              <button className="border border-gray-300 dark:border-gray-700 p-2 rounded-lg hover:border-blue-500 dark:hover:border-blue-500">
                <img src="/images/visa.png" alt="Credit Card" className="w-15 h-12" />
              </button>
              <button className="border border-gray-300 dark:border-gray-700 p-2 rounded-lg hover:border-blue-500 dark:hover:border-blue-500">
                <img src="/images/paypal.jpeg" alt="PayPal" className="w-15 h-12" />
              </button>
              <button className="border border-gray-300 dark:border-gray-700 p-2 rounded-lg hover:border-blue-500 dark:hover:border-blue-500">
                <img src="/images/mastercard.png" alt="Google Pay" className="w-15 h-12" />
              </button>
              <button className="border border-gray-300 dark:border-gray-700 p-2 rounded-lg hover:border-blue-500 dark:hover:border-blue-500">
                <img src="/images/apple pay.png" alt="Apple Pay" className="w-15 h-12" />
              </button>
            </div>
          </div>

          {/* Card Details */}
          <div className="mb-4">
            <label htmlFor="cardholder-name" className="block text-sm font-medium">Cardholder Name</label>
            <input
              type="text"
              id="cardholder-name"
              className="mt-1 block w-full h-12 border-b border-black dark:border-white focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent sm:text-sm"
              placeholder="Simon Petrikov"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-2">
              <label htmlFor="card-number" className="block text-sm font-medium">Card Number</label>
              <input
                type="text"
                id="card-number"
                className="mt-1 block w-full h-12 border-b border-black dark:border-white focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent sm:text-sm"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div>
              <label htmlFor="expiry-date" className="block text-sm font-medium">Expiry Date</label>
              <input
                type="text"
                id="expiry-date"
                className="mt-1 block w-full h-12 border-b border-black dark:border-white focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent sm:text-sm"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium">CVV</label>
              <input
                type="text"
                id="cvv"
                className="mt-1 block w-full h-12 border-b border-black dark:border-white focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent sm:text-sm"
                placeholder="000"
              />
            </div>
          </div>

          {/* Additional Options */}
          <div className="mb-4">
            <div className="flex items-start">
              <input
                id="save-info"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700 rounded"
              />
              <label htmlFor="save-info" className="ml-2 block text-sm">Save my payment details for future purchases</label>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="recurring-payments"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700 rounded"
              onChange={() => setEnableRecurring(!enableRecurring)}
            />
            <label htmlFor="recurring-payments" className="ml-2 block text-sm">
              Enable recurring payments
            </label>
          </div>
          {enableRecurring && (
            <div className="mt-4">
              <p className="text-sm">When my balance is below:</p>
              <input
                type="text"
                className="mt-1 block w-full h-12 border-b border-black dark:border-white focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent sm:text-sm"
                placeholder="€100.00"
              />
              <p className="text-sm mt-2">Automatically recharge:</p>
              <input
                type="text"
                className="mt-1 block w-full h-12 border-b border-black dark:border-white focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent sm:text-sm"
                placeholder="€50.00"
              />
            </div>
          )}
        </div>

        {/* Right side - Order Summary (1/4 of the width) */}
        <div className="md:w-1/4 w-full bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="text-sm mb-4">
            <p>Balance Amount: €100.00</p>
            <p>VAT (25%): €21.00</p>
            <p className="font-bold text-xl">Total: €121.00</p>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Confirm your order
          </button>
        </div>
      </section>
    </div>
  );
};

export default PaymentSheet;
