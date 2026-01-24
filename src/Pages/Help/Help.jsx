import React, { useState } from 'react';
import { Search, BookOpen, Truck, CreditCard, RotateCcw, Users, MessageCircle, Phone, Mail } from 'lucide-react';
import Container from '../../Components/Container';

const HelpPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Topics', icon: <BookOpen size={20} /> },
        { id: 'ordering', name: 'Ordering', icon: <BookOpen size={20} /> },
        { id: 'delivery', name: 'Delivery', icon: <Truck size={20} /> },
        { id: 'payment', name: 'Payment', icon: <CreditCard size={20} /> },
        { id: 'returns', name: 'Returns', icon: <RotateCcw size={20} /> },
        { id: 'account', name: 'Account', icon: <Users size={20} /> }
    ];

    const helpArticles = [
        {
            id: 1,
            category: 'ordering',
            title: 'How to place your first order',
            description: 'Step-by-step guide to ordering books on Book Courier',
            content: 'Learn how to browse books, add them to cart, and complete your order...',
            popular: true
        },
        {
            id: 2,
            category: 'delivery',
            title: 'Delivery times and areas',
            description: 'Understanding our delivery zones and expected delivery times',
            content: 'We deliver across Dhaka city with different time zones...',
            popular: true
        },
        {
            id: 3,
            category: 'payment',
            title: 'Payment methods and security',
            description: 'All about our secure payment options',
            content: 'We accept credit cards, mobile banking, and cash on delivery...',
            popular: false
        },
        {
            id: 4,
            category: 'returns',
            title: 'How to return books',
            description: 'Easy steps to return books when you\'re done reading',
            content: 'Returning books is simple with our pickup service...',
            popular: true
        },
        {
            id: 5,
            category: 'account',
            title: 'Managing your account',
            description: 'Update profile, change password, and manage preferences',
            content: 'Keep your account information up to date...',
            popular: false
        },
        {
            id: 6,
            category: 'ordering',
            title: 'Understanding book conditions',
            description: 'What our book condition ratings mean',
            content: 'We rate all books from Excellent to Good condition...',
            popular: false
        },
        {
            id: 7,
            category: 'delivery',
            title: 'Tracking your delivery',
            description: 'How to track your book delivery in real-time',
            content: 'Get real-time updates on your delivery status...',
            popular: true
        },
        {
            id: 8,
            category: 'payment',
            title: 'Refunds and billing',
            description: 'Understanding our refund policy and billing process',
            content: 'Learn about our transparent refund and billing policies...',
            popular: false
        }
    ];

    const quickActions = [
        {
            title: 'Track Your Order',
            description: 'Check the status of your current orders',
            icon: <Truck size={24} />,
            action: 'Track Now',
            color: 'bg-blue-500'
        },
        {
            title: 'Return a Book',
            description: 'Schedule a pickup for book returns',
            icon: <RotateCcw size={24} />,
            action: 'Schedule Return',
            color: 'bg-green-500'
        },
        {
            title: 'Payment Issues',
            description: 'Get help with payment problems',
            icon: <CreditCard size={24} />,
            action: 'Get Help',
            color: 'bg-purple-500'
        },
        {
            title: 'Account Settings',
            description: 'Update your profile and preferences',
            icon: <Users size={24} />,
            action: 'Manage Account',
            color: 'bg-orange-500'
        }
    ];

    const contactOptions = [
        {
            method: 'Live Chat',
            description: 'Chat with our support team',
            availability: 'Available 24/7',
            icon: <MessageCircle size={24} />,
            action: 'Start Chat',
            color: 'bg-primary'
        },
        {
            method: 'Phone Support',
            description: 'Call us for immediate help',
            availability: '9 AM - 9 PM daily',
            icon: <Phone size={24} />,
            action: 'Call Now',
            color: 'bg-secondary'
        },
        {
            method: 'Email Support',
            description: 'Send us a detailed message',
            availability: 'Response within 24 hours',
            icon: <Mail size={24} />,
            action: 'Send Email',
            color: 'bg-accent'
        }
    ];

    const filteredArticles = helpArticles.filter(article => {
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            article.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const popularArticles = helpArticles.filter(article => article.popular);

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        How Can We Help You?
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed mb-8">
                        Find answers to common questions, get help with your orders, 
                        or contact our support team for personalized assistance.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral/40" />
                        <input
                            type="text"
                            placeholder="Search for help articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary text-lg transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Quick Actions</h2>
                        <p className="text-neutral/70">Get immediate help with common tasks</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickActions.map((action, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer">
                                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                                    {action.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                                <p className="text-neutral/60 text-sm mb-4">{action.description}</p>
                                <button className="btn btn-outline btn-primary btn-sm w-full">
                                    {action.action}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Articles */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Popular Help Articles</h2>
                        <p className="text-neutral/70">Most searched topics by our users</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {popularArticles.map((article) => (
                            <div key={article.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-bold uppercase">
                                        {article.category}
                                    </span>
                                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-bold">
                                        Popular
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-neutral/60 text-sm">{article.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Browse by Category */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Browse Help Topics</h2>
                        <p className="text-neutral/70">Find articles organized by category</p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                                    selectedCategory === category.id
                                        ? 'bg-primary text-white'
                                        : 'bg-slate-100 text-neutral/70 hover:bg-slate-200'
                                }`}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.map((article) => (
                            <div key={article.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-bold uppercase">
                                        {article.category}
                                    </span>
                                    {article.popular && (
                                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-bold">
                                            Popular
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-neutral/60 text-sm">{article.description}</p>
                            </div>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-neutral/60">No articles found matching your search.</p>
                        </div>
                    )}
                </div>

                {/* Contact Support */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Still Need Help?</h2>
                        <p className="text-neutral/70">Contact our support team for personalized assistance</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactOptions.map((option, index) => (
                            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                                    {option.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{option.method}</h3>
                                <p className="text-neutral/60 mb-2">{option.description}</p>
                                <p className="text-sm text-neutral/50 mb-6">{option.availability}</p>
                                <button className="btn btn-primary w-full rounded-xl">
                                    {option.action}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="py-16 bg-red-50 rounded-3xl text-center">
                    <h2 className="text-2xl font-black mb-4 text-red-800">Emergency Support</h2>
                    <p className="text-red-600 mb-6">
                        For urgent issues like lost books or delivery emergencies, contact us immediately:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+8801234567890" className="btn btn-error px-8 rounded-full">
                            Call Emergency Line
                        </a>
                        <button className="btn btn-outline btn-error px-8 rounded-full">
                            Emergency Chat
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HelpPage;