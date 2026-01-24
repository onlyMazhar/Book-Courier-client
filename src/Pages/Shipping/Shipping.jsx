import React from 'react';
import { Truck, Clock, MapPin, Package, Shield, CheckCircle } from 'lucide-react';
import Container from '../../Components/Container';

const ShippingPage = () => {
    const deliveryZones = [
        {
            zone: "Zone A - Central Dhaka",
            areas: ["Dhanmondi", "Gulshan", "Banani", "Uttara", "Mohammadpur", "Farmgate", "Shahbagh", "New Market"],
            deliveryTime: "12-18 hours",
            standardFee: "Free",
            expressFee: "৳50",
            color: "bg-green-500"
        },
        {
            zone: "Zone B - Extended Areas", 
            areas: ["Mirpur", "Bashundhara", "Badda", "Rampura", "Tejgaon", "Wari", "Motijheel", "Elephant Road"],
            deliveryTime: "18-24 hours",
            standardFee: "৳30",
            expressFee: "৳70",
            color: "bg-blue-500"
        },
        {
            zone: "Zone C - Outer Areas",
            areas: ["Savar", "Keraniganj", "Narayanganj", "Gazipur", "Tongi", "Demra", "Matuail", "Postogola"],
            deliveryTime: "24-48 hours", 
            standardFee: "৳50",
            expressFee: "৳100",
            color: "bg-orange-500"
        }
    ];

    const deliveryOptions = [
        {
            name: "Standard Delivery",
            icon: <Truck size={32} />,
            description: "Regular delivery within promised timeframe",
            features: [
                "Delivery within zone timeframe",
                "SMS and email notifications",
                "Real-time tracking",
                "Contactless delivery available"
            ],
            color: "bg-blue-500"
        },
        {
            name: "Express Delivery",
            icon: <Clock size={32} />,
            description: "Faster delivery for urgent book needs",
            features: [
                "50% faster than standard",
                "Priority handling",
                "Dedicated express riders",
                "Same-day delivery in Zone A"
            ],
            color: "bg-red-500"
        },
        {
            name: "Scheduled Delivery",
            icon: <Package size={32} />,
            description: "Choose your preferred delivery time slot",
            features: [
                "Morning (9 AM - 1 PM)",
                "Afternoon (1 PM - 6 PM)", 
                "Evening (6 PM - 9 PM)",
                "Weekend delivery available"
            ],
            color: "bg-purple-500"
        }
    ];

    const deliveryProcess = [
        {
            step: 1,
            title: "Order Confirmation",
            description: "Your order is confirmed and sent to the librarian",
            icon: <CheckCircle size={24} />
        },
        {
            step: 2,
            title: "Book Pickup",
            description: "Our rider collects the book from the librarian",
            icon: <Package size={24} />
        },
        {
            step: 3,
            title: "In Transit",
            description: "Book is on its way to your delivery address",
            icon: <Truck size={24} />
        },
        {
            step: 4,
            title: "Delivered",
            description: "Book is delivered to your specified address",
            icon: <MapPin size={24} />
        }
    ];

    const policies = [
        {
            title: "Delivery Guarantee",
            description: "We guarantee delivery within the promised timeframe or provide a full refund of delivery charges.",
            icon: <Shield size={24} />
        },
        {
            title: "Safe Handling",
            description: "All books are carefully packaged and handled to ensure they reach you in perfect condition.",
            icon: <Package size={24} />
        },
        {
            title: "Flexible Scheduling",
            description: "Choose from multiple delivery time slots that work with your schedule.",
            icon: <Clock size={24} />
        },
        {
            title: "Real-time Updates",
            description: "Get SMS and email notifications at every step of the delivery process.",
            icon: <CheckCircle size={24} />
        }
    ];

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Shipping & Delivery
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed">
                        Fast, reliable book delivery across Dhaka city. Learn about our 
                        delivery zones, timing, and shipping policies.
                    </p>
                </div>

                {/* Delivery Stats */}
                <div className="py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-black text-primary mb-2">18hrs</h3>
                            <p className="text-base-content/70 text-sm">Average Delivery Time</p>
                        </div>
                        <div className="p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-black text-primary mb-2">99.8%</h3>
                            <p className="text-base-content/70 text-sm">On-Time Delivery</p>
                        </div>
                        <div className="p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-black text-primary mb-2">75+</h3>
                            <p className="text-base-content/70 text-sm">Delivery Points</p>
                        </div>
                        <div className="p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-black text-primary mb-2">100+</h3>
                            <p className="text-base-content/70 text-sm">Active Riders</p>
                        </div>
                    </div>
                </div>

                {/* Delivery Options */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Delivery Options</h2>
                        <p className="text-neutral/70">Choose the delivery option that works best for you</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {deliveryOptions.map((option, index) => (
                            <div key={index} className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-8">
                                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                                    {option.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{option.name}</h3>
                                <p className="text-neutral/60 mb-6">{option.description}</p>
                                <ul className="space-y-2">
                                    {option.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <CheckCircle size={16} className="text-green-500" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delivery Zones */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Delivery Zones & Pricing</h2>
                        <p className="text-neutral/70">Transparent pricing based on your location</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {deliveryZones.map((zone, index) => (
                            <div key={index} className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 overflow-hidden">
                                <div className={`${zone.color} text-white p-6`}>
                                    <h3 className="text-xl font-bold mb-2">{zone.zone}</h3>
                                    <div className="flex items-center gap-2 text-sm opacity-90">
                                        <Clock size={16} />
                                        <span>{zone.deliveryTime}</span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="text-center">
                                            <p className="text-sm text-neutral/60 mb-1">Standard</p>
                                            <p className="font-bold text-lg text-green-600">{zone.standardFee}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm text-neutral/60 mb-1">Express</p>
                                            <p className="font-bold text-lg text-primary">{zone.expressFee}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <p className="font-medium text-sm text-neutral/80 mb-3">Covered Areas:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {zone.areas.map((area, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-slate-100 rounded-full text-xs">
                                                    {area}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delivery Process */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">How Delivery Works</h2>
                        <p className="text-neutral/70">Track your book from order to doorstep</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {deliveryProcess.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                                        {step.step}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-neutral/60 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shipping Policies */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Our Shipping Policies</h2>
                        <p className="text-neutral/70">What you can expect from our delivery service</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {policies.map((policy, index) => (
                            <div key={index} className="flex gap-4 p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                    {policy.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">{policy.title}</h3>
                                    <p className="text-neutral/60 text-sm leading-relaxed">{policy.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Special Circumstances */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Special Delivery Situations</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-6">
                            <h3 className="text-lg font-bold mb-3 text-base-content">Weather Delays</h3>
                            <p className="text-base-content/70 text-sm">
                                During severe weather conditions, deliveries may be delayed for safety reasons. 
                                We'll notify you immediately and reschedule at no extra cost.
                            </p>
                        </div>

                        <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-6">
                            <h3 className="text-lg font-bold mb-3 text-base-content">Holiday Delivery</h3>
                            <p className="text-base-content/70 text-sm">
                                We deliver on most holidays except major religious festivals. 
                                Holiday deliveries may take 24-48 hours longer than usual.
                            </p>
                        </div>

                        <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-6">
                            <h3 className="text-lg font-bold mb-3 text-base-content">Failed Delivery</h3>
                            <p className="text-base-content/70 text-sm">
                                If delivery fails due to incorrect address or unavailability, 
                                we'll attempt redelivery the next day at no additional charge.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact for Shipping */}
                <div className="py-16 text-center">
                    <h2 className="text-3xl font-black mb-6">Questions About Shipping?</h2>
                    <p className="text-neutral/70 mb-8 max-w-2xl mx-auto">
                        Need help with delivery or have special requirements? 
                        Our support team is here to assist you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn btn-primary btn-lg px-8 rounded-full">
                            Contact Support
                        </button>
                        <button className="btn btn-outline btn-primary btn-lg px-8 rounded-full">
                            Track Your Order
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ShippingPage;