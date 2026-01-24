import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../../Components/SocialLogin';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { saveOrUpdateUser, uploadImage } from '../../utils';
import { 
    Mail, 
    Lock, 
    Eye, 
    EyeOff, 
    AlertCircle, 
    Loader2,
    UserPlus,
    Upload,
    User,
    CheckCircle
} from 'lucide-react';

const Register = () => {
    const { userRegister, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
    const password = watch('password');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                toast.error('Image size should be less than 5MB');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRegister = async (data) => {
        const { name, email, password, image } = data;
        const imageFile = image?.[0];
        setIsLoading(true);

        try {
            // Create user account
            await userRegister(email, password);
            
            // Upload image if provided
            let imageUrl = null;
            if (imageFile) {
                imageUrl = await uploadImage(imageFile);
            }
            
            // Update user profile
            await updateUserProfile(name, imageUrl);
            
            // Save user to database
            await saveOrUpdateUser({ 
                email, 
                name, 
                image: imageUrl,
                createdAt: new Date()
            });

            toast.success('Account created successfully! Welcome to BookCourier');
            navigate('/');

        } catch (err) {
            console.error(err);
            let errorMessage = 'Registration failed. Please try again.';
            
            if (err.code === 'auth/email-already-in-use') {
                errorMessage = 'An account with this email already exists.';
            } else if (err.code === 'auth/weak-password') {
                errorMessage = 'Password is too weak. Please choose a stronger password.';
            } else if (err.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address format.';
            }
            
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full mx-auto max-w-md px-6">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <UserPlus size={32} className="text-primary" />
                    </div>
                    <h1 className="text-3xl font-black text-base-content">Create Account</h1>
                    <p className="text-base-content/70">
                        Join BookCourier and start your reading journey
                    </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-base-content">
                            Full Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User size={18} className="text-base-content/40" />
                            </div>
                            <input
                                {...register("name", {
                                    required: "Full name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Name must be at least 2 characters"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Name must be less than 50 characters"
                                    }
                                })}
                                type="text"
                                placeholder="Enter your full name"
                                className={`w-full pl-10 pr-4 py-3 border rounded-xl bg-base-100 text-base-content focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${
                                    errors.name ? 'border-red-300 bg-red-50' : 'border-base-300'
                                }`}
                                disabled={isLoading}
                            />
                        </div>
                        {errors.name && (
                            <div className="flex items-center gap-2 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                {errors.name.message}
                            </div>
                        )}
                    </div>

                    {/* Profile Image Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-base-content">
                            Profile Picture (Optional)
                        </label>
                        <div className="flex items-center gap-4">
                            {imagePreview ? (
                                <img 
                                    src={imagePreview} 
                                    alt="Preview" 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-base-300"
                                />
                            ) : (
                                <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center">
                                    <User size={24} className="text-base-content/40" />
                                </div>
                            )}
                            <div className="flex-1">
                                <input
                                    {...register("image")}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    id="image-upload"
                                    disabled={isLoading}
                                />
                                <label
                                    htmlFor="image-upload"
                                    className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-base-300 rounded-lg text-sm font-medium text-base-content hover:bg-base-200 transition-colors"
                                >
                                    <Upload size={16} />
                                    Choose Image
                                </label>
                                <p className="text-xs text-base-content/60 mt-1">Max 5MB, JPG/PNG</p>
                            </div>
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-base-content">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail size={18} className="text-base-content/40" />
                            </div>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: emailRegex,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                                type="email"
                                placeholder="Enter your email"
                                className={`w-full pl-10 pr-4 py-3 border rounded-xl bg-base-100 text-base-content focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${
                                    errors.email ? 'border-red-300 bg-red-50' : 'border-base-300'
                                }`}
                                disabled={isLoading}
                            />
                        </div>
                        {errors.email && (
                            <div className="flex items-center gap-2 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                {errors.email.message}
                            </div>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-base-content">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={18} className="text-base-content/40" />
                            </div>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: passwordRegex,
                                        message: "Password must contain at least 6 characters, including uppercase, lowercase, number, and special character"
                                    }
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a strong password"
                                className={`w-full pl-10 pr-12 py-3 border rounded-xl bg-base-100 text-base-content focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${
                                    errors.password ? 'border-red-300 bg-red-50' : 'border-base-300'
                                }`}
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                disabled={isLoading}
                            >
                                {showPassword ? (
                                    <EyeOff size={18} className="text-base-content/40 hover:text-base-content/60" />
                                ) : (
                                    <Eye size={18} className="text-base-content/40 hover:text-base-content/60" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <div className="flex items-center gap-2 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                {errors.password.message}
                            </div>
                        )}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-base-content">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={18} className="text-base-content/40" />
                            </div>
                            <input
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: value => value === password || "Passwords do not match"
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                className={`w-full pl-10 pr-12 py-3 border rounded-xl bg-base-100 text-base-content focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${
                                    errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-base-300'
                                }`}
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                disabled={isLoading}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff size={18} className="text-base-content/40 hover:text-base-content/60" />
                                ) : (
                                    <Eye size={18} className="text-base-content/40 hover:text-base-content/60" />
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <div className="flex items-center gap-2 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                {errors.confirmPassword.message}
                            </div>
                        )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-2">
                        <label className="flex items-start gap-3">
                            <input
                                {...register("terms", {
                                    required: "You must accept the terms and conditions"
                                })}
                                type="checkbox"
                                className="mt-1 w-4 h-4 text-primary border-base-300 rounded focus:ring-primary"
                                disabled={isLoading}
                            />
                            <span className="text-sm text-base-content/70">
                                I agree to the{' '}
                                <Link to="/terms-of-service" className="text-primary hover:text-primary/80 font-medium">
                                    Terms of Service
                                </Link>
                                {' '}and{' '}
                                <Link to="/privacy-policy" className="text-primary hover:text-primary/80 font-medium">
                                    Privacy Policy
                                </Link>
                            </span>
                        </label>
                        {errors.terms && (
                            <div className="flex items-center gap-2 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                {errors.terms.message}
                            </div>
                        )}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={isLoading || isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Creating account...
                            </>
                        ) : (
                            <>
                                <CheckCircle size={18} />
                                Create Account
                            </>
                        )}
                    </button>
                </form>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-base-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-base-100 text-base-content/60 font-medium">Or continue with</span>
                    </div>
                </div>

                {/* Social Login */}
                <SocialLogin />

                {/* Login Link */}
                <div className="text-center">
                    <p className="text-base-content/70">
                        Already have an account?{' '}
                        <Link 
                            to="/login"
                            className="text-primary hover:text-primary/80 font-bold"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;