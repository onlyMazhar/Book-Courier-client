import React from 'react';
import PayModal from '../../Components/Modal/PayModal';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth } from '../../Hooks/useAuth';
import OrderTable from './Librarian/OrderTable';

const ManageOrders = () => {
    const { user } = useAuth()
    const { data: manageOrders = [] } = useQuery({
        queryKey: ['my-orders', user?.email],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/manage-books?email=${user?.email}`
            );
            return res.data;
        },
        enabled: !!user?.email,
    });

    // console.log(manageOrders)
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
                    {manageOrders.map(order => (
                        <OrderTable
                            key={order._id}
                            order={order}
                            
                        />
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default ManageOrders;