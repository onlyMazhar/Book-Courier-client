import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ArrowRight, Sparkles } from 'lucide-react';
import React from 'react';
import Card from '../../../Components/Card';
import { Link } from 'react-router';
import Container from '../../../Components/Container';

const LatestBooks = () => {
    const { data: books = [], isLoading } = useQuery({
        queryKey: ['latest-books'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/latest-books`);
            return result.data;
        },
    });

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex justify-between items-end mb-8 animate-pulse">
                    <div className="h-10 w-48 bg-base-300 rounded"></div>
                    <div className="h-6 w-24 bg-base-300 rounded"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-80 bg-base-200 rounded-xl animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <Container className="py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header Container  */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
                            <Sparkles size={16} />
                            <span>Just Arrived</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-base-content">
                            Latest Arrivals
                        </h2>
                    </div>

                    <Link
                        to="/books"
                        className="btn btn-ghost text-primary hover:bg-primary/10 gap-2 group"
                    >
                        View All Books
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Books Grid */}
                {books.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {books.map((book) => (
                            <Card key={book._id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
                        <p className="text-neutral/50 font-medium">No new books available at the moment.</p>
                    </div>
                )}
            </div>
        </Container >
    );
};

export default LatestBooks;