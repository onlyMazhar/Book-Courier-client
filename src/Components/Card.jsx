import React from 'react';
import { Link } from 'react-router';
import { Star, MapPin, Calendar, Eye } from 'lucide-react';

const Card = ({ book }) => {
    const { _id, image, name, price, category, author, rating = 4.5, location = "Dhaka", createdAt } = book;

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return 'Recently added';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
    };

    // Generate short description
    const getShortDescription = () => {
        if (author) {
            return `by ${author} • ${category}`;
        }
        return `${category} • Available for rent`;
    };

    return (
        <div className="group h-full">
            <div className="group p-6 rounded-3xl border border-base-300 bg-base-200 backdrop-blur-sm hover:bg-base-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
                
                {/* Image Container - Fixed aspect ratio */}
                <div className="relative aspect-[3/4] overflow-hidden bg-base-200 rounded-2xl mb-6">
                    <img
                        src={image || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400'}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                        <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
                            {category}
                        </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                        <div className="bg-white text-base-content px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                            <Eye size={16} />
                            Quick View
                        </div>
                    </div>
                </div>

                {/* Content - Flexible height */}
                <div className="flex flex-col flex-1">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={14} 
                                    className={`${i < Math.floor(rating) ? 'fill-warning text-warning' : 'text-base-300'}`} 
                                />
                            ))}
                        </div>
                        <span className="text-xs text-base-content/60 ml-1 font-medium">({rating})</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-base-content line-clamp-2 mb-3 group-hover:text-primary transition-colors leading-tight">
                        {name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-base-content/70 line-clamp-2 mb-4 leading-relaxed">
                        {getShortDescription()}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-2 mb-6 text-xs text-base-content/50">
                        <div className="flex items-center gap-2">
                            <MapPin size={12} />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={12} />
                            <span>{formatDate(createdAt)}</span>
                        </div>
                    </div>

                    {/* Price and Action - Always at bottom */}
                    <div className="mt-auto pt-4 border-t border-base-300">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-xs text-base-content/60 font-medium uppercase tracking-wider">Rental Price</span>
                                <p className="text-xl font-black text-primary">
                                    ৳{price}
                                    <span className="text-xs text-base-content/60 ml-1 font-medium">/week</span>
                                </p>
                            </div>
                        </div>

                        {/* View Details Button */}
                        <Link 
                            to={`/books/${_id}`}
                            className="btn btn-primary w-full rounded-2xl font-bold hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;