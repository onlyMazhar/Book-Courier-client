import React from 'react';
import { MapPin, Clock, Truck, CheckCircle } from 'lucide-react';
import Container from '../../Components/Container';
import CoverageMap from '../Home/Coverage/CoverageMap';

const CoveragePage = () => {
    const deliveryZones = [
        {
            zone: "Zone A - Central Dhaka",
            areas: ["Dhanmondi", "Gulshan", "Banani", "Uttara", "Mohammadpur", "Farmgate"],
            deliveryTime: "12-18 hours",
            fee: "Free delivery",
            color: "bg-green-500"
        },
        {
            zone: "Zone B - Extended Areas",
            areas: ["Mirpur", "Bashundhara", "Badda", "Rampura", "Tejgaon", "Wari"],
            deliveryTime: "18-24 hours",
            fee: "৳30 delivery fee",
            color: "bg-blue-500"
        },
        {
            zone: "Zone C - Outer Areas",
            areas: ["Savar", "Keraniganj", "Narayanganj", "Gazipur", "Tongi", "Demra"],
            deliveryTime: "24-48 hours",
            fee: "৳50 delivery fee",
            color: "bg-orange-500"
        }
    ];

    const stats = [
        { number: "75+", label: "Delivery Points", icon: <MapPin size={24} /> },
        { number: "18hrs", label: "Average Delivery", icon: <Clock size={24} /> },
        { number: "99.8%", label: "Success Rate", icon: <CheckCircle size={24} /> },
        { number: "100+", label: "Active Riders", icon: <Truck size={24} /> }
    ];

    const faqs = [
        {
            question: "Do you deliver outside Dhaka?",
            answer: "Currently, we only deliver within Dhaka city and its immediate surrounding areas. We're working on expanding to other major cities in Bangladesh."
        },
        {
            question: "What are your delivery hours?",
            answer: "We deliver 7 days a week from 9 AM to 9 PM. Emergency deliveries can be arranged for medical or academic books with additional charges."
        },
        {
            question: "How do I know if my area is covered?",
            answer: "Check our interactive map above or enter your postal code during checkout. If your area isn't covered, you'll be notified before payment."
        },
        {
            question: "Can I schedule a specific delivery time?",
            answer: "Yes! You can choose from available time slots during checkout. We offer morning (9 AM - 1 PM), afternoon (1 PM - 6 PM), and evening (6 PM - 9 PM) slots."
        }
    ];

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Delivery Coverage
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed">
                        We deliver books across Dhaka city with fast, reliable service. 
                        Check if your area is covered and see our delivery zones.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                                {stat.icon}
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-1">{stat.number}</h3>
                            <p className="text-sm text-neutral/60 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Interactive Map */}
                <div className="mb-16">
                    <CoverageMap />
                </div>

                {/* Delivery Zones */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Delivery Zones & Timing</h2>
                        <p className="text-neutral/70">Different areas have different delivery times and fees</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {deliveryZones.map((zone, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className={`${zone.color} text-white p-6`}>
                                    <h3 className="text-xl font-bold mb-2">{zone.zone}</h3>
                                    <div className="flex items-center gap-2 text-sm opacity-90">
                                        <Clock size={16} />
                                        <span>{zone.deliveryTime}</span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="mb-4">
                                        <p className="font-semibold text-primary mb-2">{zone.fee}</p>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <p className="font-medium text-sm text-neutral/80 mb-3">Covered Areas:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {zone.areas.map((area, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium">
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

                {/* How to Check Coverage */}
                <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">How to Check if We Deliver to You</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Enter Your Address</h3>
                            <p className="text-neutral/60 text-sm">
                                During checkout, enter your complete delivery address including area and postal code.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Instant Verification</h3>
                            <p className="text-neutral/60 text-sm">
                                Our system will instantly check if your area is covered and show delivery options.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Choose Time Slot</h3>
                            <p className="text-neutral/60 text-sm">
                                Select your preferred delivery time slot and complete your order.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Delivery FAQ</h2>
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

                {/* CTA Section */}
                {/* <div className="py-16 text-center">
                    <h2 className="text-3xl font-black mb-6">Ready to Order?</h2>
                    <p className="text-neutral/70 mb-8 max-w-2xl mx-auto">
                        Check if we deliver to your area and start browsing our collection of books.
                    </p>
                    <button className="btn btn-primary btn-lg px-8 rounded-full">
                        Browse Books Now
                    </button>
                </div> */}
            </Container>
        </div>
    );
};

export default CoveragePage;