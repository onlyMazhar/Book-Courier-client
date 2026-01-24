import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../Context/ThemeContext';

const ThemeToggle = ({ className = "", variant = "default" }) => {
    const { theme, toggleTheme, isDark } = useTheme();

    const getButtonStyles = () => {
        switch (variant) {
            case 'navbar':
                return 'w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20';
            case 'dashboard':
                return 'w-10 h-10 rounded-xl bg-base-200 hover:bg-base-300 transition-colors duration-200';
            default:
                return 'w-10 h-10 rounded-xl bg-base-200 hover:bg-base-300 transition-colors duration-200';
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={`relative inline-flex items-center justify-center transition-all duration-200 ${getButtonStyles()} ${className}`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <div className="relative w-5 h-5">
                <Sun 
                    size={20} 
                    className={`absolute inset-0 transition-all duration-300 ${
                        isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`}
                />
                <Moon 
                    size={20} 
                    className={`absolute inset-0 transition-all duration-300 ${
                        isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;