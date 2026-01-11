import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react'; // Added useState
import Loader from '../../Components/Loader';
import Card from '../../Components/Card';
import Container from '../../Components/Container';
import { Search, ArrowUpDown } from 'lucide-react'; // Icons for UI

const Books = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('default');

    const { data: books = [], isLoading } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/books`)
            return result.data;
        },
    })

    if (isLoading) return <Loader />

    // --- Logic for Search and Sort ---
    const filteredAndSortedBooks = books
        .filter(book => 
            book.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'lowToHigh') return a.price - b.price;
            if (sortOrder === 'highToLow') return b.price - a.price;
            return 0; // Default (no sorting)
        });

    return (
        <Container>
            <div className='px-4 pt-32 pb-20'>
                {/* Search and Sort Controls */}
                <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-base-200 p-6 rounded-2xl shadow-sm">
                    
                    {/* Search Input */}
                    <div className="relative w-full md:w-1/2">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="text-gray-400" size={18} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by book name..."
                            className="input input-bordered w-full pl-10 focus:outline-primary"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <ArrowUpDown size={18} className="text-gray-500" />
                        <select 
                            className="select select-bordered w-full md:w-auto"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="default">Sort by Price</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Books Grid */}
                {filteredAndSortedBooks.length > 0 ? (
                    <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5">
                        {filteredAndSortedBooks.map(book => (
                            <Card key={book._id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold opacity-50">No books found matching "{searchQuery}"</h3>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Books;