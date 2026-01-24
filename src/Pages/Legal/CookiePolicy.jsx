import React from 'react';
import { Cookie, Settings, Eye, Shield } from 'lucide-react';
import Container from '../../Components/Container';

const CookiePolicyPage = () => {
    const lastUpdated = "January 15, 2025";

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Cookie Policy
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed mb-4">
                        Learn about how we use cookies and similar technologies to improve 
                        your experience on Book Courier.
                    </p>
                    <p className="text-sm text-neutral/50">
                        Last updated: {lastUpdated}
                    </p>
                </div>

                {/* Coming Soon Notice */}
                <div className="py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-slate-50 rounded-3xl p-16">
                            <Cookie size={64} className="text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-black mb-4">Cookie Policy</h2>
                            <p className="text-neutral/70 mb-8 max-w-2xl mx-auto">
                                We're preparing a detailed Cookie Policy that will explain how we use cookies, 
                                web beacons, and similar technologies to enhance your browsing experience.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <Settings size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">Cookie Types</h3>
                                    <p className="text-sm text-neutral/60">Essential, functional, and analytics cookies</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <Eye size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">Your Choices</h3>
                                    <p className="text-sm text-neutral/60">How to manage cookie preferences</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <Shield size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">Privacy Protection</h3>
                                    <p className="text-sm text-neutral/60">How we protect your data</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="btn btn-primary px-8 rounded-full">
                                    Manage Cookies
                                </button>
                                <button className="btn btn-outline btn-primary px-8 rounded-full">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Current Cookie Usage */}
                <div className="py-16 bg-amber-50 rounded-3xl">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-8 text-center">Current Cookie Usage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-primary">Essential Cookies</h3>
                                <p className="text-neutral/70 text-sm mb-3">
                                    Required for basic website functionality including user authentication and security.
                                </p>
                                <p className="text-xs text-neutral/50">These cannot be disabled</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                <h3 className="text-lg font-bold mb-3 text-primary">Analytics Cookies</h3>
                                <p className="text-neutral/70 text-sm mb-3">
                                    Help us understand how visitors interact with our website to improve user experience.
                                </p>
                                <p className="text-xs text-neutral/50">Can be disabled in browser settings</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="py-16 text-center">
                    <h2 className="text-2xl font-black mb-4">Questions About Cookies?</h2>
                    <p className="text-neutral/70 mb-6 max-w-2xl mx-auto">
                        If you have questions about our use of cookies or need help managing 
                        your cookie preferences, we're here to help.
                    </p>
                    <a href="mailto:privacy@bookcourier.com" className="btn btn-primary px-8 rounded-full">
                        Contact Privacy Team
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default CookiePolicyPage;