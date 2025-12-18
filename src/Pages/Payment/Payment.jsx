import { CheckCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


const Payment = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl text-center p-8">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-green-600">
                    Payment Successful
                </h2>

                {/* Message */}
                <p className="text-gray-600 mt-2">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>

                {/* Divider */}
                <div className="divider my-6"></div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    <Link to="/dashboard/my-orders" className="btn btn-primary">
                        View My Orders
                    </Link>

                    <Link to="/books" className="btn btn-outline">
                        Continue Browsing
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Payment;