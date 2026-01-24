import React from 'react';
import { RotateCcw, Clock, CheckCircle, AlertCircle, Package, Truck, DollarSign } from 'lucide-react';
import Container from '../../Components/Container';

const ReturnsPage = () => {
    const returnProcess = [
        {
            step: 1,
            title: "Schedule Return",
            description: "Log into your account and schedule a return pickup",
            icon: <RotateCcw size={24} />,
            details: "Available 24/7 through your dashboard or mobile app"
        },
        {
            step: 2,
            title: "Prepare Books",
            description: "Pack books in original condition with any included materials",
            icon: <Package size={24} />,
            details: "Ensure books are clean and undamaged"
        },
        {
            step: 3,
            title: "Pickup Scheduled",
            description: "Our rider will collect books from your address",
            icon: <Truck size={24} />,
            details: "Free pickup service within Dhaka city"
        },
        {
            step: 4,
            title: "Return Processed",
            description: "Books are inspected and your rental is marked complete",
            icon: <CheckCircle size={24} />,
            details: "Process completed within 24 hours of pickup"
        }
    ];

    const returnPolicies = [
        {
            title: "Return Window",
            description: "Books must be returned by the agreed rental end date",
            icon: <Clock size={24} />,
            details: [
                "Standard rental: 7-30 days depending on book",
                "Extensions available for additional fee",
                "Late returns incur daily charges",
                "Grace period of 2 hours after due time"
            ]
        },
        {
            title: "Book Condition",
            description: "Books should be returned in the same condition as received",
            icon: <Package size={24} />,
            details: [
                "Normal wear and tear is acceptable",
                "No writing, highlighting, or marking",
                "All pages must be intact",
                "Original packaging if provided"
            ]
        },
        {
            title: "Damage Policy",
            description: "Charges apply for damaged or lost books",
            icon: <AlertCircle size={24} />,
            details: [
                "Minor damage: 10-25% of book value",
                "Major damage: 50-75% of book value", 
                "Lost book: 100% replacement cost",
                "Dispute resolution available"
            ]
        },
        {
            title: "Refund Policy",
            description: "Refunds for cancelled orders and service issues",
            icon: <DollarSign size={24} />,
            details: [
                "Full refund if cancelled within 2 hours",
                "Partial refund for early returns",
                "Service fee refund for delivery failures",
                "Processing time: 3-5 business days"
            ]
        }
    ];

    const returnReasons = [
        {
            reason: "Rental Period Complete",
            description: "Normal return at end of rental period",
            fee: "No fee",
            color: "bg-green-500"
        },
        {
            reason: "Early Return",
            description: "Returning before rental period ends",
            fee: "Partial refund available",
            color: "bg-blue-500"
        },
        {
            reason: "Book Defect",
            description: "Book received in poor condition",
            fee: "Full refund + compensation",
            color: "bg-purple-500"
        },
        {
            reason: "Wrong Book",
            description: "Received incorrect book",
            fee: "Free exchange",
            color: "bg-orange-500"
        }
    ];

    const lateReturnFees = [
        { category: "Fiction & Literature", dailyFee: "৳10", maxFee: "৳100" },
        { category: "Academic & Textbooks", dailyFee: "৳20", maxFee: "৳200" },
        { category: "Professional Books", dailyFee: "৳15", maxFee: "৳150" },
        { category: "Children's Books", dailyFee: "৳5", maxFee: "৳50" },
        { category: "Rare & Collectible", dailyFee: "৳50", maxFee: "৳500" }
    ];

    const faqs = [
        {
            question: "Can I return books early?",
            answer: "Yes, you can return books before the rental period ends. Depending on how early you return, you may be eligible for a partial refund of the rental fee."
        },
        {
            question: "What if I lose a book?",
            answer: "If you lose a book, you'll be charged the full replacement cost. We'll help you find the best price for a replacement copy and provide payment options."
        },
        {
            question: "How do I extend my rental period?",
            answer: "You can extend your rental through your account dashboard or by contacting support. Extensions are subject to availability and additional fees."
        },
        {
            question: "What happens if I return a damaged book?",
            answer: "We assess damage on a case-by-case basis. Minor wear is acceptable, but significant damage will incur charges based on the extent of damage and book value."
        }
    ];

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Returns & Refunds
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed">
                        Easy returns, transparent policies, and hassle-free refunds. 
                        Learn everything about returning books and our refund process.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-black text-primary mb-2">Free</h3>
                            <p className="text-base-content/70 text-sm">Return Pickup</p>
                        </div>
                        <div className="p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-black text-primary mb-2">24hrs</h3>
                            <p className="text-base-content/70 text-sm">Processing Time</p>
                        </div>
                        <div className="p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-black text-primary mb-2">99%</h3>
                            <p className="text-base-content/70 text-sm">Successful Returns</p>
                        </div>
                        <div className="p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300">
                            <h3 className="text-3xl font-black text-primary mb-2">3-5</h3>
                            <p className="text-base-content/70 text-sm">Days Refund</p>
                        </div>
                    </div>
                </div>

                {/* Return Process */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">How to Return Books</h2>
                        <p className="text-neutral/70">Simple 4-step process for returning your books</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {returnProcess.map((step, index) => (
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
                                <p className="text-neutral/60 text-sm mb-2">{step.description}</p>
                                <p className="text-xs text-neutral/50">{step.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Return Reasons */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Return Scenarios</h2>
                        <p className="text-neutral/70">Different return situations and their policies</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {returnReasons.map((reason, index) => (
                            <div key={index} className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-6">
                                <div className={`w-12 h-12 ${reason.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                                    <RotateCcw size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-base-content">{reason.reason}</h3>
                                <p className="text-base-content/70 text-sm mb-3">{reason.description}</p>
                                <div className="bg-slate-50 rounded-lg p-3">
                                    <p className="text-xs font-medium text-primary">{reason.fee}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Return Policies */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Return Policies</h2>
                        <p className="text-neutral/70">Detailed policies for different return scenarios</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {returnPolicies.map((policy, index) => (
                            <div key={index} className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 shadow-lg transition-all duration-300 p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        {policy.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{policy.title}</h3>
                                        <p className="text-neutral/60 text-sm">{policy.description}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {policy.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Late Return Fees */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Late Return Fees</h2>
                        <p className="text-neutral/70">Fee structure for late returns by book category</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="text-left font-bold">Book Category</th>
                                        <th className="text-center font-bold">Daily Late Fee</th>
                                        <th className="text-center font-bold">Maximum Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lateReturnFees.map((fee, index) => (
                                        <tr key={index} className="border-b border-slate-100">
                                            <td className="font-medium">{fee.category}</td>
                                            <td className="text-center text-red-600 font-bold">{fee.dailyFee}</td>
                                            <td className="text-center text-red-800 font-bold">{fee.maxFee}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
                        <div className="flex items-center gap-3 mb-3">
                            <AlertCircle size={24} className="text-yellow-600" />
                            <h3 className="text-lg font-bold text-yellow-800">Important Note</h3>
                        </div>
                        <p className="text-yellow-700 text-sm">
                            Late fees are capped at the maximum amount shown above. We provide a 2-hour grace period 
                            after the due time before late fees apply. You'll receive reminder notifications 24 hours 
                            before your return due date.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Return FAQ</h2>
                        <p className="text-neutral/70">Common questions about returns and refunds</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-primary">{faq.question}</h3>
                                <p className="text-neutral/70 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Emergency Returns */}
                <div className="py-16 bg-red-50 rounded-3xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black mb-4 text-red-800">Emergency Returns</h2>
                        <p className="text-red-600 max-w-2xl mx-auto">
                            For urgent return situations like damaged books, lost items, or emergency 
                            situations, contact our emergency support line immediately.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+8801234567892" className="btn btn-error px-8 rounded-full">
                            Emergency Hotline
                        </a>
                        <button className="btn btn-outline btn-error px-8 rounded-full">
                            Emergency Chat
                        </button>
                    </div>
                </div>

                {/* Contact Support */}
                <div className="py-16 text-center">
                    <h2 className="text-3xl font-black mb-6">Need Help with Returns?</h2>
                    <p className="text-neutral/70 mb-8 max-w-2xl mx-auto">
                        Our support team is here to help with any return-related questions or issues.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn btn-primary btn-lg px-8 rounded-full">
                            Schedule Return
                        </button>
                        <button className="btn btn-outline btn-primary btn-lg px-8 rounded-full">
                            Contact Support
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ReturnsPage;