import React from 'react';
import { BookOpen, DollarSign, Users, TrendingUp, CheckCircle, Star, ArrowRight } from 'lucide-react';
import Container from '../../Components/Container';

const BecomeLibrarianPage = () => {
    const benefits = [
        {
            icon: <DollarSign size={32} />,
            title: "Earn Extra Income",
            description: "Make ৳5,000 - ৳20,000 per month by sharing your book collection",
            details: "Turn your unused books into a steady income stream"
        },
        {
            icon: <Users size={32} />,
            title: "Build Community",
            description: "Connect with fellow book lovers and help spread knowledge",
            details: "Be part of Dhaka's largest book-sharing community"
        },
        {
            icon: <BookOpen size={32} />,
            title: "Share Knowledge",
            description: "Help others access books they need for education and entertainment",
            details: "Make a positive impact on literacy and learning"
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Flexible Schedule",
            description: "Work on your own terms with complete flexibility",
            details: "No fixed hours, work when it suits you"
        }
    ];

    const requirements = [
        "Own at least 50 books in good condition",
        "Reliable internet connection for managing listings",
        "Available for book handovers during business hours",
        "Commitment to maintaining book quality",
        "Basic smartphone for communication and updates"
    ];

    const steps = [
        {
            step: 1,
            title: "Apply Online",
            description: "Fill out our simple application form with your details and book collection information."
        },
        {
            step: 2,
            title: "Book Verification",
            description: "Our team will visit to verify your books and help you set up your digital catalog."
        },
        {
            step: 3,
            title: "Training & Setup",
            description: "Get trained on our platform and learn best practices for book management."
        },
        {
            step: 4,
            title: "Start Earning",
            description: "Your books go live on our platform and you start receiving rental requests."
        }
    ];

    // const testimonials = [
    //     {
    //         name: "Rashida Begum",
    //         location: "Dhanmondi",
    //         earnings: "৳12,000/month",
    //         books: "150 books",
    //         quote: "I never thought my old textbooks could earn me this much! It's been 8 months and I'm consistently making good money.",
    //         rating: 5
    //     },
    //     {
    //         name: "Ahmed Hassan",
    //         location: "Gulshan",
    //         earnings: "৳18,500/month",
    //         books: "280 books",
    //         quote: "Being a librarian on Book Courier has been amazing. The platform is easy to use and the support team is very helpful.",
    //         rating: 5
    //     },
    //     {
    //         name: "Fatima Khan",
    //         location: "Uttara",
    //         earnings: "৳8,200/month",
    //         books: "95 books",
    //         quote: "Perfect side income! I work full-time but this gives me extra money without much effort. Highly recommend!",
    //         rating: 5
    //     }
    // ];

    const faqs = [
        {
            question: "How much can I earn as a librarian?",
            answer: "Earnings vary based on your collection size and book demand. Beginners typically earn ৳5,000-8,000/month, while active librarians can earn ৳12,000-20,000/month."
        },
        {
            question: "What types of books are in demand?",
            answer: "Academic textbooks, professional development books, popular fiction, and children's books are most in demand. Rare and specialized books also command premium rates."
        },
        {
            question: "Do I need to handle delivery myself?",
            answer: "No! We handle all pickup and delivery. You just need to be available when our team comes to collect books from renters."
        },
        {
            question: "What if my book gets damaged?",
            answer: "We have insurance coverage for all books. If a book gets damaged during rental, you'll be compensated based on the book's condition and value."
        },
        {
            question: "How do I set rental prices?",
            answer: "We provide pricing guidelines based on book category, condition, and market demand. You have the flexibility to adjust prices within recommended ranges."
        }
    ];

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Become a Librarian
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed mb-8">
                        Turn your book collection into a source of income. Join 500+ librarians 
                        who are earning money while helping their community access great books.
                    </p>
                    <button className="btn btn-primary btn-lg px-12 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                        Apply Now
                    </button>
                </div>

                {/* Benefits Section */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Why Become a Librarian?</h2>
                        <p className="text-neutral/70">Join a community that values knowledge sharing and earns while doing it</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-neutral/70 mb-2">{benefit.description}</p>
                                <p className="text-sm text-neutral/50">{benefit.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Earnings Potential */}
                {/* <div className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Earnings Potential</h2>
                        <p className="text-neutral/70">See how much you could earn based on your collection size</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                            <div className="text-4xl font-black text-green-600 mb-2">৳5K - ৳8K</div>
                            <h3 className="text-xl font-bold mb-2">Starter</h3>
                            <p className="text-neutral/60 mb-4">50-100 books</p>
                            <ul className="text-sm text-neutral/70 space-y-1">
                                <li>20-30 rentals/month</li>
                                <li>Perfect for beginners</li>
                                <li>Flexible commitment</li>
                            </ul>
                        </div>

                        <div className="text-center p-8 bg-white rounded-2xl shadow-xl border-2 border-primary">
                            <div className="text-4xl font-black text-blue-600 mb-2">৳8K - ৳12K</div>
                            <h3 className="text-xl font-bold mb-2">Active</h3>
                            <p className="text-neutral/60 mb-4">100-200 books</p>
                            <ul className="text-sm text-neutral/70 space-y-1">
                                <li>40-60 rentals/month</li>
                                <li>Steady income stream</li>
                                <li>Growing community</li>
                            </ul>
                        </div>

                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                            <div className="text-4xl font-black text-purple-600 mb-2">৳12K - ৳20K</div>
                            <h3 className="text-xl font-bold mb-2">Expert</h3>
                            <p className="text-neutral/60 mb-4">200+ books</p>
                            <ul className="text-sm text-neutral/70 space-y-1">
                                <li>80+ rentals/month</li>
                                <li>Premium earnings</li>
                                <li>Top-tier librarian</li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                {/* Requirements */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Requirements</h2>
                        <p className="text-neutral/70">Simple requirements to get started as a librarian</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-4">
                            {requirements.map((requirement, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                                    <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                                    <span>{requirement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">How to Get Started</h2>
                        <p className="text-neutral/70">Simple 4-step process to become a librarian</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                                    <span className="text-2xl font-bold">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-neutral/60 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                {/* <div className="py-16 bg-slate-50 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Success Stories</h2>
                        <p className="text-neutral/70">Hear from our successful librarians</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-neutral/70 italic mb-4">"{testimonial.quote}"</p>
                                <div className="border-t pt-4">
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-neutral/60">{testimonial.location}</p>
                                    <div className="flex justify-between mt-2 text-sm">
                                        <span className="text-green-600 font-bold">{testimonial.earnings}</span>
                                        <span className="text-neutral/60">{testimonial.books}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* FAQ */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Frequently Asked Questions</h2>
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
                {/* <div className="py-16 text-center bg-gradient-to-br from-primary to-primary-focus text-white rounded-3xl">
                    <h2 className="text-3xl font-black mb-6">Ready to Start Earning?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Join hundreds of librarians who are already earning money while helping their community. 
                        Apply today and start your journey!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn btn-secondary btn-lg px-12 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                            Apply Now
                        </button>
                        <button className="btn btn-outline btn-white btn-lg px-8 rounded-full">
                            Learn More
                        </button>
                    </div>
                </div> */}
            </Container>
        </div>
    );
};

export default BecomeLibrarianPage;