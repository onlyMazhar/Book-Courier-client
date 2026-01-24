import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '../../Hooks/useAuth';
import { useParams, Link } from 'react-router';
import Container from '../../Components/Container';
import Card from '../../Components/Card';
import { CardSkeletonGrid } from '../../Components/CardSkeleton';
import { 
    BookOpen, 
    MapPin, 
    Phone, 
    User, 
    Info, 
    CheckCircle, 
    Heart, 
    Star,
    Calendar,
    Package,
    Shield,
    Truck,
    RotateCcw,
    ChevronLeft,
    ChevronRight,
    Eye,
    Share2,
    MessageCircle
} from 'lucide-react';

const BookDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

    // Fetch book details
    const { data: book = {}, isLoading } = useQuery({
        queryKey: ['book', id],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/books/${id}`);
            return res.data.result;
        }
    });

    // Fetch related books
    const { data: relatedBooks = [], isLoading: relatedLoading } = useQuery({
        queryKey: ['related-books', book.category],
        queryFn: async () => {
            if (!book.category) return [];
            const res = await axios(`${import.meta.env.VITE_API_URL}/books?category=${book.category}&limit=8`);
            return res.data.filter(b => b._id !== id);
        },
        enabled: !!book.category
    });

    // Wishlist mutation
    const { mutateAsync: addToWishlist } = useMutation({
        mutationFn: async (wishlistItem) => {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/wishlist`, wishlistItem);
            return data;
        },
        onSuccess: () => toast.success("Added to Wishlist!"),
        onError: (err) => toast.error(err.response?.data?.message || "Failed to add to wishlist")
    });

    const { _id, name, category, author, price, image, quantity, description, librarian, rating = 4.5, reviews = [], createdAt } = book;

    // Handle multiple images (fallback to single image)
    const images = Array.isArray(image) ? image : [image].filter(Boolean);
    const hasMultipleImages = images.length > 1;

    const handleWishlist = async () => {
        if (!user) return toast.warning("Please login to add to wishlist");
        
        const wishlistItem = {
            bookId: _id,
            name,
            image: images[0],
            price,
            author,
            category,
            userEmail: user?.email
        };

        await addToWishlist(wishlistItem);
    };

    const handleOrder = async (data) => {
        const orderData = {
            customerName: user?.displayName,
            customerEmail: user?.email,
            phone: data.phone,
            address: data.address,
            bookId: _id,
            bookName: name,
            quantity: 1,
            category,
            price: price,
            status: 'pending',
            bookImg: images[0],
            writtenBy: author,
            librarian: librarian?.email
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/orders`, orderData);
            toast.success("Order placed successfully");
            reset();
            document.getElementById("pay_modal").close();
        } catch {
            toast.error("Failed to place order");
        }
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Mock reviews data (replace with real data when available)
    const mockReviews = reviews.length > 0 ? reviews : [
        { id: 1, user: "Ahmed Hassan", rating: 5, comment: "Excellent book! Great condition and fast delivery.", date: "2025-01-15", verified: true },
        { id: 2, user: "Sarah Khan", rating: 4, comment: "Good read, exactly as described. Recommended!", date: "2025-01-10", verified: true },
        { id: 3, user: "Rafiq Ahmed", rating: 5, comment: "Perfect condition and amazing story. Will rent again!", date: "2025-01-08", verified: false }
    ];

    if (isLoading) {
        return (
            <Container>
                <div className="pt-32 pb-20">
                    <div className="animate-pulse">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            <div className="aspect-[3/4] bg-slate-200 rounded-2xl"></div>
                            <div className="space-y-6">
                                <div className="h-8 bg-slate-200 rounded w-3/4"></div>
                                <div className="h-6 bg-slate-200 rounded w-1/2"></div>
                                <div className="h-32 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    if (!book?._id) {
        return (
            <Container>
                <div className="text-center py-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Book Not Found</h2>
                    <p className="text-slate-600 mb-8">The book you're looking for doesn't exist or has been removed.</p>
                    <Link to="/books" className="btn btn-primary px-8 rounded-full">
                        Browse All Books
                    </Link>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="pt-32 pb-20">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <span>/</span>
                    <Link to="/books" className="hover:text-primary">Books</Link>
                    <span>/</span>
                    <span className="text-slate-900 font-medium">{name}</span>
                </nav>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left: Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden group">
                            <img
                                src={images[currentImageIndex] || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600'}
                                alt={name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            
                            {/* Image Navigation */}
                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </>
                            )}

                            {/* Image Counter */}
                            {hasMultipleImages && (
                                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                    {currentImageIndex + 1} / {images.length}
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Images */}
                        {hasMultipleImages && (
                            <div className="flex gap-2 overflow-x-auto">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                                            index === currentImageIndex ? 'border-primary' : 'border-slate-200'
                                        }`}
                                    >
                                        <img src={img} alt={`${name} ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Book Info */}
                    <div className="space-y-6">
                        {/* Category Badge */}
                        <div className="flex items-center gap-2">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                {category}
                            </span>
                            {quantity < 5 && (
                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                                    Only {quantity} left
                                </span>
                            )}
                        </div>

                        {/* Title & Author */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                                {name}
                            </h1>
                            <p className="text-xl text-slate-600 font-medium">by {author}</p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-4 py-4 border-y border-slate-200">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={20} 
                                        className={`${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                                    />
                                ))}
                                <span className="ml-2 font-bold text-slate-900">{rating}</span>
                            </div>
                            <span className="text-sm text-slate-600 hover:text-primary cursor-pointer">
                                ({mockReviews.length} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="bg-slate-50 rounded-2xl p-6">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-3xl font-black text-primary">৳{price}</span>
                                <span className="text-slate-600">/week</span>
                            </div>
                            <p className="text-sm text-slate-600">Free delivery within Dhaka</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => document.getElementById("pay_modal").showModal()}
                                className="btn btn-primary flex-1 btn-lg rounded-2xl"
                            >
                                Rent Now
                            </button>
                            <button 
                                onClick={handleWishlist}
                                className="btn btn-outline btn-primary btn-lg rounded-2xl px-6"
                            >
                                <Heart size={20} />
                            </button>
                            <button className="btn btn-outline btn-primary btn-lg rounded-2xl px-6">
                                <Share2 size={20} />
                            </button>
                        </div>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Package size={16} className="text-primary" />
                                    <span className="text-sm font-bold">Availability</span>
                                </div>
                                <p className="font-bold">{quantity} copies available</p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar size={16} className="text-primary" />
                                    <span className="text-sm font-bold">Added</span>
                                </div>
                                <p className="font-bold">
                                    {createdAt ? new Date(createdAt).toLocaleDateString() : 'Recently'}
                                </p>
                            </div>
                        </div>

                        {/* Librarian Info */}
                        {librarian && (
                            <div className="bg-slate-50 rounded-2xl p-6">
                                <h3 className="font-bold mb-4">Book Owner</h3>
                                <div className="flex items-center gap-4">
                                    <img 
                                        src={librarian.photo || `https://ui-avatars.com/api/?name=${librarian.name}&background=random`} 
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary" 
                                        alt={librarian.name} 
                                    />
                                    <div>
                                        <p className="font-bold">{librarian.name}</p>
                                        <p className="text-sm text-slate-600">Verified Librarian</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tabbed Content */}
                <div className="mb-16">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-slate-200 mb-8">
                        {[
                            { id: 'description', label: 'Description', icon: <Info size={18} /> },
                            { id: 'specifications', label: 'Details', icon: <BookOpen size={18} /> },
                            { id: 'reviews', label: `Reviews (${mockReviews.length})`, icon: <MessageCircle size={18} /> }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                                    activeTab === tab.id
                                        ? 'text-primary border-b-2 border-primary'
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-8">
                        {/* Description Tab */}
                        {activeTab === 'description' && (
                            <div className="prose prose-lg max-w-none">
                                <h3 className="text-2xl font-bold mb-4">About This Book</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {description || "This is an excellent book that offers great value for readers. The content is well-written and engaging, making it a perfect choice for anyone interested in this subject matter."}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                        <Shield size={24} className="text-green-500" />
                                        <div>
                                            <h4 className="font-bold">Quality Guaranteed</h4>
                                            <p className="text-sm text-slate-600">Verified condition</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                        <Truck size={24} className="text-blue-500" />
                                        <div>
                                            <h4 className="font-bold">Fast Delivery</h4>
                                            <p className="text-sm text-slate-600">Within 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                        <RotateCcw size={24} className="text-purple-500" />
                                        <div>
                                            <h4 className="font-bold">Easy Returns</h4>
                                            <p className="text-sm text-slate-600">7-day return policy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Specifications Tab */}
                        {activeTab === 'specifications' && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Book Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="font-medium text-slate-600">Author</span>
                                            <span className="font-bold">{author}</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="font-medium text-slate-600">Category</span>
                                            <span className="font-bold">{category}</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="font-medium text-slate-600">Condition</span>
                                            <span className="font-bold text-green-600">Excellent</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="font-medium text-slate-600">Language</span>
                                            <span className="font-bold">English</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="font-medium text-slate-600">Rental Period</span>
                                            <span className="font-bold">1-4 weeks</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="font-medium text-slate-600">Format</span>
                                            <span className="font-bold">Paperback</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="font-medium text-slate-600">Availability</span>
                                            <span className="font-bold">{quantity} copies</span>
                                        </div>
                                        <div className="flex justify-between py-3 border-b border-slate-200">
                                            <span className="font-medium text-slate-600">Location</span>
                                            <span className="font-bold">Dhaka</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Reviews Tab */}
                        {activeTab === 'reviews' && (
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold">Customer Reviews</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    size={16} 
                                                    className={`${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                                                />
                                            ))}
                                        </div>
                                        <span className="font-bold">{rating} out of 5</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {mockReviews.map((review) => (
                                        <div key={review.id} className="border-b border-slate-200 pb-6 last:border-b-0">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                        <User size={16} className="text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold">{review.user}</p>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center gap-1">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star 
                                                                        key={i} 
                                                                        size={12} 
                                                                        className={`${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                                                                    />
                                                                ))}
                                                            </div>
                                                            {review.verified && (
                                                                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs font-bold">
                                                                    Verified
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="text-sm text-slate-500">
                                                    {new Date(review.date).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <p className="text-slate-700 leading-relaxed">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Books Section */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-black">Related Books</h2>
                        <Link to="/books" className="text-primary hover:underline font-medium">
                            View All
                        </Link>
                    </div>

                    {relatedLoading ? (
                        <CardSkeletonGrid count={4} />
                    ) : relatedBooks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {relatedBooks.slice(0, 4).map((relatedBook) => (
                                <Card key={relatedBook._id} book={relatedBook} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-slate-50 rounded-2xl">
                            <p className="text-slate-600">No related books found</p>
                        </div>
                    )}
                </div>

                {/* Order Modal */}
                <dialog id="pay_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box max-w-md">
                        <h3 className="text-2xl font-black mb-6">Confirm Your Order</h3>
                        <form onSubmit={handleSubmit(handleOrder)} className="space-y-4">
                            <div className="form-control">
                                <label className="label-text font-bold mb-2 flex items-center gap-2">
                                    <User size={16} /> Customer Name
                                </label>
                                <input 
                                    readOnly 
                                    defaultValue={user?.displayName} 
                                    className="w-full input input-bordered bg-slate-100 font-medium" 
                                />
                            </div>

                            <div className="form-control">
                                <label className="label-text font-bold mb-2 flex items-center gap-2">
                                    <Phone size={16} /> Contact Phone
                                </label>
                                <input
                                    type='tel'
                                    {...register("phone", { required: true })}
                                    placeholder="017XXXXXXXX"
                                    className="input w-full input-bordered focus:input-primary"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label-text font-bold mb-2 flex items-center gap-2">
                                    <MapPin size={16} /> Delivery Address
                                </label>
                                <textarea
                                    {...register("address", { required: true })}
                                    className="w-full textarea textarea-bordered h-24 focus:textarea-primary"
                                    placeholder="Full street address, City, Area"
                                />
                            </div>

                            <div className="modal-action grid grid-cols-2 gap-3">
                                <button 
                                    type="button" 
                                    onClick={() => document.getElementById("pay_modal").close()} 
                                    className="btn btn-ghost border-slate-300"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Confirm Order
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </Container>
    );
};

export default BookDetails;