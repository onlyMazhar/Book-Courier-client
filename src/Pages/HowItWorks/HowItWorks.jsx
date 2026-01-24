import React from 'react';
import { Search, ShoppingCart, Truck, CheckCircle, BookOpen, Users, CreditCard, RotateCcw } from 'lucide-react';
import Container from '../../Components/Container';

const HowItWorksPage = () => {
    const steps = [
        {
            id: 1,
            icon: <Search size={48} />,
            title: "Browse & Search",
            description: "Explore our vast collection of books from local libraries across Dhaka",
            details: [
                "Search by title, author, or genre",
                "Filter by availability and location",
                "Read reviews and ratings",
                "Check book condition and rental period"
            ]
        },
        {
            id: 2,
            icon: <ShoppingCart size={48} />,
            title: "Select & Order",
            description: "Choose your books and place your order with secure payment",
            details: [
                "Add books to your cart",
                "Choose rental duration",
                "Select delivery address",
                "Pay securely via Stripe or mobile banking"
            ]
        },
        {
            id: 3,
            icon: <Truck size={48} />,
            title: "Fast Delivery",
            description: "Our delivery team brings your books to your doorstep within 24 hours",
            details: [
                "Same-day delivery in most areas",
                "Real-time tracking updates",
                "SMS notifications",
                "Contactless delivery options"
            ]
        },
        {
            id: 4,
            icon: <CheckCircle size={48} />,
            title: "Read & Return",
            description: "Enjoy your books and return them when you're done",
            details: [
                "Keep books for agreed rental period",
                "Request extensions if needed",
                "Schedule return pickup",
                "Rate and review your experience"
            ]
        }
    ];

    const features = [
        {
            icon: <BookOpen size={32} />,
            title: "Vast Collection",
            description: "Access to 50,000+ books from 500+ local librarians"
        },
        {
            icon: <Users size={32} />,
            title: "Trusted Network",
            description: "All librarians are verified and books are quality-checked"
        },
        {
            icon: <CreditCard size={32} />,
            title: "Secure Payments",
            description: "Multiple payment options with bank-level security"
        },
        {
            icon: <RotateCcw size={32} />,
            title: "Easy Returns",
            description: "Hassle-free return process with free pickup service"
        }
    ];

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        How Book Courier Works
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed">
                        Getting your favorite books delivered has never been easier. 
                        Follow these simple steps to start your reading journey.
                    </p>
                </div>

                {/* Steps Section */}
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex gap-6">
                                {/* Step Number & Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white mb-4">
                                        {step.icon}
                                    </div>
                                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-neutral/70 mb-4 leading-relaxed">
                                        {step.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Why Choose Book Courier?</h2>
                        <p className="text-neutral/70">Experience the best book delivery service in Dhaka</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-neutral/60 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                {/* <div className="py-16 text-center">
                    <h2 className="text-3xl font-black mb-6">Ready to Get Started?</h2>
                    <p className="text-neutral/70 mb-8 max-w-2xl mx-auto">
                        Join thousands of book lovers who trust Book Courier for their reading needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn btn-primary btn-lg px-8 rounded-full">
                            Browse Books
                        </button>
                        <button className="btn btn-outline btn-primary btn-lg px-8 rounded-full">
                            Become a Librarian
                        </button>
                    </div>
                </div> */}
            </Container>
        </div>
    );
};

export default HowItWorksPage;