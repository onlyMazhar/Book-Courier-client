import React from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Star } from 'lucide-react';

const Card = ({ book }) => {
    const { _id, image, name, price, category } = book;

    return (
        <Link to={`/books/${_id}`} className="group block h-full">
            <div className="bg-base-100 rounded-xl overflow-hidden shadow-sm border border-base-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative aspect-3/4 overflow-hidden bg-base-200">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-2 left-2">
                        <span className="badge badge-primary font-medium text-[10px] uppercase tracking-wider shadow-sm">
                            {category}
                        </span>
                    </div>

                    {/* Quick View Overlay (Visual Only) */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                            View Details
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col grow">
                    {/* Ratings Placeholder */}
                    <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="fill-warning text-warning" />
                        ))}
                        <span className="text-[10px] text-neutral/50 ml-1">(4.5)</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm md:text-base font-bold text-base-content line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                        {name}
                    </h3>

                    <div className="mt-auto flex items-center justify-between">
                        {/* Price */}
                        <div>
                            <span className="text-xs text-neutral/60 font-medium">Price</span>
                            <p className="text-lg font-extrabold text-primary">
                                {price}<span className="text-xs ml-0.5">TK</span>
                            </p>
                        </div>

                        {/* Action Icon */}
                        <div className="btn btn-circle btn-ghost btn-sm bg-base-200 group-hover:bg-primary group-hover:text-white transition-colors">
                            <ShoppingCart size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;