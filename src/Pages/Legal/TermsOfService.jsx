import React from 'react';
import { FileText, Scale, Shield, Users } from 'lucide-react';
import Container from '../../Components/Container';

const TermsOfServicePage = () => {
    const lastUpdated = "January 15, 2025";

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed mb-4">
                        Please read these terms carefully before using Book Courier services. 
                        By using our platform, you agree to these terms and conditions.
                    </p>
                    <p className="text-sm text-neutral/50">
                        Last updated: {lastUpdated}
                    </p>
                </div>

                {/* Coming Soon Notice */}
                <div className="py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-slate-50 rounded-3xl p-16">
                            <FileText size={64} className="text-primary mx-auto mb-6" />
                            <h2 className="text-3xl font-black mb-4">Terms of Service</h2>
                            <p className="text-neutral/70 mb-8 max-w-2xl mx-auto">
                                We're currently finalizing our comprehensive Terms of Service document. 
                                This page will contain detailed information about user rights, responsibilities, 
                                and platform usage guidelines.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <Scale size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">User Rights</h3>
                                    <p className="text-sm text-neutral/60">Your rights and protections as a user</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <Shield size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">Platform Rules</h3>
                                    <p className="text-sm text-neutral/60">Guidelines for using our services</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm">
                                    <Users size={32} className="text-primary mx-auto mb-3" />
                                    <h3 className="font-bold mb-2">Community Standards</h3>
                                    <p className="text-sm text-neutral/60">Expected behavior and conduct</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="btn btn-primary px-8 rounded-full">
                                    Contact Legal Team
                                </button>
                                <button className="btn btn-outline btn-primary px-8 rounded-full">
                                    Get Updates
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Temporary Contact */}
                <div className="py-16 bg-blue-50 rounded-3xl text-center">
                    <h2 className="text-2xl font-black mb-4">Questions About Terms?</h2>
                    <p className="text-neutral/70 mb-6 max-w-2xl mx-auto">
                        If you have questions about our terms of service or need clarification 
                        on any policies, please contact our legal team.
                    </p>
                    <a href="mailto:legal@bookcourier.com" className="btn btn-primary px-8 rounded-full">
                        Contact Legal Team
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default TermsOfServicePage;