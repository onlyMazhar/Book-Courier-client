import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { Copy } from 'lucide-react';

const MyInvoices = () => {
    const { user } = useAuth()
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`${import.meta.env.VITE_API_URL}/my-invoices?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setInvoices(data);
                console.log(data,"from my invoice")
                setLoading(false);
            });
    }, [user]);

    // console.log(data)

    if (loading) {
        return <p className="text-center mt-10">Loading invoices...</p>;
    }

    if (!invoices.length) {
        return <p className="text-center mt-10">No payments found</p>;
    }

    return (
        <div className=" py-3  min-h-screen">
            <div className="  mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Invoices</h2>
                    <p className="text-gray-500 mt-1">Manage and track your recent transactions.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {invoices.map((invoice) => (
                        <div
                            key={invoice._id}
                            className="group relative bg-base-200 backdrop-blur-sm rounded-3xl border border-base-300 hover:bg-base-300 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Header Section */}
                            <div className="flex justify-between items-start mb-4">
                                {invoice.name && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                                            {invoice.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">{invoice.writtenBy}</p>
                                    </div>
                                )}


                                {/* Status Badge */}
                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${invoice.status === 'Paid'
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                    : 'bg-amber-50 text-amber-700 border-amber-100'
                                    }`}>
                                    {invoice.status}
                                </span>
                            </div>

                            {/* Body Section */}
                            <div className="space-y-3">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                                        Transaction ID
                                    </span>
                                    <code className=" flex gap-2 items-center text-xs font-mono text-primary/60  px-1.5 py-0.5 rounded mt-1">
                                        #{invoice.transactionId} <Copy className='cursor-pointer text-black' size={12} />
                                    </code>

                                </div>

                                <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Total Amount</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            ${invoice.price.toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 mb-1">Issued Date</p>
                                        <p className="text-sm font-medium text-gray-700">
                                            {new Date(invoice.createdAt || invoice._id).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyInvoices;