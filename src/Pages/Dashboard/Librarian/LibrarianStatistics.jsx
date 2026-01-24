import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useAuth } from '../../../Hooks/useAuth';
import { 
    BookOpen, 
    ShoppingCart, 
    DollarSign, 
    TrendingUp, 
    TrendingDown,
    Package,
    Clock,
    Star,
    Eye,
    Users
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

const LibrarianStatistics = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // Fetch librarian statistics
    const { data: stats = {}, isLoading: statsLoading } = useQuery({
        queryKey: ['librarian-stats', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/librarian/stats/${user.email}`);
            return data;
        },
        enabled: !!user?.email
    });

    // Fetch librarian activity data
    const { data: activityData = {}, isLoading: activityLoading } = useQuery({
        queryKey: ['librarian-activity', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/librarian/activity/${user.email}`);
            return data;
        },
        enabled: !!user?.email
    });

    // Mock data fallback for development
    const mockStats = {
        totalBooks: 45,
        publishedBooks: 38,
        unpublishedBooks: 7,
        totalOrders: 156,
        pendingOrders: 12,
        completedOrders: 132,
        cancelledOrders: 12,
        totalEarnings: 18750,
        monthlyEarnings: 3200,
        averageRating: 4.6,
        totalViews: 2340,
        booksGrowth: 15.2,
        ordersGrowth: 8.7,
        earningsGrowth: 12.3
    };

    const mockActivityData = {
        monthlyEarnings: [
            { month: 'Jan', earnings: 2800, orders: 22 },
            { month: 'Feb', earnings: 2400, orders: 18 },
            { month: 'Mar', earnings: 3200, orders: 28 },
            { month: 'Apr', earnings: 2900, orders: 24 },
            { month: 'May', earnings: 3600, orders: 32 },
            { month: 'Jun', earnings: 3200, orders: 26 }
        ],
        bookCategories: [
            { name: 'Fiction', value: 35, color: '#0088FE' },
            { name: 'Science', value: 25, color: '#00C49F' },
            { name: 'History', value: 20, color: '#FFBB28' },
            { name: 'Biography', value: 12, color: '#FF8042' },
            { name: 'Others', value: 8, color: '#8884D8' }
        ],
        orderStatus: [
            { status: 'Completed', count: 132, color: '#10b981' },
            { status: 'Pending', count: 12, color: '#f59e0b' },
            { status: 'Cancelled', count: 12, color: '#ef4444' }
        ]
    };

    const currentStats = Object.keys(stats).length > 0 ? stats : mockStats;
    const currentActivityData = Object.keys(activityData).length > 0 ? activityData : mockActivityData;

    const StatCard = ({ title, value, icon: Icon, trend, trendValue, color = "primary" }) => (
        <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center`}>
                    <Icon size={24} className={`text-${color}`} />
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                        trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {trendValue}%
                    </div>
                )}
            </div>
            <div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                </h3>
                <p className="text-slate-600 text-sm font-medium">{title}</p>
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
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-slate-200 rounded-2xl h-80 animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-slate-900 mb-2">Librarian Dashboard</h1>
                <p className="text-slate-600">Manage your book inventory and track your performance</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Books"
                    value={currentStats.totalBooks}
                    icon={BookOpen}
                    trend={currentStats.booksGrowth > 0 ? 'up' : 'down'}
                    trendValue={Math.abs(currentStats.booksGrowth)}
                    color="blue"
                />
                <StatCard
                    title="Total Orders"
                    value={currentStats.totalOrders}
                    icon={ShoppingCart}
                    trend={currentStats.ordersGrowth > 0 ? 'up' : 'down'}
                    trendValue={Math.abs(currentStats.ordersGrowth)}
                    color="green"
                />
                <StatCard
                    title="Total Earnings"
                    value={`৳${currentStats.totalEarnings?.toLocaleString()}`}
                    icon={DollarSign}
                    trend={currentStats.earningsGrowth > 0 ? 'up' : 'down'}
                    trendValue={Math.abs(currentStats.earningsGrowth)}
                    color="orange"
                />
                <StatCard
                    title="Average Rating"
                    value={`${currentStats.averageRating}/5`}
                    icon={Star}
                    color="yellow"
                />
            </div>

            {/* Secondary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Published Books"
                    value={currentStats.publishedBooks}
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
                    title="Monthly Earnings"
                    value={`৳${currentStats.monthlyEarnings?.toLocaleString()}`}
                    icon={DollarSign}
                    color="purple"
                />
                <StatCard
                    title="Total Views"
                    value={currentStats.totalViews}
                    icon={Eye}
                    color="indigo"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Earnings */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-900">Monthly Earnings</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                            Earnings (৳)
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={currentActivityData.monthlyEarnings}>
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
                                dataKey="earnings" 
                                stroke="#00453E" 
                                fill="#00453E"
                                fillOpacity={0.1}
                                strokeWidth={3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Monthly Orders */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-900">Monthly Orders</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            Orders
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={currentActivityData.monthlyEarnings}>
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

                {/* Book Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Book Categories</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={currentActivityData.bookCategories}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={120}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {currentActivityData.bookCategories.map((entry, index) => (
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
                        {currentActivityData.bookCategories.map((entry, index) => (
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

                {/* Order Status */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Order Status</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={currentActivityData.orderStatus}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={120}
                                paddingAngle={5}
                                dataKey="count"
                            >
                                {currentActivityData.orderStatus.map((entry, index) => (
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
                        {currentActivityData.orderStatus.map((entry, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div 
                                    className="w-3 h-3 rounded-full" 
                                    style={{ backgroundColor: entry.color }}
                                ></div>
                                <span className="text-sm text-slate-600">
                                    {entry.status} ({entry.count})
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <button className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                        <BookOpen size={20} className="text-blue-600" />
                        <span className="font-medium text-blue-900">Add New Book</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
                        <Package size={20} className="text-green-600" />
                        <span className="font-medium text-green-900">My Books</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
                        <ShoppingCart size={20} className="text-purple-600" />
                        <span className="font-medium text-purple-900">Manage Orders</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors">
                        <Eye size={20} className="text-orange-600" />
                        <span className="font-medium text-orange-900">View Analytics</span>
                    </button>
                </div>
            </div>

            {/* Performance Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Top Performing Books</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-medium">The Great Gatsby</span>
                            <span className="text-sm text-slate-600">23 orders</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-medium">To Kill a Mockingbird</span>
                            <span className="text-sm text-slate-600">19 orders</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-medium">1984</span>
                            <span className="text-sm text-slate-600">17 orders</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">New order for "Dune"</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm">Book "Sapiens" published</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm">Order completed for "Atomic Habits"</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Goals Progress</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-600">Monthly Orders</span>
                                <span className="font-medium">26/30</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '86.7%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-600">Monthly Earnings</span>
                                <span className="font-medium">৳3,200/৳4,000</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibrarianStatistics;