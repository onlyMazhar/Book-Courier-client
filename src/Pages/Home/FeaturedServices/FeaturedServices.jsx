import React from 'react';
import { Truck, CreditCard, RotateCcw, Shield, Clock, Users } from 'lucide-react';

const FeaturedServices = () => {
    const services = [
        {
            id: 1,
            icon: <Truck size={40} />,
            title: "Express Delivery",
            description: "Same-day delivery across Dhaka city with real-time tracking",
            features: ["24-hour delivery", "Real-time tracking", "SMS notifications"],
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            icon: <CreditCard size={40} />,
            title: "Secure Payments",
            description: "Multiple payment options with bank-level security",
            features: ["Stripe integration", "Mobile banking", "Cash on delivery"],
            color: "from-green-500 to-green-600"
        },
        {
            id: 3,
            icon: <RotateCcw size={40} />,
            title: "Easy Returns",
            description: "Hassle-free return policy within 7 days",
            features: ["7-day return", "Free pickup", "Instant refund"],
            color: "from-purple-500 to-purple-600"
        },
        {
            id: 4,
            icon: <Shield size={40} />,
            title: "Quality Assurance",
            description: "Every book is verified for condition and authenticity",
            features: ["Quality checked", "Authentic books", "Condition guarantee"],
            color: "from-orange-500 to-orange-600"
        },
        {
            id: 5,
            icon: <Clock size={40} />,
            title: "24/7 Support",
            description: "Round-the-clock customer service for all your needs",
            features: ["Live chat", "Phone support", "Email assistance"],
            color: "from-red-500 to-red-600"
        },
        {
            id: 6,
            icon: <Users size={40} />,
            title: "Community Network",
            description: "Connect with local librarians and book enthusiasts",
            features: ["Local librarians", "Book clubs", "Reading groups"],
            color: "from-cyan-500 to-cyan-600"
        }
    ];

    return (
        <div className="py-20">
            <div className="mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                        <Shield size={18} />
                        <span>Premium Services</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-base-content mb-6">
                        Services That Make Us Different
                    </h2>
                    <p className="text-base-content/60 max-w-2xl mx-auto text-lg">
                        We go beyond just delivering books. Experience our comprehensive 
                        services designed to make your reading journey seamless.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative p-8 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                            
                            {/* Icon */}
                            <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 `}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-base-content/60 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-neutral/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-slate-900 rounded-3xl text-white">
                    <div className="text-center">
                        <h4 className="text-3xl font-black text-primary mb-2">99.8%</h4>
                        <p className="text-sm opacity-70">Delivery Success Rate</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-3xl font-black text-primary mb-2">18hrs</h4>
                        <p className="text-sm opacity-70">Average Delivery Time</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-3xl font-black text-primary mb-2">24/7</h4>
                        <p className="text-sm opacity-70">Customer Support</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-3xl font-black text-primary mb-2">15min</h4>
                        <p className="text-sm opacity-70">Average Response Time</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedServices;