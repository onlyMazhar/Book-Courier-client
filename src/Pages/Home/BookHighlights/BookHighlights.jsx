import React from 'react';
import { Star, TrendingUp, Award, Clock } from 'lucide-react';
import { Link } from 'react-router';

const BookHighlights = () => {
    const highlights = [
        {
            id: 1,
            category: "Trending Now",
            icon: <TrendingUp size={20} />,
            books: [
                {
                    title: "The Seven Husbands of Evelyn Hugo",
                    author: "Taylor Jenkins Reid",
                    rating: 4.8,
                    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300",
                    price: "৳450",
                    badge: "Most Borrowed"
                },
                {
                    title: "Atomic Habits",
                    author: "James Clear",
                    rating: 4.9,
                    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=300",
                    price: "৳520",
                    badge: "Self-Help #1"
                }
            ],
            color: "bg-red-500"
        },
        {
            id: 2,
            category: "Award Winners",
            icon: <Award size={20} />,
            books: [
                {
                    title: "Klara and the Sun",
                    author: "Kazuo Ishiguro",
                    rating: 4.7,
                    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=300",
                    price: "৳680",
                    badge: "Nobel Prize Winner"
                },
                {
                    title: "The Midnight Library",
                    author: "Matt Haig",
                    rating: 4.6,
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
                    price: "৳590",
                    badge: "Goodreads Choice"
                }
            ],
            color: "bg-yellow-500"
        },
        {
            id: 3,
            category: "Recently Added",
            icon: <Clock size={20} />,
            books: [
                {
                    title: "Project Hail Mary",
                    author: "Andy Weir",
                    rating: 4.8,
                    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=300",
                    price: "৳720",
                    badge: "New Arrival"
                },
                {
                    title: "The Thursday Murder Club",
                    author: "Richard Osman",
                    rating: 4.5,
                    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=300",
                    price: "৳480",
                    badge: "Mystery Hit"
                }
            ],
            color: "bg-green-500"
        }
    ];

    return (
        <div className="py-20 bg-base-100">
            <div className="mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                        <Star size={18} />
                        <span>Featured Collections</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-base-content">
                        Handpicked Book Highlights
                    </h2>
                    <p className="text-neutral/70 max-w-2xl mx-auto text-lg">
                        Discover the most popular, award-winning, and recently added books 
                        that our community can't stop talking about.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight) => (
                        <div key={highlight.id} className="space-y-6">
                            {/* Category Header */}
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 ${highlight.color} rounded-xl flex items-center justify-center text-white`}>
                                    {highlight.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-base-content">{highlight.category}</h3>
                            </div>

                            {/* Books */}
                            <div className="space-y-4">
                                {highlight.books.map((book, index) => (
                                    <div key={index} className="group p-6 rounded-3xl border border-base-200 bg-base-100 hover:bg-base-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                        <div className="flex gap-4">
                                            {/* Book Image */}
                                            <div className="relative">
                                                <img 
                                                    src={book.image} 
                                                    alt={book.title}
                                                    className="w-16 h-20 object-cover rounded-lg shadow-lg"
                                                />
                                                <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-bold">
                                                    {book.badge}
                                                </div>
                                            </div>

                                            {/* Book Info */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-black text-base-content group-hover:text-primary transition-colors line-clamp-2 mb-1">
                                                    {book.title}
                                                </h4>
                                                <p className="text-neutral/60 text-sm mb-2">
                                                    by {book.author}
                                                </p>
                                                
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <Star size={14} className="text-warning fill-current" />
                                                        <span className="text-sm font-medium text-base-content">{book.rating}</span>
                                                    </div>
                                                    <span className="text-primary font-bold">{book.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* View More Link */}
                            <Link 
                                to="/books" 
                                className="block text-center py-3 border border-base-200 rounded-xl text-neutral/70 hover:text-base-content hover:bg-base-200 transition-all duration-300"
                            >
                                View All in {highlight.category} →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link 
                        to="/books" 
                        className="btn btn-primary btn-lg px-12 rounded-full shadow-lg hover:scale-105 transition-transform"
                    >
                        Explore All Books
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookHighlights;