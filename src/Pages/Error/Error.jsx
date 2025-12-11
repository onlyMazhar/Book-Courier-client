
import { Search, ArrowLeft, HomeIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function NotFound404() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-6">
            {/* Main Card */}
            <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-10 border border-(--color-border)">

                {/* Status Code */}
                <h1 className="text-6xl font-extrabold text-(--color-primary) text-center">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl mt-4 text-center font-semibold text-(--color-text)">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 mt-3 leading-relaxed">
                    The page you're looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>


                {/* Back Home Button */}
                <div className="flex justify-center mt-8 space-x-5">
                    {/* Go back */}
                    <Link
                        onClick={() => navigate(-1)}
                        className="btn btn-outline bg-(--color-primary) text-white   "
                    >
                        <ArrowLeft className="mr-2" size={18} />
                        Go Back
                    </Link>
                    {/* Go Home */}
                    <Link
                        to="/"
                        className="btn btn-outline border-(--color-primary) text-primary hover:bg-primary hover:text-white"
                    >
                        <HomeIcon className="mr-2" size={18} />
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Small Footer Note */}
            <p className="mt-6 text-sm text-gray-500 text-center">
                BookCourier • Delivering Knowledge With Ease
            </p>
        </div>
    );
}
