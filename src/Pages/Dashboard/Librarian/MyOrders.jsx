import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import OrderTable from './OrderTable';

const MyOrders = () => {
    const { user } = useAuth()

    const { data: books = [] } = useQuery({
        queryKey: ['my-orders', user?.email],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders?email=${user.email}`)
            return res.data
        },

    })

     
    // console.log([...books])

    return (
        <div >
           
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Order Date</th>
                            <th>Amount</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                             
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            books.map(order => <OrderTable key={order._id} order={order} />)
                        }
                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MyOrders;