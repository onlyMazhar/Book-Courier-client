import { Link, useNavigate } from 'react-router';
import SocialLogin from '../../Components/SocialLogin';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Hooks/useAuth';
import { Bounce, toast } from 'react-toastify';
import { saveOrUpdateUser, uploadImage } from '../../utils';

const Register = () => {
    const { userRegister, updateUserProfile } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()
    const navigate = useNavigate();

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const handleRegister = async (data) => {
        const { name, email, password, image } = data;
        const imageFile = image?.[0];

        try {
            await userRegister(email, password);
            const imageUrl = await uploadImage(imageFile);
            await updateUserProfile(name, imageUrl);
            navigate('/');
            toast.success('Login Successfull', { transition: Bounce });
            await saveOrUpdateUser({ email, name, image: imageUrl })

        } catch (err) {
            console.log(err);
        }
    };




    return (
        <div className="  w-full  mx-auto  max-w-sm shrink-0  ">
            <title>Register</title>

            <div className="card-body">
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold">Create an Account</h2>
                    <p className="text-lg font-medium">Register with BookCourier</p>
                </div>
                <form onSubmit={handleSubmit(handleRegister)} className="fieldset">

                    {/* Name feild */}
                    <label className="label">Name</label>
                    <input
                        {...register("name", {
                            required: "Name is required",
                            maxLength: { value: 20, message: "Name too long" },
                            minLength: { value: 6, message: "Name too short" }
                        })}
                        type="text"
                        placeholder="Your Name"
                        className="input  w-full"
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}

                    {/* Email feild */}
                    <label className="label">Image</label>
                    <input
                        {...register("image")}
                        type="file"
                        className="file-input w-full" />

                    {/* Email feild */}
                    <label className="label">Email</label>
                    <input
                        {...register("email",
                            {
                                required: "Email is required",
                                pattern: {
                                    value: emailRegex,
                                    message: "Enter a valid email format."
                                }
                            })}
                        type="email"
                        placeholder="Email"
                        className="input  w-full"
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}

                    {/* Password feild */}
                    <label className="label">Password</label>
                    <input
                        {...register("password",
                            {
                                required: "Password is required",
                                pattern: {
                                    value: passwordRegex,
                                    message: "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                                }
                            })}
                        type="password"
                        placeholder="Password"
                        className="input  w-full"
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type="submit" className="btn bg-black text-white mt-4">Register</button>
                </form >

                <p>Already have a account? <span className="hover:text-primary text-black underline"><Link to="/login">Login</Link ></span></p>
                <p className="text-sm font-bold text-center">or</p>
                <SocialLogin />

            </div>
        </div>
    );
};

export default Register;