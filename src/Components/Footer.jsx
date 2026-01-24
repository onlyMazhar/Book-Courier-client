import React from 'react';
import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin, 
    Mail, 
    MapPin, 
    Phone, 
    Send,
    BookOpen,
    Users,
    Truck,
    Shield
} from 'lucide-react';
import Container from './Container';
import Logo from './Logo';
import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            icon: <Facebook size={20} />, 
            href: "https://facebook.com/bookcourier", 
            label: "Facebook",
            color: "hover:bg-blue-600"
        },
        { 
            icon: <Twitter size={20} />, 
            href: "https://twitter.com/bookcourier", 
            label: "Twitter",
            color: "hover:bg-sky-500"
        },
        { 
            icon: <Instagram size={20} />, 
            href: "https://instagram.com/bookcourier", 
            label: "Instagram",
            color: "hover:bg-pink-600"
        },
        { 
            icon: <Linkedin size={20} />, 
            href: "https://linkedin.com/company/bookcourier", 
            label: "LinkedIn",
            color: "hover:bg-blue-700"
        }
    ];

    const quickLinks = [
        { to: '/books', label: 'Browse Books' },
        { to: '/how-it-works', label: 'How It Works' },
        { to: '/coverage', label: 'Delivery Areas' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/become-librarian', label: 'Become a Librarian' }
    ];

    const supportLinks = [
        { to: '/help', label: 'Help Center' },
        { to: '/contact', label: 'Contact Us' },
        { to: '/faq', label: 'FAQ' },
        { to: '/shipping', label: 'Shipping Info' },
        { to: '/returns', label: 'Returns & Refunds' }
    ];

    const legalLinks = [
        { to: '/privacy-policy', label: 'Privacy Policy' },
        { to: '/terms-of-service', label: 'Terms of Service' },
        { to: '/cookie-policy', label: 'Cookie Policy' },
        { to: '/refund-policy', label: 'Refund Policy' }
    ];

    const features = [
        { icon: <BookOpen size={20} />, text: "50,000+ Books Available" },
        { icon: <Users size={20} />, text: "500+ Trusted Librarians" },
        { icon: <Truck size={20} />, text: "24-Hour Delivery" },
        { icon: <Shield size={20} />, text: "Secure Payments" }
    ];

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Main Footer Content */}
            <div className="py-16 border-b border-slate-800">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <Logo color="white" />
                            </div>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Connecting readers with local libraries across Dhaka. 
                                Fast delivery, secure payments, and a community of book lovers.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin size={16} className="text-primary flex-shrink-0" />
                                    <span>Sector 7, Uttara, Dhaka 1230, Bangladesh</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone size={16} className="text-primary flex-shrink-0" />
                                    <a href="tel:+8801234567890" className="hover:text-primary transition-colors">
                                        +880 1234 567890
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail size={16} className="text-primary flex-shrink-0" />
                                    <a href="mailto:support@bookcourier.com" className="hover:text-primary transition-colors">
                                        support@bookcourier.com
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 ${social.color}`}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={link.to} 
                                            className="text-slate-400 hover:text-primary transition-colors duration-300 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
                            <ul className="space-y-3">
                                {supportLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={link.to} 
                                            className="text-slate-400 hover:text-primary transition-colors duration-300 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                Subscribe to our newsletter for book recommendations, 
                                exclusive offers, and updates.
                            </p>
                            
                            <form className="mb-6">
                                <div className="flex">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                                        required
                                    />
                                    <button 
                                        type="submit"
                                        className="px-4 py-3 bg-primary hover:bg-primary-focus text-white rounded-r-lg transition-colors duration-300"
                                        aria-label="Subscribe to newsletter"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>

                            {/* Features */}
                            <div className="space-y-2">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-xs text-slate-500">
                                        <span className="text-primary">{feature.icon}</span>
                                        <span>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Bottom Bar */}
            <div className="py-6 bg-slate-950">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-slate-500 text-sm">
                            © {currentYear} Book Courier. All rights reserved. 
                            <span className="hidden sm:inline"> Made with ❤️ for book lovers.</span>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap items-center gap-6 text-xs">
                            {legalLinks.map((link, index) => (
                                <Link 
                                    key={index}
                                    to={link.to} 
                                    className="text-slate-500 hover:text-primary transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary-focus text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
                aria-label="Back to top"
            >
                <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 10l7-7m0 0l7 7m-7-7v18" 
                    />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;