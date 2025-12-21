import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth } from '../../../Hooks/useAuth';
import OrderTable from './OrderTable';

const ManageOrders = () => {
    const { user } = useAuth();

    const { data: manageOrders = []} = useQuery({
        queryKey: ['manage-orders', user?.email],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/manage-orders?email=${user?.email}`
            );
            return res.data;
        },
        enabled: !!user?.email,
    });

    return (
        <div className="w-full">
            {/* Desktop / Tablet */}
            <div className="hidden md:block overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Book</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {manageOrders.map(order => (
                            <OrderTable key={order._id} order={order} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-4">
                {manageOrders.map(order => (
                    <table key={order._id} className="table w-full">
                        <tbody>
                            <OrderTable order={order} />
                        </tbody>
                    </table>
                ))}
            </div>
        </div>
    );
};

export default ManageOrders;
