import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does Book Courier work?",
            answer: "Book Courier connects you with local libraries and librarians across Dhaka. Simply browse our collection, place an order, and we'll deliver your chosen books to your doorstep within 24 hours. You can keep the books for the agreed rental period and return them when done."
        },
        {
            question: "What are the delivery charges?",
            answer: "Delivery is free for orders above ৳500 within Dhaka city. For orders below ৳500, we charge a flat delivery fee of ৳50. We offer same-day delivery for most areas and next-day delivery for remote locations."
        },
        {
            question: "How long can I keep the books?",
            answer: "The rental period varies by book and librarian, typically ranging from 7 to 30 days. You can see the available rental periods when browsing books. Extensions are possible for an additional fee, subject to availability."
        },
        {
            question: "What if a book gets damaged?",
            answer: "We understand accidents happen. Minor wear and tear is acceptable. For significant damage, you'll be charged a replacement fee based on the book's condition and value. We recommend handling books with care and keeping them in a safe place."
        },
        {
            question: "Can I become a librarian on the platform?",
            answer: "Absolutely! If you have a collection of books you'd like to share, you can register as a librarian. We'll verify your books, help you set rental prices, and handle all the logistics. It's a great way to earn money from your personal library."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit and debit cards through Stripe, mobile banking (bKash, Nagad, Rocket), and cash on delivery. All online payments are secured with bank-level encryption for your safety."
        },
        {
            question: "Do you deliver outside Dhaka?",
            answer: "Currently, we only deliver within Dhaka city and its surrounding areas. We're working on expanding to other major cities in Bangladesh. Subscribe to our newsletter to be notified when we launch in your area."
        },
        {
            question: "What if the book I want isn't available?",
            answer: "Use our book request feature! Tell us the title and author, and we'll search our network of librarians to find it for you. We'll notify you within 48 hours if we can source the book and arrange delivery."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="py-20">
            <div className="mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                        <HelpCircle size={18} />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-base-content mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-white max-w-2xl mx-auto text-lg">
                        Find answers to common questions about our book delivery service, 
                        rental policies, and how to get started.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-base-200 transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-bold text-base-content pr-4">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown 
                                        size={24} 
                                        className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="px-6 pb-6">
                                        <div className="h-px bg-base-300 mb-4"></div>
                                        <p className="text-base-content/70 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support */}
                {/* <div className="mt-16 text-center">
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-base-content/60 mb-6">
                            Our support team is here to help you 24/7. Get in touch and we'll 
                            respond as quickly as possible.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn btn-primary px-8 rounded-full">
                                Live Chat
                            </button>
                            <button className="btn btn-outline btn-primary px-8 rounded-full">
                                Email Support
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default FAQ;