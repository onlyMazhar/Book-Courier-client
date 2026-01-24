import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, BookOpen, Truck, CreditCard, Users, RotateCcw } from 'lucide-react';
import Container from '../../Components/Container';

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Questions', icon: <HelpCircle size={20} /> },
        { id: 'ordering', name: 'Ordering', icon: <BookOpen size={20} /> },
        { id: 'delivery', name: 'Delivery', icon: <Truck size={20} /> },
        { id: 'payment', name: 'Payment', icon: <CreditCard size={20} /> },
        { id: 'account', name: 'Account', icon: <Users size={20} /> },
        { id: 'returns', name: 'Returns', icon: <RotateCcw size={20} /> }
    ];

    const faqs = [
        {
            id: 1,
            category: 'ordering',
            question: "How do I place an order on Book Courier?",
            answer: "Placing an order is simple! Browse our collection, select the books you want, add them to your cart, choose your delivery address and time slot, then complete payment. You'll receive a confirmation email with tracking details.",
            popular: true
        },
        {
            id: 2,
            category: 'delivery',
            question: "What are your delivery areas and times?",
            answer: "We deliver across Dhaka city in three zones: Zone A (Central Dhaka) - 12-18 hours, Zone B (Extended Areas) - 18-24 hours, and Zone C (Outer Areas) - 24-48 hours. We operate 7 days a week from 9 AM to 9 PM.",
            popular: true
        },
        {
            id: 3,
            category: 'payment',
            question: "What payment methods do you accept?",
            answer: "We accept all major credit and debit cards through Stripe, mobile banking (bKash, Nagad, Rocket), and cash on delivery. All online payments are secured with bank-level encryption.",
            popular: true
        },
        {
            id: 4,
            category: 'returns',
            question: "How do I return books?",
            answer: "Returning books is easy! Schedule a pickup through your account or call our support team. We'll collect the books from your address at no extra charge. Make sure books are in the same condition as received.",
            popular: true
        },
        {
            id: 5,
            category: 'account',
            question: "How do I create an account?",
            answer: "Click 'Sign Up' on our homepage, fill in your details, verify your email address, and you're ready to start browsing! You can also sign up using your Google or Facebook account for faster registration.",
            popular: false
        },
        {
            id: 6,
            category: 'ordering',
            question: "Can I modify or cancel my order?",
            answer: "You can modify or cancel your order within 2 hours of placing it, provided it hasn't been picked up from the librarian. Contact our support team immediately for assistance with order changes.",
            popular: false
        },
        {
            id: 7,
            category: 'delivery',
            question: "Do you deliver outside Dhaka?",
            answer: "Currently, we only deliver within Dhaka city and its immediate surrounding areas. We're working on expanding to other major cities in Bangladesh. Subscribe to our newsletter for updates.",
            popular: false
        },
        {
            id: 8,
            category: 'payment',
            question: "Is my payment information secure?",
            answer: "Absolutely! We use Stripe for payment processing, which provides bank-level security. We never store your complete card details on our servers. All transactions are encrypted and secure.",
            popular: false
        },
        {
            id: 9,
            category: 'returns',
            question: "What if I damage a book?",
            answer: "Minor wear and tear is acceptable. For significant damage, you'll be charged a replacement fee based on the book's condition and value. We recommend handling books with care and keeping them in a safe place.",
            popular: false
        },
        {
            id: 10,
            category: 'account',
            question: "How do I become a librarian?",
            answer: "To become a librarian, you need at least 50 books in good condition. Apply through our 'Become a Librarian' page, and our team will verify your collection and help you get started earning money from your books.",
            popular: true
        },
        {
            id: 11,
            category: 'ordering',
            question: "What book conditions do you offer?",
            answer: "We rate books as Excellent (like new), Very Good (minor wear), Good (some wear but readable), and Fair (significant wear but complete). All conditions are clearly marked on each book listing.",
            popular: false
        },
        {
            id: 12,
            category: 'delivery',
            question: "Can I track my delivery?",
            answer: "Yes! Once your order is confirmed, you'll receive tracking information via SMS and email. You can also track your order in real-time through your account dashboard.",
            popular: false
        },
        {
            id: 13,
            category: 'payment',
            question: "What happens if my payment fails?",
            answer: "If your payment fails, your order will be held for 24 hours. You can retry payment through your account or contact support for assistance. We'll help resolve any payment issues quickly.",
            popular: false
        },
        {
            id: 14,
            category: 'returns',
            question: "Can I extend my rental period?",
            answer: "Yes, you can extend your rental period if the book is available. Extensions are subject to additional fees and must be requested before the original due date through your account or by contacting support.",
            popular: false
        },
        {
            id: 15,
            category: 'account',
            question: "How do I reset my password?",
            answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
            popular: false
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const filteredFAQs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const popularFAQs = faqs.filter(faq => faq.popular);

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed mb-8">
                        Find quick answers to common questions about Book Courier. 
                        Can't find what you're looking for? Contact our support team.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40" />
                        <input
                            type="text"
                            placeholder="Search frequently asked questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-base-300 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                        />
                    </div>
                </div>

                {/* Popular Questions */}
                <div className="py-16 bg-base-200 rounded-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4 text-base-content">Most Popular Questions</h2>
                        <p className="text-base-content/70">Quick answers to our most frequently asked questions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {popularFAQs.slice(0, 6).map((faq) => (
                            <div key={faq.id} className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-bold uppercase">
                                        {faq.category}
                                    </span>
                                    <span className="bg-warning/20 text-warning px-2 py-1 rounded-full text-xs font-bold">
                                        Popular
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-primary">
                                    {faq.question}
                                </h3>
                                <p className="text-base-content/70 text-sm leading-relaxed">
                                    {faq.answer.substring(0, 120)}...
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Browse by Category</h2>
                        <p className="text-base-content/70">Find answers organized by topic</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                                    selectedCategory === category.id
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-base-200 text-base-content/70 hover:bg-base-300'
                                }`}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {filteredFAQs.map((faq, index) => (
                                <div 
                                    key={faq.id}
                                    className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full p-6 text-left flex items-center justify-between hover:bg-base-200 transition-colors duration-200"
                                    >
                                        <div className="flex-1 pr-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-bold uppercase">
                                                    {faq.category}
                                                </span>
                                                {faq.popular && (
                                                    <span className="bg-warning/20 text-warning px-2 py-1 rounded-full text-xs font-bold">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-bold text-base-content">
                                                {faq.question}
                                            </h3>
                                        </div>
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

                        {filteredFAQs.length === 0 && (
                            <div className="text-center py-12">
                                <HelpCircle size={48} className="text-base-content/30 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-base-content">No questions found</h3>
                                <p className="text-base-content/60">
                                    Try adjusting your search or browse different categories.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Still Need Help */}
                <div className="py-16 bg-primary/10 rounded-3xl text-center">
                    <h2 className="text-3xl font-black mb-4 text-base-content">Still Have Questions?</h2>
                    <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
                        Can't find the answer you're looking for? Our support team is here to help 
                        you with any questions or concerns.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn btn-primary btn-lg px-8 rounded-full">
                            Contact Support
                        </button>
                        <button className="btn btn-outline btn-primary btn-lg px-8 rounded-full">
                            Live Chat
                        </button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-3xl font-black text-primary mb-2">24/7</h3>
                            <p className="text-base-content/60 text-sm">Support Available</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-primary mb-2">2hrs</h3>
                            <p className="text-base-content/60 text-sm">Average Response</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-primary mb-2">99%</h3>
                            <p className="text-base-content/60 text-sm">Issues Resolved</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-primary mb-2">4.9/5</h3>
                            <p className="text-base-content/60 text-sm">Support Rating</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FAQPage;