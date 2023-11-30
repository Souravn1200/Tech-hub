import React from 'react';
const stripePromise = loadStripe('h');
const Payment = () => {
    return (
        <div>
             <div className="flex justify-center items-center mb-10">
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-2"> Payment</h2>
    <p className="text-gray-600">Pay to use our services</p>
  </div>
</div>
            
        </div>
    );
};

export default Payment;