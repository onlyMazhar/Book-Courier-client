import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import Card from '../../Components/Card';
import { CardSkeletonGrid } from '../../Components/CardSkeleton';
import Container from '../../Components/Container';
import { Search, ArrowUpDown, Filter } from 'lucide-react';

const Books = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('default');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const { data: books = [], isLoading } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/books`)
            return result.data;
        },
    })

    // Get unique categories for filter
    const categories = ['all', ...new Set(books.map(book => book.category))];

    // Filter and sort logic
    const filteredAndSortedBooks = books
        .filter(book => {
            const matchesSearch = book.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = categoryFilter === 'all' || book.category === categoryFilter;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortOrder === 'lowToHigh') return a.price - b.price;
            if (sortOrder === 'highToLow') return b.price - a.price;
            if (sortOrder === 'nameAZ') return a.name.localeCompare(b.name);
            if (sortOrder === 'nameZA') return b.name.localeCompare(a.name);
            return 0; // Default (no sorting)
        });

    return (
        <Container>
            <div className='px-4 pt-32 pb-20'>
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                        Browse Our Collection
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover thousands of books from local libraries across Dhaka. 
                        Find your next great read today.
                    </p>
                </div>

                {/* Search and Filter Controls */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-12">
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                        
                        {/* Search Input */}
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search books by title, author, or keyword..."
                                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2 w-full lg:w-auto">
                            <Filter size={18} className="text-slate-500" />
                            <select 
                                className="select select-bordered w-full lg:w-48 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2 w-full lg:w-auto">
                            <ArrowUpDown size={18} className="text-slate-500" />
                            <select 
                                className="select select-bordered w-full lg:w-48 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="default">Sort by</option>
                                <option value="lowToHigh">Price: Low to High</option>
                                <option value="highToLow">Price: High to Low</option>
                                <option value="nameAZ">Name: A to Z</option>
                                <option value="nameZA">Name: Z to A</option>
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    {!isLoading && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <p className="text-sm text-slate-600">
                                {searchQuery || categoryFilter !== 'all' ? (
                                    <>
                                        Showing <span className="font-bold">{filteredAndSortedBooks.length}</span> results
                                        {searchQuery && <> for "<span className="font-bold">{searchQuery}</span>"</>}
                                        {categoryFilter !== 'all' && <> in <span className="font-bold">{categoryFilter}</span></>}
                                    </>
                                ) : (
                                    <>Showing <span className="font-bold">{books.length}</span> books</>
                                )}
                            </p>
                        </div>
                    )}
                </div>

                {/* Loading State */}
                {isLoading && (
                    <CardSkeletonGrid count={12} />
                )}

                {/* Books Grid - 4 columns on desktop */}
                {!isLoading && filteredAndSortedBooks.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredAndSortedBooks.map(book => (
                            <Card key={book._id} book={book} />
                        ))}
                    </div>
                )}

                {/* No Results */}
                {!isLoading && filteredAndSortedBooks.length === 0 && (
                    <div className="text-center py-20">
                        <div className="max-w-md mx-auto">
                            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search size={32} className="text-slate-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">No books found</h3>
                            <p className="text-slate-600 mb-6">
                                {searchQuery ? (
                                    <>No books match your search for "<strong>{searchQuery}</strong>"</>
                                ) : (
                                    <>No books found in the selected category</>
                                )}
                            </p>
                            <button 
                                onClick={() => {
                                    setSearchQuery('');
                                    setCategoryFilter('all');
                                    setSortOrder('default');
                                }}
                                className="btn btn-primary px-8 rounded-full"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Books;