import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { RiTwitterXFill, RiSendPlaneFill } from 'react-icons/ri';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from './Container';
import Logo from './Logo';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-slate-300">
            {/* 1. BRAND & SOCIAL TOP BAR */}
            <div className="border-b border-slate-800/50 py-10">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <Logo color="white" />
                            <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
                                Connecting readers with local libraries, one delivery at a time.
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center md:items-end gap-4">
                            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Join our community</p>
                            <div className="flex gap-3">
                                {[
                                    { icon: <FaFacebookF />, link: "#" },
                                    { icon: <RiTwitterXFill />, link: "#" },
                                    { icon: <FaInstagram />, link: "#" },
                                    { icon: <FaLinkedinIn />, link: "#" }
                                ].map((social, i) => (
                                    <a key={i} href={social.link} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 2. MAIN LINKS SECTION */}
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Column 1: Popular Search */}
                        <nav className="flex flex-col gap-4">
                            <h6 className="text-white font-bold text-lg mb-2">Popular Search</h6>
                            <Link to="/books" className="hover:text-primary transition-colors text-sm">Latest Books for Sale</Link>
                            <Link to="/register" className="hover:text-primary transition-colors text-sm">Become a Librarian</Link>
                            <a href="#" className="hover:text-primary transition-colors text-sm">Books by Category</a>
                            <a href="#" className="hover:text-primary transition-colors text-sm">Books by Language</a>
                        </nav>

                        {/* Column 2: Quick Links */}
                        <nav className="flex flex-col gap-4">
                            <h6 className="text-white font-bold text-lg mb-2">Quick Links</h6>
                            <Link to="/terms" className="hover:text-primary transition-colors text-sm">Terms of Use</Link>
                            <Link to="/privacy" className="hover:text-primary transition-colors text-sm">Privacy Policy</Link>
                            <Link to="/services" className="hover:text-primary transition-colors text-sm">Our Services</Link>
                            <Link to="/faq" className="hover:text-primary transition-colors text-sm">Help & FAQs</Link>
                        </nav>

                        {/* Column 3: Contact Info */}
                        <nav className="flex flex-col gap-4">
                            <h6 className="text-white font-bold text-lg mb-2">Get in Touch</h6>
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin size={18} className="text-primary" />
                                <span>Uttara, Sector 7, Dhaka</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={18} className="text-primary" />
                                <span>+880 1234 567890</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Mail size={18} className="text-primary" />
                                <span>support@bookcourier.com</span>
                            </div>
                        </nav>

                        {/* Column 4: Newsletter */}
                        <div className="flex flex-col gap-4">
                            <h6 className="text-white font-bold text-lg mb-2">Newsletter</h6>
                            <p className="text-sm text-slate-500">Subscribe for book fair updates and new arrivals.</p>
                            <form className="relative mt-2">
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full bg-slate-800 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary outline-none text-white" 
                                />
                                <button className="absolute right-1 top-1 bottom-1 px-4 bg-primary text-white rounded-lg hover:bg-primary-focus transition-colors">
                                    <RiSendPlaneFill size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 3. COPYRIGHT BAR */}
            <div className="bg-[#020617] py-6 border-t border-slate-800/30">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <p>© {new Date().getFullYear()} Book Courier. Crafted for book lovers.</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;