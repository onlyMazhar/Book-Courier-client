import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { 
    Users, 
    BookOpen, 
    ShoppingCart, 
    DollarSign, 
    TrendingUp, 
    TrendingDown,
    Calendar,
    Eye,
    Star,
    Package
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

const AdminStatistics = () => {
    const axiosSecure = useAxiosSecure();

    // Fetch dashboard statistics
    const { data: stats = {}, isLoading: statsLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin/stats');
            return data;
        }
    });

    // Fetch chart data
    const { data: chartData = {}, isLoading: chartLoading } = useQuery({
        queryKey: ['admin-charts'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin/charts');
            return data;
        }
    });

    // Mock data fallback for development
    const mockStats = {
        totalUsers: 1247,
        totalBooks: 3456,
        totalOrders: 892,
        totalRevenue: 45670,
        newUsersThisMonth: 156,
        newBooksThisMonth: 89,
        pendingOrders: 23,
        completedOrders: 869,
        userGrowth: 12.5,
        revenueGrowth: 8.3,
        orderGrowth: -2.1,
        bookGrowth: 15.7
    };

    const mockChartData = {
        monthlyRevenue: [
            { month: 'Jan', revenue: 4200, orders: 45 },
            { month: 'Feb', revenue: 3800, orders: 52 },
            { month: 'Mar', revenue: 5200, orders: 48 },
            { month: 'Apr', revenue: 4600, orders: 61 },
            { month: 'May', revenue: 5800, orders: 55 },
            { month: 'Jun', revenue: 6200, orders: 67 }
        ],
        categoryDistribution: [
            { name: 'Fiction', value: 35, color: '#0088FE' },
            { name: 'Non-Fiction', value: 25, color: '#00C49F' },
            { name: 'Science', value: 20, color: '#FFBB28' },
            { name: 'History', value: 12, color: '#FF8042' },
            { name: 'Others', value: 8, color: '#8884D8' }
        ],
        userActivity: [
            { day: 'Mon', active: 120, new: 12 },
            { day: 'Tue', active: 145, new: 19 },
            { day: 'Wed', active: 165, new: 15 },
            { day: 'Thu', active: 142, new: 22 },
            { day: 'Fri', active: 189, new: 28 },
            { day: 'Sat', active: 201, new: 31 },
            { day: 'Sun', active: 178, new: 25 }
        ]
    };

    const currentStats = Object.keys(stats).length > 0 ? stats : mockStats;
    const currentChartData = Object.keys(chartData).length > 0 ? chartData : mockChartData;

    const StatCard = ({ title, value, icon: Icon, trend, trendValue, color = "primary" }) => (
        <div className="group p-6 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm">
                    <Icon size={32} className={`text-${color}`} />
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full ${
                        trend === 'up' ? 'text-success bg-success/10' : 'text-error bg-error/10'
                    }`}>
                        {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {trendValue}%
                    </div>
                )}
            </div>
            <div>
                <h3 className="text-3xl font-black text-base-content mb-2 group-hover:text-primary transition-colors">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                </h3>
                <p className="text-neutral/60 font-medium">{title}</p>
            </div>
        </div>
    );

    if (statsLoading || chartLoading) {
        return (
            <div className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-slate-200 rounded-2xl h-32 animate-pulse"></div>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-slate-200 rounded-2xl h-80 animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12 pt-6">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
                    Admin Overview
                </h2>
                <h1 className="text-3xl md:text-5xl font-black text-base-content mb-6">
                    Platform Analytics Dashboard
                </h1>
                <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-neutral/60 text-lg">Monitor your platform's performance and key metrics</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value={currentStats.totalUsers}
                    icon={Users}
                    trend={currentStats.userGrowth > 0 ? 'up' : 'down'}
                    trendValue={Math.abs(currentStats.userGrowth)}
                    color="blue"
                />
                <StatCard
                    title="Total Books"
                    value={currentStats.totalBooks}
                    icon={BookOpen}
                    trend={currentStats.bookGrowth > 0 ? 'up' : 'down'}
                    trendValue={Math.abs(currentStats.bookGrowth)}
                    color="green"
                />
                <StatCard
                    title="Total Orders"
                    value={currentStats.totalOrders}
                    icon={ShoppingCart}
                    trend={currentStats.orderGrowth > 0 ? 'up' : 'down'}
                    trendValue={Math.abs(currentStats.orderGrowth)}
                    color="purple"
                />
                <StatCard
                    title="Total Revenue"
                    value={`৳${currentStats.totalRevenue?.toLocaleString()}`}
                    icon={DollarSign}
                    trend={currentStats.revenueGrowth > 0 ? 'up' : 'down'}
                    trendValue={Math.abs(currentStats.revenueGrowth)}
                    color="orange"
                />
            </div>

            {/* Secondary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="New Users This Month"
                    value={currentStats.newUsersThisMonth}
                    icon={Users}
                    color="indigo"
                />
                <StatCard
                    title="New Books This Month"
                    value={currentStats.newBooksThisMonth}
                    icon={Package}
                    color="teal"
                />
                <StatCard
                    title="Pending Orders"
                    value={currentStats.pendingOrders}
                    icon={Calendar}
                    color="yellow"
                />
                <StatCard
                    title="Completed Orders"
                    value={currentStats.completedOrders}
                    icon={Star}
                    color="green"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Chart */}
                <div className="group p-8 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors">Monthly Revenue</h3>
                            <p className="text-neutral/60 mt-1">Track your earnings over time</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral/60">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                            Revenue (৳)
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={currentChartData.monthlyRevenue}>
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
                                dataKey="revenue" 
                                stroke="#00453E" 
                                fill="#00453E"
                                fillOpacity={0.1}
                                strokeWidth={3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Orders Chart */}
                <div className="group p-8 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors">Monthly Orders</h3>
                            <p className="text-neutral/60 mt-1">Monitor order volume trends</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral/60">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            Orders
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={currentChartData.monthlyRevenue}>
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
                                dataKey="orders" 
                                fill="#3b82f6"
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Category Distribution */}
                <div className="group p-8 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl">
                    <div className="mb-8">
                        <h3 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors mb-2">Book Categories</h3>
                        <p className="text-neutral/60">Distribution of book genres</p>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={currentChartData.categoryDistribution}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={120}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {currentChartData.categoryDistribution.map((entry, index) => (
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
                        {currentChartData.categoryDistribution.map((entry, index) => (
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

                {/* User Activity */}
                <div className="group p-8 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl">
                    <div className="mb-8">
                        <h3 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors mb-2">Weekly User Activity</h3>
                        <p className="text-neutral/60">Track user engagement patterns</p>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={currentChartData.userActivity}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                            <XAxis 
                                dataKey="day" 
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
                            <Line 
                                type="monotone" 
                                dataKey="active" 
                                stroke="#00453E" 
                                strokeWidth={3}
                                dot={{ fill: '#00453E', strokeWidth: 2, r: 4 }}
                                name="Active Users"
                            />
                            <Line 
                                type="monotone" 
                                dataKey="new" 
                                stroke="#3b82f6" 
                                strokeWidth={3}
                                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                                name="New Users"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <div className="flex gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                            <span className="text-sm text-slate-600">Active Users</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-slate-600">New Users</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-8 md:p-12 rounded-4xl bg-neutral text-neutral-content">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">Quick Actions</h3>
                    <p className="opacity-70">Manage your platform efficiently</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button className="group flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <Users size={24} className="text-white" />
                        </div>
                        <span className="font-bold text-white">Manage Users</span>
                    </button>
                    <button className="group flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <BookOpen size={24} className="text-white" />
                        </div>
                        <span className="font-bold text-white">Manage Books</span>
                    </button>
                    <button className="group flex items-center gap-4 p-6 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <Eye size={24} className="text-white" />
                        </div>
                        <span className="font-bold text-white">View Reports</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminStatistics;