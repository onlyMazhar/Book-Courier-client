import React from 'react';
import Loader from '../../Components/Loader';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '../../Hooks/useAuth';
import { BookOpen, MapPin, Phone, User, Info, CheckCircle } from 'lucide-react';
import { useParams } from 'react-router';

const BookDetails = () => {
    const { register, handleSubmit, reset } = useForm();
     
    const { user } = useAuth();
    const { id } = useParams();

    const { data: book = {}, isLoading } = useQuery({
        queryKey: ['book', id],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/books/${id}`);
            return res.data.result;
        }
    });

    const { _id, name, category, author, price, image, quantity, description, librarian } = book;

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
            bookImg: image,
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

    if (isLoading) return <Loader />;
    if (!book?._id) return <div className="text-center py-20 text-2xl font-bold opacity-20">Book not found</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* LEFT: Book Cover Column (3/12) */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="sticky top-24">
                        <div className="bg-base-200 p-2 rounded-xl shadow-inner group">
                            <img
                                src={image}
                                alt={name}
                                className="w-full aspect-3/4 object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                        <button className="btn btn-outline btn-primary w-full mt-6 gap-2">
                            <BookOpen size={18} /> Read Sample
                        </button>
                    </div>
                </div>

                {/* MIDDLE: Info Column (6/12) */}
                <div className="lg:col-span-6 space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="badge badge-primary badge-outline px-3 py-3 uppercase text-[10px] font-bold tracking-widest">{category}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-base-content leading-tight">{name}</h1>
                        <p className="text-xl text-neutral/70 mt-2 font-medium italic">by {author}</p>
                    </div>

                    <div className="flex items-center gap-4 py-4 border-y border-base-200">
                        <div className="flex text-warning">
                            {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                        </div>
                        <span className="text-sm font-semibold opacity-60 underline cursor-pointer">482 Verified Reviews</span>
                    </div>

                    <div className="prose prose-sm max-w-none text-neutral/80">
                        <h3 className="text-lg font-bold flex items-center gap-2"><Info size={20} /> Description</h3>
                        <p className="leading-relaxed">{description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-base-200 rounded-lg">
                            <p className="text-xs uppercase opacity-50 font-bold">Availability</p>
                            <p className="text-lg font-bold">{quantity} Copies Left</p>
                        </div>
                        <div className="p-4 bg-base-200 rounded-lg">
                            <p className="text-xs uppercase opacity-50 font-bold">Condition</p>
                            <p className="text-lg font-bold">New (Paperback)</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Order Card (3/12) */}
                <div className="lg:col-span-3">
                    <div className="card bg-base-100 border border-base-300 shadow-xl sticky top-24">
                        <div className="card-body p-6">
                            <p className="text-xs font-bold text-success uppercase flex items-center gap-1 mb-2">
                                <CheckCircle size={14} /> In Stock & Ready to Ship
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black text-primary">{price}</span>
                                <span className="text-lg font-bold opacity-70">TK</span>
                            </div>

                            <div className="divider my-2"></div>

                            <button
                                onClick={() => document.getElementById("pay_modal").showModal()}
                                className="btn btn-primary btn-block btn-lg"
                            >
                                Order Now
                            </button>

                            <div className="mt-6 flex items-center gap-3 bg-base-200 p-3 rounded-lg">
                                <img src={librarian?.photo} className="w-10 h-10 rounded-full object-cover ring-2 ring-primary" alt="" />
                                <div>
                                    <p className="text-[10px] uppercase font-bold opacity-50">Librarian</p>
                                    <p className="text-xs font-bold truncate w-32">{librarian?.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ORDER MODAL */}
            <dialog id="pay_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-md">
                    <h3 className="text-2xl font-black mb-6">Confirm Your Order</h3>
                    <form onSubmit={handleSubmit(handleOrder)} className="space-y-4">
                        <div className="form-control">
                            <label className="label-text font-bold mb-2 flex items-center gap-2">
                                <User size={16} /> Customer Name
                            </label>
                            <input readOnly value={user?.displayName} className=" w-full input input-bordered bg-base-200 font-medium" />
                        </div>

                        <div className="form-control">
                            <label className="label-text font-bold mb-2 flex items-center gap-2">
                                <Phone size={16} /> Contact Phone
                            </label>
                            <input
                                type='number'
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
                                className=" w-full textarea textarea-bordered h-24 focus:textarea-primary"
                                placeholder="Full street address, City, Area"
                            />
                        </div>

                        <div className="modal-action grid grid-cols-2 gap-3">
                            <button type="button" onClick={() => document.getElementById("pay_modal").close()} className="btn btn-ghost border-base-300">Cancel</button>
                            <button type="submit" className="btn btn-primary">Confirm & Order</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookDetails;