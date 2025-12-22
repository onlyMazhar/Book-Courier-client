import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Hooks/useAuth";
import { CircleUserRound, UserRoundPen, Save, X, Loader2 } from "lucide-react";
import useRole from "../../../Hooks/useRole";
import { uploadImage } from "../../../utils";
import { toast } from "react-toastify";

const Profile = () => {
    const { user, loading, updateUserProfile } = useAuth();
    const [role, isRoleLoading] = useRole();
    const [isEditing, setIsEditing] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            name: user?.displayName || ""
        }
    });

    const onSubmit = async (data) => {
        try {
            const name = data.name;
            const imageFile = data.image?.[0];
            let imageUrl = user?.photoURL; // Default to existing photo

            // 1. If a new image is selected, upload it
            if (imageFile) {
                imageUrl = await uploadImage(imageFile);
            }

            // 2. Update Firebase Profile
            await updateUserProfile(name, imageUrl);

            // 3. Optional: If you sync users to your own DB
            // await saveOrUpdateUser({ email: user.email, name, image: imageUrl });

            toast.success("Profile updated successfully!");
            setIsEditing(false);
        } catch (error) {
            toast.error("Failed to update profile");
            console.error(error);
        }
    };

    if (loading || isRoleLoading) return <div className="skeleton h-96 w-full max-w-lg mx-auto mt-10"></div>;

    return (
        <div className="min-h-[87vh] content-center p-4">
            <div className="max-w-lg mx-auto card bg-base-100 shadow-xl border border-base-300">

                {!isEditing ? (
                    /* VIEW CARD */
                    <div className="card-body items-center text-center pt-8">
                        <div className="avatar mb-4">
                            <div className="w-32 h-32 rounded-lg ring ring-primary ring-offset-2">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="profile" className="rounded-lg object-cover" />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-base-200"><CircleUserRound size={64} /></div>
                                )}
                            </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold">{user?.displayName}</h2>
                        <p className="text-neutral/60">{user?.email}</p>
                        <button onClick={() => setIsEditing(true)} className="btn btn-primary btn-sm mt-6">
                            <UserRoundPen size={16} /> Edit Profile
                        </button>
                    </div>
                ) : (
                    /* EDIT FORM CARD */
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4 pt-8">
                        <h2 className="text-xl font-bold text-center">Update Profile</h2>

                        <div className="form-control">
                            <label className="label-text font-semibold mb-1">Display Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label-text font-semibold mb-1">New Profile Picture</label>
                            <input
                                {...register("image")}
                                type="file"
                                accept="image/*"
                                className="file-input file-input-bordered file-input-primary w-full"
                            />
                            <p className="text-[10px] mt-1 text-neutral/50">Current photo remains if no file is chosen.</p>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary flex-1">
                                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                Save Changes
                            </button>
                            <button type="button" onClick={() => setIsEditing(false)} className="btn btn-ghost border-base-300">
                                <X size={18} /> Cancel
                            </button>
                        </div>
                    </form>
                )}
                <div className="p-4 bg-base-200 border-t border-base-300 text-center rounded-b-xl">
                    <span className="font-medium text-sm">Status:</span>{" "}
                    <span className="text-primary text-xs animate-pulse font-bold uppercase  tracking-widest">{role}</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;