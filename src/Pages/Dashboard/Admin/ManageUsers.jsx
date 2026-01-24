import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from 'react-toastify';
import { ShieldCheck, BookOpen, User as UserIcon, Users, Crown, Settings } from 'lucide-react';
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

    const getRoleBadgeColor = (role) => {
        switch (role) {
            case 'admin': return 'bg-red-100 text-red-800 border-red-200';
            case 'librarian': return 'bg-blue-100 text-blue-800 border-blue-200';
            default: return 'bg-slate-100 text-slate-800 border-slate-200';
        }
    };

    const getRoleIcon = (role) => {
        switch (role) {
            case 'admin': return <Crown size={14} />;
            case 'librarian': return <BookOpen size={14} />;
            default: return <UserIcon size={14} />;
        }
    };

    if (isLoading) return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center animate-pulse">
                <Users size={32} className="text-primary" />
            </div>
            <p className="font-medium text-slate-600">Loading user directory...</p>
        </div>
    );

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
                        Admin Control
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-black text-base-content mb-6">
                        User Management
                    </h1>
                    <div className="h-1.5 w-24 bg-primary rounded-full mb-6"></div>
                    <p className="text-neutral/60 text-lg">Control permissions and assign roles to platform members</p>
                </div>
                <div className="group p-6 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm">
                            <Users size={32} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-3xl font-black text-base-content group-hover:text-primary transition-colors">{validUsers.length}</p>
                            <p className="text-neutral/60 font-medium">Total Users</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {validUsers.map(user => (
                    <div key={user._id} className="group p-8 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        {/* User Info */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <img 
                                    src={user.image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.name) + "&background=random"} 
                                    alt={user.name}
                                    className="w-16 h-16 rounded-2xl object-cover border-2 border-base-200 group-hover:border-white transition-colors"
                                />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-slate-100">
                                    {getRoleIcon(user.role)}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-black text-xl text-base-content truncate group-hover:text-primary transition-colors">{user.name}</h3>
                                <p className="text-neutral/60 text-sm truncate">{user.email}</p>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border mt-2 ${getRoleBadgeColor(user.role)}`}>
                                    {getRoleIcon(user.role)}
                                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <button
                                disabled={user.role === 'admin'}
                                onClick={() => updateRole(user._id, 'admin')}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-error/10 hover:bg-error/20 text-error rounded-2xl font-bold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                <Crown size={16} />
                                {user.role === 'admin' ? 'Already Admin' : 'Make Admin'}
                            </button>
                            
                            <button
                                disabled={user.role === 'librarian' || authUser.email === user.email}
                                onClick={() => updateRole(user._id, 'librarian')}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-info/10 hover:bg-info/20 text-info rounded-2xl font-bold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                <BookOpen size={16} />
                                {user.role === 'librarian' ? 'Already Librarian' : 'Make Librarian'}
                            </button>

                            {authUser.email === user.email && (
                                <div className="text-center">
                                    <span className="text-xs text-neutral/60 bg-base-200 px-3 py-1 rounded-full font-medium">
                                        This is you
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {validUsers.length === 0 && (
                <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users size={32} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">No users found</h3>
                    <p className="text-slate-600">No users have registered yet.</p>
                </div>
            )}

            {/* Role Statistics */}
            <div className="p-8 md:p-12 rounded-4xl bg-neutral text-neutral-content">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">Role Distribution</h3>
                    <p className="opacity-70">Overview of user permissions across the platform</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <Crown size={32} className="text-white" />
                        </div>
                        <div>
                            <p className="text-3xl font-black text-white">
                                {validUsers.filter(u => u.role === 'admin').length}
                            </p>
                            <p className="text-white/70 font-medium">Admins</p>
                        </div>
                    </div>
                    
                    <div className="group flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <BookOpen size={32} className="text-white" />
                        </div>
                        <div>
                            <p className="text-3xl font-black text-white">
                                {validUsers.filter(u => u.role === 'librarian').length}
                            </p>
                            <p className="text-white/70 font-medium">Librarians</p>
                        </div>
                    </div>
                    
                    <div className="group flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <UserIcon size={32} className="text-white" />
                        </div>
                        <div>
                            <p className="text-3xl font-black text-white">
                                {validUsers.filter(u => u.role === 'user').length}
                            </p>
                            <p className="text-white/70 font-medium">Users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;