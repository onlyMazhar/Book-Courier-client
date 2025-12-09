import React from 'react';
import { Link, Navigate } from 'react-router';
import SocialLogin from '../../Components/SocialLogin';
 
const Login = () => {
    return (
        <div className="  w-full  mx-auto  max-w-sm shrink-0  ">
            <title>Lgoin</title>

            <div className="card-body">
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold">Welcome Back</h2>
                    <p className="text-lg font-medium">Login to BookCourier account</p>
                </div>
                <form className="fieldset">
                    {/* Email feild */}
                    <label className="label">Email</label>
                    <input type="email" className="input  w-full" placeholder="Email" />

                    {/* Password feild */}
                    <label className="label">Password</label>
                    <input type="password" className="input  w-full" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn bg-black text-white mt-4">Login</button>
                </form >
                <p>Don’t have any account? <span className="hover:text-[#f39c12] text-black underline"><Link state={location.state} to="/register">Retister</Link ></span></p>
                <p className="text-sm font-bold text-center">or</p>
                <SocialLogin />

            </div>
        </div>
    );
};

export default Login;