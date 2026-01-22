import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from 'react-toastify';
import { ShieldCheck, BookOpen, User as UserIcon } from 'lucide-react';
import { useAuth } from '../../../Hooks/useAuth';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { user: authUser } = useAuth();

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['admin-users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin/users');
            return data;
        }
    });

    const updateRole = async (id, role) => {
        try {
            await axiosSecure.patch(`/admin/user/role/${id}`, { role });
            toast.success(`Role updated to ${role}`);
            refetch();
        } catch {
            toast.error("Failed to update role");
        }
    };

    // Filter out users with empty emails (as per your original logic)
    const validUsers = users.filter(u => u.email !== '');

    if (isLoading) return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="font-medium animate-pulse text-slate-500">Loading user directory...</p>
        </div>
    );



    return (
        <div className="p-4 md:p-8   mx-auto">
            {/* Header Section */}
            <div className="mb-8">
                <h2 className="text-3xl font-black text-base-content">User Management</h2>
                <p className="text-sm opacity-60">Control permissions and assign roles to platform members</p>
            </div>

            {/* Desktop Table - Visible only on large screens */}
            <div className="hidden lg:block overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                <table className="table w-full">
                    <thead className="bg-base-200/50">
                        <tr className="text-slate-600 italic">
                            <th className="py-4 px-6 font-bold uppercase text-xs">User Profile</th>
                            <th className="font-bold uppercase text-xs">Email Address</th>
                            <th className="font-bold uppercase text-xs">Access Level</th>
                            <th className="text-right font-bold uppercase text-xs pr-6">Change Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {validUsers.map(user => (
                            <tr key={user._id} className="hover:bg-base-200/30 transition-colors border-b border-base-200 last:border-none">
                                <td className="px-6">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt={user.name} />
                                            </div>
                                        </div>
                                        <span className="font-bold text-slate-700">{user.name}</span>
                                    </div>
                                </td>
                                <td className="font-medium text-slate-500">{user.email}</td>
                                <td>
                                    <div className={`badge badge-md gap-2 font-bold px-4 py-3 ${user.role === 'admin' ? 'badge-primary' :
                                        user.role === 'librarian' ? 'badge-secondary' : 'badge-ghost'
                                        }`}>
                                        {user.role}
                                    </div>
                                </td>
                                <td className="pr-6">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            disabled={user.role === 'admin'}
                                            onClick={() => updateRole(user._id, 'admin')}
                                            className="btn btn-sm btn-primary rounded-lg gap-2 normal-case"
                                        >
                                            <ShieldCheck size={14} /> Make Admin
                                        </button>
                                        <button
                                            disabled={user.role === 'librarian' ||  authUser.email == user.email }
                                            onClick={() => updateRole(user._id, 'librarian')}
                                            className="btn btn-sm btn-secondary rounded-lg gap-2 normal-case"
                                        >
                                            <BookOpen size={14} /> Make Librarian
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View - Visible only on mobile/tablets */}
            <div className="grid grid-cols-1 gap-4 lg:hidden">
                {validUsers.map(user => (
                    <div key={user._id} className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
                        <div className="card-body p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-14 h-14">
                                        <img src={user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{user.name}</h3>
                                    <p className="text-xs opacity-60 mt-1">{user.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-base-200/50 p-3 rounded-xl mb-4">
                                <span className="text-xs font-black uppercase opacity-40">Current Role</span>
                                <div className={`badge badge-sm font-bold ${user.role === 'admin' ? 'badge-primary' : 'badge-secondary'}`}>
                                    {user.role}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <button
                                    disabled={user.role === 'admin' }
                                    onClick={() => updateRole(user._id, 'admin')}
                                    className="btn btn-sm btn-primary w-full rounded-lg"
                                >Set as Admin</button>
                                <button
                                    disabled={user.role === 'librarian'|| authUser.email == user.email }
                                    onClick={() => updateRole(user._id, 'librarian')}
                                    className="btn btn-sm btn-secondary w-full rounded-lg"
                                >Set as Librarian</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            

            {/* Footer Stat */}
            <div className="mt-8 text-center text-xs opacity-40 uppercase tracking-widest font-bold">
                End of user directory • {validUsers.length} Users Listed
            </div>
        </div>
    );
};

export default ManageUsers;