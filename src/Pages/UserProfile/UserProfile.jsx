import React from "react";
import { useAuth } from "../../Hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();

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
                                    <img src={user?.photoURL} alt={user?.displayName} />
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
