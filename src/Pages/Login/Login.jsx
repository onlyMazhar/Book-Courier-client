import { Link, useLocation } from 'react-router';
import SocialLogin from '../../Components/SocialLogin';
import { useAuth } from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Bounce, toast } from 'react-toastify';
import { saveOrUpdateUser } from '../../utils';

const Login = () => {
    const { userLogin } = useAuth();
    const location = useLocation();

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    // const handleLogin = (data) => {
    //     const { email, password } = data;

    //     userLogin(email, password)
    //         .then(() => {
    //             toast.success('Login Successfull', {
    //                 position: "top-center",
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: false,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //                 transition: Bounce,
    //             });
    //         })
    //         .catch(err => console.log(err));
    // };

    const handleLogin = async (data) => {
        const { email, password } = data;

        try {
            const result = await userLogin(email, password); // wait for login
            const user = result.user;

            // ✅ Save / update user in DB
            await saveOrUpdateUser({
                email: user.email,
                name: user.displayName,
                image: user.photoURL,

            });

            toast.success('Login Successful', {
                position: "top-center",
                autoClose: 2000,
                transition: Bounce,
            });

        } catch (err) {
            console.error(err);
            toast.error('Invalid email or password');
        }
    };
    return (
        <div className="w-full mx-auto max-w-sm shrink-0">
            <title>Login</title>

            <div className="card-body">
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold">Welcome Back</h2>
                    <p className="text-lg font-medium">
                        Login to BookCourier account
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} className="fieldset">

                    {/* Email field */}
                    <label className="label">Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: emailRegex,
                                message: "Enter a valid email format."
                            }
                        })}
                        type="email"
                        placeholder="Email"
                        className="input w-full"
                    />
                    {errors.email && (<p className="text-sm text-red-500">{errors.email.message}</p>)}

                    {/* Password field */}
                    <label className="label">Password</label>
                    <input
                        {...register("password", {
                            required: "Password is required",
                            pattern: {
                                value: passwordRegex,
                                message:
                                    "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                            }
                        })}
                        type="password"
                        placeholder="Password"
                        className="input w-full"
                    />
                    {errors.password && (<p className="text-sm text-red-500"> {errors.password.message} </p>)}

                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn bg-black text-white mt-4">
                        Login
                    </button>
                </form>

                <p>
                    Don’t have any account?{" "}
                    <span className="hover:text-primary text-black underline">
                        <Link state={location.state} to="/register">
                            Register
                        </Link>
                    </span>
                </p>

                <p className="text-sm font-bold text-center">or</p>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
