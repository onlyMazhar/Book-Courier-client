import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const MyOrderTable = ({ order, setSelectedOrder }) => {
    const { bookName, bookImg, writtenBy, status, price, createdAt } = order || {};
    console.log("From Order Table---------------------------------------------- ", order)
    const queryClient = useQueryClient();

    const handleCancel = async (id) => {
        await axios.patch(
            `${import.meta.env.VITE_API_URL}/orders/cancel/${id}`
        );
        queryClient.invalidateQueries(['my-orders']);
    };

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <img src={bookImg} className="w-12 h-12 rounded-sm" />
                    <div>
                        <div className="font-bold">{bookName}</div>
                        <small className="text-gray-400">By {writtenBy}</small>
                    </div>
                </div>
            </td>

            <td>{new Date(createdAt).toLocaleDateString()}</td>
            <td>{price}</td>
            <td className={order.paymentStatus === 'paid' ? 'text-green-600' : ''}>
                {order.paymentStatus}
            </td>
            <td className={status === 'pending' ? 'text-red-600' : ''}>
                {status}
            </td>

            <td className="flex gap-2">
                {order.status === 'pending' && (
                    <>
                        <button
                            className="btn btn-primary btn-xs"
                            onClick={() => setSelectedOrder(order)}
                        >
                            Pay Now
                        </button>

                        <button
                            className="btn btn-error btn-xs"
                            onClick={() => handleCancel(order._id)}
                        >
                            Cancel
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default MyOrderTable;