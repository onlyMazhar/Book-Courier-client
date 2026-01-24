import React, { useState } from 'react';
import { Mail, Gift, BookOpen, Bell, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Newsletter = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => { 
        console.log("Newsletter subscription:", data);
        // Here you would typically send the data to your backend
        toast.success("Successfully subscribed to our newsletter!");
        setIsSubscribed(true);
        reset();
        
        // Reset the success state after 3 seconds
        setTimeout(() => {
            setIsSubscribed(false);
        }, 3000);
    };

    const benefits = [
        {
            icon: <BookOpen size={24} />,
            title: "Weekly Book Picks",
            description: "Curated recommendations from our librarians"
        },
        {
            icon: <Gift size={24} />,
            title: "Exclusive Offers",
            description: "Special discounts and early access to sales"
        },
        {
            icon: <Bell size={24} />,
            title: "New Arrivals",
            description: "Be the first to know about latest additions"
        }
    ];

    return (
        <div className="py-20 bg-base-10 relative overflow-hidden">
            {/* Background Pattern */}
            

            <div className="mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                            <Mail size={18} />
                            <span>Stay Connected</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-base-content">
                            Join Our Reading Community
                        </h2>
                        <p className="text-base-content/70 text-lg max-w-2xl mx-auto leading-relaxed">
                            Get weekly book recommendations, exclusive offers, and be the first 
                            to discover new arrivals in our ever-growing library network.
                        </p>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <div className="text-primary">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-base-content">{benefit.title}</h3>
                                <p className="text-base-content/70 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Form */}
                    <div className="p-8 md:p-12 rounded-4xl bg-neutral text-neutral-content border border-base-200">
                        {!isSubscribed ? (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-6 py-4 rounded-2xl bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                                        />
                                        {errors.name && (
                                            <p className="text-red-200 text-sm mt-2">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            {...register("email", { 
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            type="email"
                                            placeholder="Your Email Address"
                                            className="w-full px-6 py-4 rounded-2xl bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                                        />
                                        {errors.email && (
                                            <p className="text-red-200 text-sm mt-2">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Preferences */}
                                <div className="text-left">
                                    <p className="text-white/80 mb-4 font-medium">What interests you most?</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {["Fiction", "Non-Fiction", "Academic", "Children's Books"].map((category) => (
                                            <label key={category} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    {...register("interests")}
                                                    type="checkbox"
                                                    value={category}
                                                    className="checkbox checkbox-sm checkbox-primary"
                                                />
                                                <span className="text-white/80 text-sm">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    className="btn btn-primary btn-lg px-12 rounded-full shadow-lg hover:scale-105 transition-all duration-300 w-full md:w-auto"
                                >
                                    Subscribe to Newsletter
                                </button>

                                <p className="text-white/60 text-xs">
                                    By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
                                </p>
                            </form>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Welcome to Our Community!</h3>
                                <p className="text-white/80">
                                    Thank you for subscribing. You'll receive your first newsletter within 24 hours.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h4 className="text-3xl font-black mb-2 text-base-content">15K+</h4>
                            <p className="text-base-content/70 text-sm">Newsletter Subscribers</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-black mb-2 text-base-content">98%</h4>
                            <p className="text-base-content/70 text-sm">Open Rate</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-black mb-2 text-base-content">Weekly</h4>
                            <p className="text-base-content/70 text-sm">Fresh Content</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-black mb-2 text-base-content">0</h4>
                            <p className="text-base-content/70 text-sm">Spam Emails</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;