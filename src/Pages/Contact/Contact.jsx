import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import Container from '../../Components/Container';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ContactPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Contact form data:", data);
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        reset();
    };

    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: "Visit Our Office",
            details: [
                "House 123, Road 456",
                "Sector 7, Uttara",
                "Dhaka 1230, Bangladesh"
            ],
            action: "Get Directions",
            color: "bg-blue-500"
        },
        {
            icon: <Phone size={24} />,
            title: "Call Us",
            details: [
                "Main: +880 1234 567890",
                "Support: +880 1234 567891",
                "Emergency: +880 1234 567892"
            ],
            action: "Call Now",
            color: "bg-green-500"
        },
        {
            icon: <Mail size={24} />,
            title: "Email Us",
            details: [
                "General: info@bookcourier.com",
                "Support: support@bookcourier.com",
                "Business: business@bookcourier.com"
            ],
            action: "Send Email",
            color: "bg-purple-500"
        },
        {
            icon: <Clock size={24} />,
            title: "Business Hours",
            details: [
                "Monday - Friday: 9 AM - 9 PM",
                "Saturday: 10 AM - 8 PM",
                "Sunday: 10 AM - 6 PM"
            ],
            action: "View Schedule",
            color: "bg-orange-500"
        }
    ];

    const departments = [
        { value: "general", label: "General Inquiry" },
        { value: "support", label: "Customer Support" },
        { value: "technical", label: "Technical Issue" },
        { value: "billing", label: "Billing & Payment" },
        { value: "partnership", label: "Partnership" },
        { value: "feedback", label: "Feedback & Suggestions" }
    ];

    const faqs = [
        {
            question: "How quickly do you respond to messages?",
            answer: "We typically respond to all messages within 24 hours during business days. For urgent matters, please call our support line."
        },
        {
            question: "Can I visit your office in person?",
            answer: "Yes! Our office is open during business hours. We recommend calling ahead to ensure someone is available to assist you."
        },
        {
            question: "Do you provide support in Bengali?",
            answer: "Absolutely! Our support team is fluent in both Bengali and English. Feel free to contact us in your preferred language."
        }
    ];

    return (
        <div className="min-h-screen pt-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-16">
                    <h1 className="text-4xl md:text-6xl font-black text-base-content mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed">
                        Have questions, feedback, or need support? We're here to help! 
                        Reach out to us through any of the channels below.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                                <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                                <div className="space-y-2 mb-6">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-neutral/60 text-sm">{detail}</p>
                                    ))}
                                </div>
                                <button className="btn btn-outline btn-primary btn-sm w-full">
                                    {info.action}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-black mb-4">Send Us a Message</h2>
                                <p className="text-neutral/70">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-neutral/80 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            {...register("firstName", { required: "First name is required" })}
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="John"
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-neutral/80 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            {...register("lastName", { required: "Last name is required" })}
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Doe"
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-neutral/80 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        {...register("email", { 
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-neutral/80 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        {...register("phone")}
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="+880 1234 567890"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-neutral/80 mb-2">
                                        Department *
                                    </label>
                                    <select
                                        {...register("department", { required: "Please select a department" })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">Select Department</option>
                                        {departments.map((dept) => (
                                            <option key={dept.value} value={dept.value}>
                                                {dept.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.department && (
                                        <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-neutral/80 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        {...register("subject", { required: "Subject is required" })}
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Brief description of your inquiry"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-neutral/80 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        {...register("message", { required: "Message is required" })}
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Please provide details about your inquiry..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-black mb-4">Other Ways to Reach Us</h2>
                                <p className="text-neutral/70">
                                    Prefer a different way to get in touch? Here are more options.
                                </p>
                            </div>

                            {/* Live Chat */}
                            <div className="bg-primary/10 rounded-2xl p-6 mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageCircle size={24} className="text-primary" />
                                    <h3 className="text-xl font-bold">Live Chat Support</h3>
                                </div>
                                <p className="text-neutral/70 mb-4">
                                    Get instant help from our support team. Available 24/7 for urgent matters.
                                </p>
                                <button className="btn btn-primary">
                                    Start Live Chat
                                </button>
                            </div>

                            {/* FAQ */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                        <h4 className="font-bold mb-2 text-primary">{faq.question}</h4>
                                        <p className="text-neutral/70 text-sm">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div className="mt-8 p-6 bg-slate-50 rounded-2xl">
                                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                                <p className="text-neutral/70 mb-4">
                                    Stay updated with our latest news and updates on social media.
                                </p>
                                <div className="flex gap-3">
                                    <button className="btn btn-circle btn-outline btn-primary">
                                        f
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-primary">
                                        t
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-primary">
                                        i
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-primary">
                                        in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Find Our Office</h2>
                        <p className="text-neutral/70">Located in the heart of Uttara, Dhaka</p>
                    </div>

                    <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin size={48} className="text-neutral/40 mx-auto mb-4" />
                            <p className="text-neutral/60">Interactive map would be embedded here</p>
                            <p className="text-sm text-neutral/50">House 123, Road 456, Sector 7, Uttara, Dhaka</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactPage;