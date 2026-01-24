import React from 'react';

const CardSkeleton = () => {
    return (
        <div className="h-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-full flex flex-col animate-pulse">
                
                {/* Image Skeleton */}
                <div className="aspect-[3/4] bg-slate-200">
                    <div className="w-full h-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-[length:200%_100%] animate-shimmer"></div>
                </div>

                {/* Content Skeleton */}
                <div className="p-4 flex flex-col flex-1">
                    {/* Rating Skeleton */}
                    <div className="flex items-center gap-1 mb-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-3 h-3 bg-slate-200 rounded"></div>
                            ))}
                        </div>
                        <div className="w-8 h-3 bg-slate-200 rounded ml-1"></div>
                    </div>

                    {/* Title Skeleton */}
                    <div className="space-y-2 mb-2">
                        <div className="h-4 bg-slate-200 rounded w-full"></div>
                        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    </div>

                    {/* Description Skeleton */}
                    <div className="space-y-2 mb-3">
                        <div className="h-3 bg-slate-200 rounded w-full"></div>
                        <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                    </div>

                    {/* Meta Info Skeleton */}
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-slate-200 rounded"></div>
                            <div className="h-3 bg-slate-200 rounded w-16"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-slate-200 rounded"></div>
                            <div className="h-3 bg-slate-200 rounded w-20"></div>
                        </div>
                    </div>

                    {/* Price and Button Skeleton */}
                    <div className="mt-auto pt-3 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <div className="h-3 bg-slate-200 rounded w-16 mb-1"></div>
                                <div className="h-5 bg-slate-200 rounded w-12"></div>
                            </div>
                        </div>
                        <div className="h-8 bg-slate-200 rounded-xl w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Grid of skeleton cards
export const CardSkeletonGrid = ({ count = 8 }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(count)].map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    );
};

export default CardSkeleton;