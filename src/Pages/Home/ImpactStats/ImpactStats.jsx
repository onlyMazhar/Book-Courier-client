const ImpactStats = () => {
    return (
        <div className="py-20 m bg-primary relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { label: "Books Delivered", val: "12,500+" },
                        { label: "Active Librarians", val: "450+" },
                        { label: "Happy Readers", val: "8,200+" },
                        { label: "Average Delivery", val: "18 Hours" },
                    ].map((item, i) => (
                        <div key={i} className="text-center text-white border-r border-white/10 last:border-none">
                            <h4 className="text-4xl md:text-5xl font-black mb-2">{item.val}</h4>
                            <p className="text-white/70 uppercase tracking-widest text-xs font-bold">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactStats;