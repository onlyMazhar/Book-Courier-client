import React from "react";
import { useAuth } from "../../Hooks/useAuth";
import { CircleUserRound } from "lucide-react";

const Profile = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-[90vh] flex items-center justify-center">
                <div className="max-w-lg w-full p-4">
                    <div className="card bg-base-100 shadow-xl border border-base-300 pt-8">

                        <div className="card-body space-y-6">

                            {/* Avatar */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="skeleton w-32 h-32 rounded-lg"></div>

                                {/* Name */}
                                <div className="skeleton h-6 w-40"></div>

                                {/* Role */}
                                <div className="skeleton h-4 w-24"></div>

                                {/* Email */}
                                <div className="skeleton h-4 w-56"></div>
                            </div>

                            {/* Button */}
                            <div className="flex justify-center pb-8">
                                <div className="skeleton h-9 w-28 rounded-md"></div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-base-200 border-t border-base-300 flex justify-center gap-2">
                            <div className="skeleton h-4 w-20"></div>
                            <div className="skeleton h-4 w-32"></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    if (!user) {
        return null; // or redirect if needed
    }

    return (
        <div className="min-h-[90vh] content-center">
            <div className="max-w-lg mx-auto  p-4">
                <div className="card bg-base-100 shadow-xl border border-base-300 pt-8">

                    {/* Header */}
                    <div className="card-body space-y-6">

                        {/* Avatar + Basic Info */}
                        <div className="flex flex-col items-center gap-4 justify-center">
                            <div className="avatar">
                                <div className="w-42 rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {user.photoURL
                                        ? <img referrerPolicy="no-referrer"
                                            src={user?.photoURL} alt="profile" />
                                        : <div className="flex items-center justify-center h-full "><CircleUserRound size={96} /></div>
                                    }
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-2xl font-semibold text-text">
                                    {user?.displayName}
                                </h2>
                                <p className="text-sm text-neutral/70">{user?.role}</p>
                                <p className="text-sm text-neutral/80">
                                    <span className="font-medium">Email:</span> {user?.email}
                                </p>
                            </div>

                        </div>



                        {/* CTA */}
                        <div className="card-actions  justify-center pb-8">
                            <button className="btn btn-primary btn-sm">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-base-200 border-t border-base-300 text-center">
                        <span className="font-medium text-text">Avg. Rating:</span>{" "}
                        <span className="text-star text-xl">★★★★★</span>
                        <span className="text-sm text-neutral/70"> (12 reviews)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
