import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from 'react-toastify';
import { useAuth } from '../../../Hooks/useAuth';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {user: loginUser} = useAuth()
    console.log(loginUser.email)

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['admin-users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin/users');
            return data;
        }
    });

    const updateRole = async (id, role) => {
        await axiosSecure.patch(`/admin/user/role/${id}`, { role });
        toast.success(`Role updated to ${role}`);
        refetch();
    };

    if (isLoading) return  <div className="flex justify-center items-center min-h-[92vh]"><p>Loading users...</p>   </div>


    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">All Users</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (

                            // loginUser
                            <tr className={user.email ===  ''? 'hidden' : ''} key={user._id}>
                                <td className="flex items-center gap-3">
                                    <img
                                        src={user.image}
                                        alt=""
                                        className="w-10 h-10 rounded-full"
                                    />
                                    {user.name}
                                </td>

                                <td>{user.email}</td>
                                <td>
                                    <span className="badge badge-outline">
                                        {user.role}
                                    </span>
                                </td>

                                <td className="space-x-2">
                                    <button
                                        disabled={user.role === 'admin'}
                                        onClick={() => updateRole(user._id, 'admin')}
                                        className="btn btn-xs btn-primary"
                                    >
                                        Make Admin
                                    </button>

                                    <button
                                        disabled={user.role === 'librarian'}
                                        onClick={() => updateRole(user._id, 'librarian')}
                                        className="btn btn-xs btn-secondary"
                                    >
                                        Make Librarian
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;