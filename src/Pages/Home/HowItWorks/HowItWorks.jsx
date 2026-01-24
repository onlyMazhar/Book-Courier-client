import React from 'react';
import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        { id: 1, icon: <Search />, title: "Find Your Book", desc: "Search through thousands of titles from local libraries." },
        { id: 2, icon: <ShoppingCart />, title: "Easy Order", desc: "Pay securely via Stripe with your preferred card." },
        { id: 3, icon: <Truck />, title: "Fast Delivery", desc: "Our rider picks it up and brings it to your door in 24h." },
        { id: 4, icon: <CheckCircle />, title: "Enjoy Reading", desc: "Start your adventure and return it when you're done." }
    ];

    return (
        <div className="py-24 overflow-hidden">
            <div className="mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-base-content mb-4">How It Works</h2>
                    <p className="text-slate-500">Getting your favorite books has never been this simple.</p>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Animated Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0">
                        <div className="h-full bg-primary w-full animate-pulse"></div>
                    </div>

                    {steps.map((step) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center group w-full">
                            <div className="w-24 h-24 rounded-3xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-slate-200/50">
                                {React.cloneElement(step.icon, { size: 38 })}
                            </div>
                            <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 shadow-lg">
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-slate-500 text-sm px-4 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;