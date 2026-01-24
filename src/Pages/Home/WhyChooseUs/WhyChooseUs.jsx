import React from 'react';
import { Truck, ShieldCheck, Library, Wallet, Clock, Heart } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: <Truck className="text-primary" size={32} />,
            title: "Lightning Fast Delivery",
            description: "Get your favorite books delivered to your doorstep within 24 hours across Dhaka city."
        },
        {
            id: 2,
            icon: <ShieldCheck className="text-success" size={32} />,
            title: "Secure Payments",
            description: "Enjoy peace of mind with our Stripe-integrated secure payment gateway for every order."
        },
        {
            id: 3,
            icon: <Library className="text-secondary" size={32} />,
            title: "Verified Libraries",
            description: "We partner with trusted local libraries and librarians to ensure authentic and quality books."
        },
        {
            id: 4,
            icon: <Wallet className="text-accent" size={32} />,
            title: "Affordable Rates",
            description: "No hidden costs. Get access to a massive collection of books at the most competitive prices."
        },
        {
            id: 5,
            icon: <Clock className="text-warning" size={32} />,
            title: "Easy Returns",
            description: "Not satisfied with the condition? Our hassle-free return policy ensures you only keep what you love."
        },
        {
            id: 6,
            icon: <Heart className="text-error" size={32} />,
            title: "Reader Community",
            description: "Join a growing community of book lovers and share your passion for reading with others."
        }
    ];

    return (
        <div className="py-20">
            <div className="  mx-auto px-4">

                {/* Header  */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
                        Experience the Best
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-base-content mb-6">
                        Why Readers Love Book Courier
                    </h3>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group p-8 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300 shadow-sm">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-base-content/60 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA (Call to Action) */}
                <div className="mt-16 p-8 md:p-12 rounded-4xl bg-neutral text-neutral-content flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready to start your reading journey?</h4>
                        <p className="opacity-70">Browse thousands of books from local libraries today.</p>
                    </div>
                    <button className="btn btn-primary btn-lg px-10 rounded-full shadow-lg hover:scale-105 transition-transform">
                        Explore Books
                    </button>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;