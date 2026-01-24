import React from 'react';
import { DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Container from '../../Components/Container';

const RefundPolicyPage = () => {
    const lastUpdated = "January 15, 2025";

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Refund Policy
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed mb-4">
                        Understand our refund policy for book rentals, delivery fees, 
                        and other services on Book Courier.
                    </p>
                    <p className="text-sm text-neutral/50">
                        Last updated: {lastUpdated}
                    </p>
                </div>

                {/* Coming Soon Notice */}
                <div className="py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-slate-50 rounded-3xl p-16">
                            <DollarSign size={64} className="text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-black mb-4">Refund Policy</h2>
                            <p className="text-neutral/70 mb-8 max-w-2xl mx-auto">
                                We're finalizing our comprehensive refund policy that will cover all scenarios 
                                including rental cancellations, service issues, and payment disputes.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <Clock size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">Refund Timeline</h3>
                                    <p className="text-sm text-neutral/60">Processing times for different refund types</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <CheckCircle size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">Eligible Scenarios</h3>
                                    <p className="text-sm text-neutral/60">When refunds are available</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <AlertCircle size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">Refund Process</h3>
                                    <p className="text-sm text-neutral/60">How to request and track refunds</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="btn btn-primary px-8 rounded-full">
                                    Request Refund
                                </button>
                                <button className="btn btn-outline btn-primary px-8 rounded-full">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Refund Info */}
                <div className="py-16 bg-green-50 rounded-3xl">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-8 text-center">Current Refund Guidelines</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-green-600">Full Refunds Available</h3>
                                <ul className="space-y-2 text-sm text-neutral/70">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-green-500" />
                                        Order cancelled within 2 hours
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-green-500" />
                                        Book not delivered as promised
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-green-500" />
                                        Wrong book delivered
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-green-500" />
                                        Book condition not as described
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-blue-600">Partial Refunds Available</h3>
                                <ul className="space-y-2 text-sm text-neutral/70">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-blue-500" />
                                        Early return of books
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-blue-500" />
                                        Service interruptions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-blue-500" />
                                        Delivery delays beyond promised time
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-blue-500" />
                                        Subscription downgrades
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact for Refunds */}
                <div className="py-16 text-center">
                    <h2 className="text-2xl font-black mb-4">Need a Refund?</h2>
                    <p className="text-neutral/70 mb-6 max-w-2xl mx-auto">
                        Contact our support team to request a refund or get help with billing issues. 
                        We typically process refunds within 3-5 business days.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:billing@bookcourier.com" className="btn btn-primary px-8 rounded-full">
                            Request Refund
                        </a>
                        <button className="btn btn-outline btn-primary px-8 rounded-full">
                            Live Chat Support
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RefundPolicyPage;