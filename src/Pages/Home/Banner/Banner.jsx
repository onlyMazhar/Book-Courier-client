import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Tag, Truck, Info, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className=" mx-auto pt-24 pb-10">
            <div className="  overflow-hidden shadow-2xl border border-base-200 bg-base-100">
                <Carousel 
                    infiniteLoop={true} 
                    showThumbs={false} 
                    autoPlay={true} 
                    showStatus={false}
                    interval={5000}
                    className="overflow-hidden"
                >
                    {/* SLIDE 1: OFFERS */}
                    <div className="min-h-[70vh] flex flex-col md:flex-row items-stretch">
                        <div className="w-full md:w-1/2 p-10 md:p-20 text-left flex flex-col justify-center space-y-8 bg-linear-to-br from-base-100 to-base-200">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-widest w-fit">
                                <Tag size={16} /> Exclusive Discounts
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-base-content leading-[1.1]">
                                Winter Book <br/> 
                                <span className="text-primary italic">Fest 2025</span>
                            </h2>
                            <p className="text-neutral/60 text-xl max-w-md leading-relaxed">
                                Dive into our collection with up to <span className="font-bold text-primary">60% OFF</span>. Your next adventure is just a click away.
                            </p>
                            <div className="pt-4">
                                <Link to="/books" className="btn btn-primary btn-lg px-10 rounded-2xl shadow-xl shadow-primary/30 gap-3 hover:scale-105 transition-transform">
                                    Shop the Sale <ShoppingBag size={20} />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative">
                            <img 
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                alt="Offers" 
                            />
                        </div>
                    </div>

                    {/* SLIDE 2: DELIVERY EXTRA */}
                    <div className="min-h-[70vh] flex flex-col md:flex-row-reverse items-stretch">
                        <div className="w-full md:w-1/2 p-10 md:p-20 text-left flex flex-col justify-center space-y-8 bg-linear-to-bl from-blue-50 to-white">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest w-fit">
                                <Truck size={16} /> Express Shipping
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-base-content leading-[1.1]">
                                Same Day <br/> 
                                <span className="text-blue-600">Delivery</span>
                            </h2>
                            <p className="text-neutral/60 text-xl max-w-md leading-relaxed">
                                We value your time. Delivering books across Dhaka in <span className="text-blue-600 font-bold">under 24 hours</span>. Fast, safe, and reliable.
                            </p>
                            <div className="pt-4">
                                <Link to="/coverage" className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:border-blue-600 btn-lg px-10 rounded-2xl shadow-lg transition-all">
                                    Check Coverage
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative">
                            <img 
                                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                alt="Delivery" 
                            />
                        </div>
                    </div>

                    {/* SLIDE 3: DETAILS / LIBRARIAN */}
                    <div className="min-h-[70vh] flex flex-col md:flex-row items-stretch">
                        <div className="w-full md:w-1/2 p-10 md:p-20 text-left flex flex-col justify-center space-y-8 bg-linear-to-br from-purple-50 to-white">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-bold text-xs uppercase tracking-widest w-fit">
                                <Info size={16} /> Join the Network
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-base-content leading-[1.1]">
                                Share Your <br/> 
                                <span className="text-purple-600">Collection</span>
                            </h2>
                            <p className="text-neutral/60 text-xl max-w-md leading-relaxed">
                                List your books as a local librarian and help us build the city's largest decentralized library network.
                            </p>
                            <div className="pt-4">
                                <button className="group flex items-center gap-3 text-xl font-bold text-purple-600 hover:gap-5 transition-all">
                                    Learn how it works <ArrowRight size={24} className="group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative">
                            <img 
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                alt="Details" 
                            />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;