import React from 'react';
import { BookOpen, GraduationCap, Heart, Zap, Globe, Briefcase, Baby, Palette } from 'lucide-react';
import { Link } from 'react-router';

const BookCategories = () => {
    const categories = [
        {
            id: 1,
            name: "Fiction & Literature",
            icon: <BookOpen size={32} />,
            count: "2,450+ books",
            color: "bg-blue-500",
            description: "Novels, short stories, and literary classics"
        },
        {
            id: 2,
            name: "Academic & Education",
            icon: <GraduationCap size={32} />,
            count: "1,800+ books",
            color: "bg-green-500",
            description: "Textbooks, research papers, and study guides"
        },
        {
            id: 3,
            name: "Romance & Drama",
            icon: <Heart size={32} />,
            count: "950+ books",
            color: "bg-pink-500",
            description: "Love stories, romantic novels, and drama"
        },
        {
            id: 4,
            name: "Science & Technology",
            icon: <Zap size={32} />,
            count: "1,200+ books",
            color: "bg-yellow-500",
            description: "Programming, engineering, and scientific research"
        },
        {
            id: 5,
            name: "History & Culture",
            icon: <Globe size={32} />,
            count: "750+ books",
            color: "bg-purple-500",
            description: "Historical events, cultural studies, and biographies"
        },
        {
            id: 6,
            name: "Business & Finance",
            icon: <Briefcase size={32} />,
            count: "650+ books",
            color: "bg-orange-500",
            description: "Entrepreneurship, economics, and business strategy"
        },
        {
            id: 7,
            name: "Children's Books",
            icon: <Baby size={32} />,
            count: "1,100+ books",
            color: "bg-cyan-500",
            description: "Picture books, fairy tales, and educational content"
        },
        {
            id: 8,
            name: "Arts & Design",
            icon: <Palette size={32} />,
            count: "420+ books",
            color: "bg-red-500",
            description: "Art history, design principles, and creative guides"
        }
    ];

    return (
        <div className="py-20     to-blue-50">
            <div className="mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-4">
                        <BookOpen size={18} />
                        <span>Browse by Category</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-base-content mb-6">
                        Discover Your Next Great Read
                    </h2>
                    <p className="text-neutral/60 max-w-2xl mx-auto text-lg">
                        From bestselling fiction to academic resources, explore our diverse collection 
                        organized by your favorite genres and subjects.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/books?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group p-6 bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 "
                        >
                            <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-white mb-4  `}>
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {category.name}
                            </h3>
                            <p className="text-sm text-neutral/60 mb-3 leading-relaxed">
                                {category.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {category.count}
                                </span>
                                <span className="text-xs text-neutral/40 group-hover:text-primary transition-colors">
                                    Browse →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Link 
                        to="/books" 
                        className="btn btn-primary btn-lg px-12 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        View All Categories
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCategories;