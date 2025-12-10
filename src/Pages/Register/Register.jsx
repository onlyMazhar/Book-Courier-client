import { Link } from 'react-router';
import SocialLogin from '../../Components/SocialLogin';
import { useForm } from 'react-hook-form';
 import { useAuth } from '../../Hooks/useAuth';
import { Navigate } from 'react-router';

const Register = () => {
    const { userRegister } = useAuth()
    const { register,
        handleSubmit } = useForm()

    const handleRegister = (data) => {
        // console.log(data)
        userRegister(data.email, data.password)
            .then(result => {
                console.log(result.user);
            <Navigate to={'/'}/>
               
            })
            .catch(err => {
                console.log(err)
            });

    }

    return (
        <div className="  w-full  mx-auto  max-w-sm shrink-0  ">
            <title>Register</title>

            <div className="card-body">
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold">Create an Account</h2>
                    <p className="text-lg font-medium">Register with BookCourier</p>
                </div>
                <form onSubmit={handleSubmit(handleRegister)} className="fieldset">
                    {/* Email feild */}
                    <label className="label">Name</label>
                    <input {...register("name")} type="text" className="input  w-full" placeholder="Your Name" />

                    {/* Email feild */}
                    <label className="label">Email</label>
                    <input type="file" className="file-input w-full" />

                    {/* Email feild */}
                    <label className="label">Email</label>
                    <input {...register("email")} type="email" className="input  w-full" placeholder="Email" />

                    {/* Password feild */}
                    <label className="label">Password</label>
                    <input {...register("password")} type="password" className="input  w-full" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn bg-black text-white mt-4">Register</button>
                </form >

                <p>Already have a account? <span className="hover:text-primary text-black underline"><Link state={location.state} to="/login">Login</Link ></span></p>
                <p className="text-sm font-bold text-center">or</p>
                <SocialLogin />

            </div>
        </div>
    );
};

export default Register;