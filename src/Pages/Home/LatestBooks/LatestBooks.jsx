import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ArrowRight, Sparkles } from 'lucide-react';
import React from 'react';
import Card from '../../../Components/Card';
import { CardSkeletonGrid } from '../../../Components/CardSkeleton';
import { Link } from 'react-router';

const LatestBooks = () => {
    const { data: books = [], isLoading } = useQuery({
        queryKey: ['latest-books'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/latest-books`);
            return result.data;
        },
    });

    return (
        <div className="py-16">
            <div className="mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
                            <Sparkles size={16} />
                            <span>Just Arrived</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-base-content">
                            Latest Arrivals
                        </h2>
                        <p className="text-base-content/60 mt-2">
                            Discover the newest additions to our collection
                        </p>
                    </div>

                    <Link
                        to="/books"
                        className="btn btn-ghost text-primary hover:bg-primary/10 gap-2 group"
                    >
                        View All Books
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <CardSkeletonGrid count={8} />
                )}

                {/* Books Grid - 4 columns on desktop */}
                {!isLoading && books.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {books.slice(0, 8).map((book) => (
                            <Card key={book._id} book={book} />
                        ))}
                    </div>
                )}

                {/* No Books Available */}
                {!isLoading && books.length === 0 && (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300">
                        <div className="max-w-md mx-auto">
                            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles size={32} className="text-slate-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No New Books Yet</h3>
                            <p className="text-slate-600 mb-6">
                                We're constantly adding new books to our collection. 
                                Check back soon for the latest arrivals!
                            </p>
                            <Link to="/books" className="btn btn-primary px-8 rounded-full">
                                Browse All Books
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LatestBooks;