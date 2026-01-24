import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useAuth } from '../../../Hooks/useAuth';
import {
    BookOpen,
    ShoppingCart,
    Heart,
    Clock,
    Star,
    TrendingUp,
    Calendar,
    Package,
    DollarSign
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    Area,
    AreaChart
} from 'recharts';

const UserStatistics = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // Fetch user statistics
    const { data: stats = {}, isLoading: statsLoading } = useQuery({
        queryKey: ['user-stats', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/stats/${user.email}`);
            return data;
        },
        enabled: !!user?.email
    });

    // Fetch user activity data
    const { data: activityData = {}, isLoading: activityLoading } = useQuery({
        queryKey: ['user-activity', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/activity/${user.email}`);
            return data;
        },
        enabled: !!user?.email
    });

    // Mock data fallback for development
    const mockStats = {
        totalOrders: 12,
        completedOrders: 8,
        pendingOrders: 3,
        cancelledOrders: 1,
        totalSpent: 2450,
        booksRead: 15,
        wishlistItems: 7,
        averageRating: 4.3,
        memberSince: '2024-01-15',
        favoriteCategory: 'Fiction'
    };

    const mockActivityData = {
        monthlyOrders: [
            { month: 'Jan', orders: 2, spent: 340 },
            { month: 'Feb', orders: 1, spent: 180 },
            { month: 'Mar', orders: 3, spent: 520 },
            { month: 'Apr', orders: 2, spent: 380 },
            { month: 'May', orders: 3, spent: 640 },
            { month: 'Jun', orders: 1, spent: 390 }
        ],
        categoryPreferences: [
            { name: 'Fiction', value: 40, color: '#0088FE' },
            { name: 'Science', value: 25, color: '#00C49F' },
            { name: 'History', value: 20, color: '#FFBB28' },
            { name: 'Biography', value: 15, color: '#FF8042' }
        ],
        readingProgress: [
            { week: 'Week 1', books: 2 },
            { week: 'Week 2', books: 3 },
            { week: 'Week 3', books: 1 },
            { week: 'Week 4', books: 4 }
        ]
    };

    const currentStats = Object.keys(stats).length > 0 ? stats : mockStats;
    const currentActivityData = Object.keys(activityData).length > 0 ? activityData : mockActivityData;

    const StatCard = ({ title, value, icon: Icon, color = "primary", subtitle }) => (
        <div className="group p-6 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm">
                    <Icon size={32} className={`text-${color}`} />
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-black text-base-content mb-2 group-hover:text-primary transition-colors">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                </h3>
                <p className="text-neutral/60 font-medium">{title}</p>
                {subtitle && (
                    <p className="text-neutral/40 text-sm mt-1">{subtitle}</p>
                )}
            </div>
        </div>
    );

    if (statsLoading || activityLoading) {
        return (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-slate-200 rounded-2xl h-32 animate-pulse"></div>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-slate-200 rounded-2xl h-80 animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="space-y-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
                        Personal Dashboard
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-black text-base-content mb-6">
                        Your Reading Journey
                    </h1>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-neutral/60 text-lg">Track your reading progress and rental activity</p>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Orders"
                        value={currentStats.totalOrders}
                        icon={ShoppingCart}
                        color="blue"
                        subtitle="All time rentals"
                    />
                    <StatCard
                        title="Books Read"
                        value={currentStats.booksRead}
                        icon={BookOpen}
                        color="green"
                        subtitle="Completed readings"
                    />
                    <StatCard
                        title="Wishlist Items"
                        value={currentStats.wishlistItems}
                        icon={Heart}
                        color="red"
                        subtitle="Books to read"
                    />
                    <StatCard
                        title="Total Spent"
                        value={`৳${currentStats.totalSpent?.toLocaleString()}`}
                        icon={DollarSign}
                        color="orange"
                        subtitle="Lifetime spending"
                    />
                </div>

                {/* Secondary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Completed Orders"
                        value={currentStats.completedOrders}
                        icon={Package}
                        color="green"
                    />
                    <StatCard
                        title="Pending Orders"
                        value={currentStats.pendingOrders}
                        icon={Clock}
                        color="yellow"
                    />
                    <StatCard
                        title="Average Rating"
                        value={`${currentStats.averageRating}/5`}
                        icon={Star}
                        color="yellow"
                    />
                    <StatCard
                        title="Member Since"
                        value={new Date(currentStats.memberSince).getFullYear()}
                        icon={Calendar}
                        color="purple"
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Monthly Orders */}
                    <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 p-6 shadow-sm transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-base-content">Monthly Activity</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                                Orders
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={currentActivityData.monthlyOrders}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="month"
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                />
                                <YAxis
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="orders"
                                    stroke="#00453E"
                                    fill="#00453E"
                                    fillOpacity={0.1}
                                    strokeWidth={3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Spending Chart */}
                    <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 p-6 shadow-sm transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-base-content">Monthly Spending</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                Amount (৳)
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={currentActivityData.monthlyOrders}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="month"
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                />
                                <YAxis
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Bar
                                    dataKey="spent"
                                    fill="#3b82f6"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Category Preferences */}
                    <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 p-6 shadow-sm transition-all duration-300">
                        <h3 className="text-xl font-bold text-base-content mb-6">Reading Preferences</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={currentActivityData.categoryPreferences}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {currentActivityData.categoryPreferences.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {currentActivityData.categoryPreferences.map((entry, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: entry.color }}
                                    ></div>
                                    <span className="text-sm text-slate-600">
                                        {entry.name} ({entry.value}%)
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity & Quick Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left">
                                <BookOpen size={20} className="text-blue-600" />
                                <span className="font-medium text-blue-900">Browse Books</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-left">
                                <ShoppingCart size={20} className="text-green-600" />
                                <span className="font-medium text-green-900">My Orders</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 bg-red-50 hover:bg-red-100 rounded-xl transition-colors text-left">
                                <Heart size={20} className="text-red-600" />
                                <span className="font-medium text-red-900">My Wishlist</span>
                            </button>
                        </div>
                    </div>

                    {/* Reading Goals */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Reading Goals</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-600">Monthly Goal</span>
                                    <span className="font-medium">3/5 books</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-600">Yearly Goal</span>
                                    <span className="font-medium">15/24 books</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '62.5%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Achievements</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl">
                                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                    <Star size={16} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-medium text-yellow-900">First Order</p>
                                    <p className="text-xs text-yellow-700">Completed your first rental</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <BookOpen size={16} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-medium text-blue-900">Bookworm</p>
                                    <p className="text-xs text-blue-700">Read 10+ books</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <TrendingUp size={16} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-medium text-green-900">Regular Reader</p>
                                    <p className="text-xs text-green-700">3 months active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserStatistics;