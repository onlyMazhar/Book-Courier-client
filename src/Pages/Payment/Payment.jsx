import axios from 'axios';
import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';


const Payment = () => {
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id')
    console.log(sessionId)

    // useEffect(() => {
    //     if (sessionId) {
    //         axios.post(`${import.meta.env.VITE_API_URL}/payment-success`, { sessionId })
    //     }
    // }, [sessionId])

    useEffect(() => {
        if (sessionId) {
            axios.post(`${import.meta.env.VITE_API_URL}/payment-success`, { sessionId })
                .then(res => console.log('Payment saved:', res.data))
                .catch(err => console.error('Payment API error:', err));
        }
    }, [sessionId]);

    return (
        <div className="min-h-[95vh] content-center  px-4">
            <div className="card   max-w-md  border border-base-300 shadow-xl bg-base-100 text-center p-8 mx-auto">

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