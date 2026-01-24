import React from 'react';
import { ArrowRight, BookOpen, Users, Truck, Star } from 'lucide-react';
import { Link } from 'react-router';

const CallToAction = () => {
    const quickStats = [
        { icon: <BookOpen size={24} />, value: "50K+", label: "Books Available" },
        { icon: <Users size={24} />, value: "500+", label: "Active Librarians" },
        { icon: <Truck size={24} />, value: "24hrs", label: "Delivery Time" },
        { icon: <Star size={24} />, value: "4.9/5", label: "Customer Rating" }
    ];

    return (
        <div className="py-20 bg-base-100 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Main CTA Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-base-content">
                            Ready to Start Your
                            <span className="block text-primary">Reading Journey?</span>
                        </h2>
                        <p className="text-base-content/70 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                            Join thousands of book lovers who trust Book Courier for fast, reliable delivery 
                            of their favorite reads. Your next great adventure is just a click away.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                            <Link 
                                to="/books" 
                                className="btn btn-primary btn-lg px-12 rounded-full shadow-xl hover:scale-105 transition-all duration-300 gap-3"
                            >
                                Browse Books
                                <ArrowRight size={20} />
                            </Link>
                            <Link 
                                to="/register" 
                                className="btn btn-outline btn-secondary btn-lg px-12 rounded-full hover:scale-105 transition-all duration-300"
                            >
                                Join as Librarian
                            </Link>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            {quickStats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-base-200 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-base-300">
                                        <div className="text-primary">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-primary mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-base-content/60 text-sm font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Two-Column CTA */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* For Readers */}
                        <div className="bg-base-200 backdrop-blur-sm rounded-3xl p-8 border border-base-300 hover:bg-base-300 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-base-content">For Book Lovers</h3>
                            <p className="text-base-content/70 mb-6 leading-relaxed">
                                Discover thousands of books from local libraries. Get same-day delivery, 
                                competitive prices, and access to rare finds you won't get anywhere else.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-base-content">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Browse 50,000+ books across all genres</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-base-content">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Same-day delivery across Dhaka</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-base-content">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Secure payments & easy returns</span>
                                </li>
                            </ul>
                            <Link 
                                to="/books" 
                                className="btn btn-primary w-full rounded-2xl group-hover:scale-105 transition-transform"
                            >
                                Start Reading Today
                            </Link>
                        </div>

                        {/* For Librarians */}
                        <div className="bg-base-200 backdrop-blur-sm rounded-3xl p-8 border border-base-300 hover:bg-base-300 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-base-content">For Librarians</h3>
                            <p className="text-base-content/70 mb-6 leading-relaxed">
                                Turn your book collection into a source of income. Join our network of 
                                local librarians and help build the city's largest decentralized library.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-base-content">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Earn money from your book collection</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-base-content">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>We handle delivery & customer service</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-base-content">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>Set your own rental prices</span>
                                </li>
                            </ul>
                            <Link 
                                to="/register" 
                                className="btn btn-secondary w-full rounded-2xl group-hover:scale-105 transition-transform"
                            >
                                Become a Librarian
                            </Link>
                        </div>
                    </div>

                    {/* Final Message */}
                    {/* <div className="text-center mt-16 pt-16 border-t border-base-300">
                        <p className="text-base-content/60 text-lg">
                            Join the reading revolution. 
                            <span className="text-primary font-semibold"> Book Courier</span> - 
                            Where every book finds its reader.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CallToAction;