import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../../Components/SocialLogin';
import { useAuth } from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { saveOrUpdateUser } from '../../utils';
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    AlertCircle,
    Loader2,
    User,
    ArrowRight
} from 'lucide-react';

const Login = () => {
    const { userLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleLogin = async (data) => {
        const { email, password } = data;
        setIsLoading(true);

        try {
            const result = await userLogin(email, password);
            const user = result.user;

            await saveOrUpdateUser({
                email: user.email,
                name: user.displayName,
                image: user.photoURL,
            });

            toast.success('Welcome back! Login successful');
            navigate(location.state?.from || '/');

        } catch (err) {
            console.error(err);
            let errorMessage = 'Login failed. Please try again.';

            if (err.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email address.';
            } else if (err.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password. Please try again.';
            } else if (err.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address format.';
            } else if (err.code === 'auth/too-many-requests') {
                errorMessage = 'Too many failed attempts. Please try again later.';
            }

            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDemoLogin = () => {
        setValue('email', 'admiral@genrl.aladeen');
        setValue('password', '@Ladin01');
        toast.info('Demo credentials filled. Click Login to continue.');
    };

    return (
        <div className="w-full mx-auto max-w-md px-6">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <User size={32} className="text-primary" />
                    </div>
                    <h1 className="text-3xl font-black text-slate-900">Welcome Back</h1>
                    <p className="text-slate-600">
                        Sign in to your BookCourier account
                    </p>
                </div>

                {/* Demo Login Button */}
                <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 py-3 px-4 rounded-xl font-medium hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 flex items-center justify-center gap-2"
                >
                    <ArrowRight size={18} />
                    Try Demo Account
                </button>

                {/* Login Form */}
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail size={18} className="text-slate-400" />
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
                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300'
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
                        <label className="block text-sm font-bold text-slate-700">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={18} className="text-slate-400" />
                            </div>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${errors.password ? 'border-red-300 bg-red-50' : 'border-slate-300'
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
                                    <EyeOff size={18} className="text-slate-400 hover:text-slate-600" />
                                ) : (
                                    <Eye size={18} className="text-slate-400 hover:text-slate-600" />
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

                    {/* Forgot Password */}
                    <div className="text-right">
                        <button
                            type="button"
                            className="text-sm text-primary hover:text-primary/80 font-medium"
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading || isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-slate-500 font-medium">Or continue with</span>
                    </div>
                </div>

                {/* Social Login */}
                <SocialLogin />

                {/* Register Link */}
                <div className="text-center">
                    <p className="text-slate-600">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            state={location.state}
                            className="text-primary hover:text-primary/80 font-bold"
                        >
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;