import React, { useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PayModal from '../../../Components/Modal/PayModal';
 
import MyOrderTable from './MyOrderTable';

const MyOrders = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const { user } = useAuth();

    const { data: books = [] } = useQuery({
        queryKey: ['my-orders', user?.email],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/orders?email=${user.email}`
            );
            return res.data;
        },
        enabled: !!user?.email,
    });

    // if (isLoading) return 
    // console.log(books)

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Order Date</th>
                        <th>Amount</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {books.map(order => (
                        <MyOrderTable
                            key={order._id}
                            order={order}
                            setSelectedOrder={setSelectedOrder}
                        />
                    ))}
                </tbody>
            </table>

            {/* ✅ SINGLE MODAL */}
            {selectedOrder && (
                <PayModal
                    order={selectedOrder}
                    onClose={() => setSelectedOrder(null)}
                />
            )}
        </div>
    );
};

export default MyOrders;
