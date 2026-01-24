import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: "10 Must-Read Books That Will Change Your Perspective",
            excerpt: "Discover transformative literature that challenges conventional thinking and opens new worlds of understanding.",
            author: "Sarah Ahmed",
            date: "January 15, 2025",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600",
            category: "Book Reviews",
            featured: true
        },
        {
            id: 2,
            title: "The Rise of Digital Libraries in Bangladesh",
            excerpt: "How technology is revolutionizing access to books and creating new opportunities for readers across the country.",
            author: "Rafiq Hassan",
            date: "January 12, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
            category: "Technology"
        },
        {
            id: 3,
            title: "Building a Reading Habit: A Complete Guide",
            excerpt: "Practical tips and strategies to develop a consistent reading routine that fits your busy lifestyle.",
            author: "Nadia Khan",
            date: "January 10, 2025",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600",
            category: "Lifestyle"
        },
        {
            id: 4,
            title: "Local Authors Making Global Impact",
            excerpt: "Celebrating Bangladeshi writers who are gaining international recognition and inspiring the next generation.",
            author: "Karim Rahman",
            date: "January 8, 2025",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600",
            category: "Authors"
        }
    ];

    return (
        <div className="py-20 bg-base-10">
            <div className="mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                            <BookOpen size={18} />
                            <span>Reading Community</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-base-content mb-4">
                            Latest from Our Blog
                        </h2>
                        <p className="text-neutral max-w-xl text-lg">
                            Stay updated with book reviews, reading tips, and insights 
                            from our community of passionate readers and writers.
                        </p>
                    </div>
                    <Link 
                        to="/blog" 
                        className="btn btn-outline btn-primary gap-2 group"
                    >
                        View All Posts
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Featured Post */}
                <div className="mb-12">
                    {blogPosts.filter(post => post.featured).map((post) => (
                        <div key={post.id} className="bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-64 lg:h-full object-cover"
                                    />
                                </div>
                                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                                            FEATURED
                                        </span>
                                        <span className="text-primary font-medium text-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight hover:text-primary transition-colors cursor-pointer">
                                        {post.title}
                                    </h3>
                                    <p className="text-neutral/60 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 text-sm text-neutral/50">
                                            <div className="flex items-center gap-2">
                                                <User size={16} />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-primary font-medium">
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Regular Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.filter(post => !post.featured).map((post) => (
                        <article key={post.id} className="group bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="relative overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors cursor-pointer">
                                    {post.title}
                                </h3>
                                <p className="text-neutral/60 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                <div className="flex items-center justify-between text-xs text-neutral/50">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                    <span className="text-primary font-medium">
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-16 p-8 md:p-12 bg-primary rounded-3xl text-white text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Never Miss a Great Read
                    </h3>
                    <p className="text-primary-content/80 mb-8 max-w-2xl mx-auto">
                        Subscribe to our weekly newsletter for book recommendations, 
                        reading tips, and exclusive offers from our library network.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email address"
                            className="flex-1 border border-white px-6 py-2 rounded-full text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                        />
                        <button className="btn btn-secondary px-8 rounded-full hover:scale-105 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;