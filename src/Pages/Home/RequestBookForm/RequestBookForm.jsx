import React from 'react';
import { BookOpen, User, Mail, MessageSquare, Send, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
 

const RequestBookForm = () => {
    const { register, handleSubmit, reset,  } = useForm();

    const onSubmit = (data) => {
        console.log("Requested Book Data:", data);
        // Here you would typically send an axios.post to your '/requested-books' endpoint
        toast.success("Request submitted! We'll notify you if we find it.");
        reset();
    };

    return (
        <div className="py-20 bg-slate-50 min-h-screen flex items-center">
            <div className="max-w-5xl mx-auto px-4 w-full">
                <div className="bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-base-300">
                    
                    {/* LEFT SIDE: Information */}
                    <div className="lg:w-2/5 bg-primary p-10 md:p-16 text-white flex flex-col justify-center">
                        <div className="bg-white/20 w-fit p-3 rounded-2xl mb-6">
                            <BookOpen size={32} />
                        </div>
                        <h2 className="text-4xl font-black mb-6 leading-tight">Can't find your favorite book?</h2>
                        <p className="text-primary-content/80 mb-8 leading-relaxed">
                            Tell us the title and author. Our team will search through our network of libraries and try to bring it to your doorstep.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Calendar size={18} />
                                </div>
                                <span className="text-sm">Response within 48 hours</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Send size={18} />
                                </div>
                                <span className="text-sm">Global sourcing network</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Form */}
                    <div className="lg:w-3/5 p-10 md:p-16">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <h3 className="text-2xl font-bold text-base-content mb-6">Book Request Form</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Name Input */}
                                <div className="form-control">
                                    <label className="label text-xs font-bold uppercase opacity-50">Your Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/40" size={18} />
                                        <input 
                                            {...register("name", { required: true })}
                                            type="text" 
                                            placeholder="John Doe" 
                                            className="input input-bordered w-full pl-12 rounded-xl focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="form-control">
                                    <label className="label text-xs font-bold uppercase opacity-50">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/40" size={18} />
                                        <input 
                                            {...register("email", { required: true })}
                                            type="email" 
                                            placeholder="john@example.com" 
                                            className="input input-bordered w-full pl-12 rounded-xl focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Book Title */}
                            <div className="form-control">
                                <label className="label text-xs font-bold uppercase opacity-50">Book Title</label>
                                <div className="relative">
                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/40" size={18} />
                                    <input 
                                        {...register("bookTitle", { required: true })}
                                        type="text" 
                                        placeholder="e.g. The Great Gatsby" 
                                        className="input input-bordered w-full pl-12 rounded-xl focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            {/* Author Name */}
                            <div className="form-control">
                                <label className="label text-xs font-bold uppercase opacity-50">Author Name</label>
                                <input 
                                    {...register("author")}
                                    type="text" 
                                    placeholder="e.g. F. Scott Fitzgerald" 
                                    className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Message / Additional Details */}
                            <div className="form-control">
                                <label className="label text-xs font-bold uppercase opacity-50">Any specific edition or notes?</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-neutral/40" size={18} />
                                    <textarea 
                                        {...register("notes")}
                                        className="textarea textarea-bordered w-full pl-12 rounded-xl h-32 focus:ring-2 focus:ring-primary" 
                                        placeholder="Hardcover, specific publisher, or language..."
                                    ></textarea>
                                </div>
                            </div>

                            <button className="btn btn-primary w-full rounded-xl text-white font-bold h-14 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestBookForm;