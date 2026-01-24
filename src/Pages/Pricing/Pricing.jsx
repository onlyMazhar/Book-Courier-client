import React from 'react';
import { Check, BookOpen, Users, Crown, Zap } from 'lucide-react';
import Container from '../../Components/Container';

const PricingPage = () => {
    const pricingPlans = [
        {
            name: "Basic Reader",
            price: "Free",
            period: "Forever",
            description: "Perfect for casual readers who want to try our service",
            features: [
                "Browse 50,000+ books",
                "Standard delivery (24-48 hours)",
                "Basic customer support",
                "Return within 7 days",
                "Mobile app access"
            ],
            limitations: [
                "Delivery fee: ৳50 per order",
                "Maximum 2 books per order",
                "No priority support"
            ],
            buttonText: "Get Started",
            buttonClass: "btn-outline btn-primary",
            popular: false
        },
        {
            name: "Book Lover",
            price: "৳299",
            period: "per month",
            description: "Ideal for regular readers who want premium benefits",
            features: [
                "Everything in Basic",
                "Free delivery on all orders",
                "Express delivery (12-24 hours)",
                "Priority customer support",
                "Extended return period (14 days)",
                "Exclusive book recommendations",
                "Early access to new arrivals",
                "Maximum 5 books per order"
            ],
            limitations: [],
            buttonText: "Choose Plan",
            buttonClass: "btn-primary",
            popular: true
        },
        {
            name: "Librarian",
            price: "৳499",
            period: "per month",
            description: "For book owners who want to earn by sharing their collection",
            features: [
                "Everything in Book Lover",
                "List unlimited books",
                "Earn up to ৳15,000/month",
                "Professional book photography",
                "Marketing support",
                "Analytics dashboard",
                "Dedicated account manager",
                "Premium listing placement"
            ],
            limitations: [],
            buttonText: "Become Librarian",
            buttonClass: "btn-secondary",
            popular: false
        }
    ];

    const deliveryPricing = [
        { zone: "Zone A (Central Dhaka)", free: "Free", paid: "Free", express: "৳50" },
        { zone: "Zone B (Extended Areas)", free: "৳30", paid: "Free", express: "৳70" },
        { zone: "Zone C (Outer Areas)", free: "৳50", paid: "Free", express: "৳100" }
    ];

    const rentalPricing = [
        { category: "Fiction & Literature", price: "৳50-150", period: "7-14 days" },
        { category: "Academic & Textbooks", price: "৳100-300", period: "14-30 days" },
        { category: "Professional & Business", price: "৳80-200", period: "7-21 days" },
        { category: "Children's Books", price: "৳30-80", period: "7-14 days" },
        { category: "Rare & Collectible", price: "৳200-500", period: "7-14 days" }
    ];

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed">
                        Choose the plan that works best for you. No hidden fees, 
                        no long-term contracts. Cancel anytime.
                    </p>
                </div>

                {/* Pricing Plans */}
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className={`relative bg-base-200 backdrop-blur-sm rounded-3xl border-2 border-base-300 hover:bg-base-300 shadow-xl transition-all duration-300 p-8 ${
                                plan.popular ? 'border-primary scale-105' : ''
                            }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                            <Crown size={16} />
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-black text-primary">{plan.price}</span>
                                        {plan.period !== "Forever" && (
                                            <span className="text-neutral/60 ml-2">/{plan.period}</span>
                                        )}
                                    </div>
                                    <p className="text-neutral/60 text-sm">{plan.description}</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <Check size={20} className="text-green-500 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                    
                                    {plan.limitations.map((limitation, idx) => (
                                        <div key={idx} className="flex items-center gap-3 opacity-60">
                                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                <div className="w-1 h-4 bg-neutral/40 rounded"></div>
                                            </div>
                                            <span className="text-sm">{limitation}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`btn w-full rounded-2xl ${plan.buttonClass}`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delivery Pricing */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Delivery Pricing</h2>
                        <p className="text-neutral/70">Transparent delivery fees based on your location</p>
                    </div>

                    <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="text-left font-bold">Delivery Zone</th>
                                        <th className="text-center font-bold">Basic Plan</th>
                                        <th className="text-center font-bold">Book Lover Plan</th>
                                        <th className="text-center font-bold">Express Delivery</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {deliveryPricing.map((zone, index) => (
                                        <tr key={index} className="border-b border-slate-100">
                                            <td className="font-medium">{zone.zone}</td>
                                            <td className="text-center">{zone.free}</td>
                                            <td className="text-center text-green-600 font-medium">{zone.paid}</td>
                                            <td className="text-center">{zone.express}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Rental Pricing */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Book Rental Pricing</h2>
                        <p className="text-neutral/70">Affordable rates for different book categories</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rentalPricing.map((category, index) => (
                            <div key={index} className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpen size={24} className="text-primary" />
                                    <h3 className="font-bold">{category.category}</h3>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-neutral/60">Rental Price:</span>
                                        <span className="font-bold text-primary">{category.price}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral/60">Rental Period:</span>
                                        <span className="font-medium">{category.period}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Librarian Earnings */}
                {/* <div className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Librarian Earnings Potential</h2>
                        <p className="text-neutral/70">Turn your book collection into a steady income stream</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">৳5,000 - ৳8,000</h3>
                            <p className="text-neutral/60 font-medium mb-2">Beginner Librarian</p>
                            <p className="text-sm text-neutral/50">50-100 books, 20-30 rentals/month</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">৳8,000 - ৳12,000</h3>
                            <p className="text-neutral/60 font-medium mb-2">Active Librarian</p>
                            <p className="text-sm text-neutral/50">100-200 books, 40-60 rentals/month</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                <Crown size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">৳12,000 - ৳20,000</h3>
                            <p className="text-neutral/60 font-medium mb-2">Top Librarian</p>
                            <p className="text-sm text-neutral/50">200+ books, 80+ rentals/month</p>
                        </div>
                    </div>
                </div> */}

                {/* FAQ */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Pricing FAQ</h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-6">
                            <h3 className="text-lg font-bold mb-3 text-base-content">Can I change my plan anytime?</h3>
                            <p className="text-base-content/70">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be charged or credited accordingly.</p>
                        </div>

                        <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-6">
                            <h3 className="text-lg font-bold mb-3 text-base-content">What happens if I return a book late?</h3>
                            <p className="text-base-content/70">Late returns incur a fee of ৳10 per day for most books. Academic and rare books may have higher late fees. You'll receive reminders before the due date.</p>
                        </div>

                        <div className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-6">
                            <h3 className="text-lg font-bold mb-3 text-base-content">Are there any hidden fees?</h3>
                            <p className="text-base-content/70">No hidden fees! All costs are clearly displayed during checkout. The only additional charges are for late returns or damaged books.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                {/* <div className="py-16 text-center">
                    <h2 className="text-3xl font-black mb-6">Ready to Start Reading?</h2>
                    <p className="text-neutral/70 mb-8 max-w-2xl mx-auto">
                        Choose your plan and join thousands of book lovers in Dhaka.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn btn-primary btn-lg px-8 rounded-full">
                            Start Free Trial
                        </button>
                        <button className="btn btn-outline btn-primary btn-lg px-8 rounded-full">
                            Compare Plans
                        </button>
                    </div>
                </div> */}
            </Container>
        </div>
    );
};

export default PricingPage;