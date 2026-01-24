import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../Hooks/useAuth';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router';
import { saveOrUpdateUser } from '../utils';
import { Loader2 } from 'lucide-react';

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setIsGoogleLoading(true);
        
        try {
            const result = await googleLogin();
            const user = result.user;

            await saveOrUpdateUser({
                email: user.email,
                name: user.displayName,
                image: user.photoURL,
                createdAt: new Date(),
            });

            toast.success('Welcome! Login successful');
            navigate(location.state?.from || '/');
            
        } catch (err) {
            console.error(err);
            let errorMessage = 'Google login failed. Please try again.';
            
            if (err.code === 'auth/popup-closed-by-user') {
                errorMessage = 'Login cancelled. Please try again.';
            } else if (err.code === 'auth/popup-blocked') {
                errorMessage = 'Popup blocked. Please allow popups and try again.';
            }
            
            toast.error(errorMessage);
        } finally {
            setIsGoogleLoading(false);
        }
    };

    return (
        <div className="space-y-3">
            <button 
                onClick={handleGoogleLogin}
                disabled={isGoogleLoading}
                className="w-full bg-base-100 hover:bg-base-200 text-base-content border border-base-300 py-3 px-4 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
                {isGoogleLoading ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Connecting...
                    </>
                ) : (
                    <>
                        <FcGoogle size={20} />
                        Continue with Google
                    </>
                )}
            </button>
            
            {/* Future: Add Facebook login */}
            {/* <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-3"
                disabled
            >
                <FaFacebook size={20} />
                Continue with Facebook
                <span className="text-xs opacity-75">(Coming Soon)</span>
            </button> */}
        </div>
    );
};

export default SocialLogin;