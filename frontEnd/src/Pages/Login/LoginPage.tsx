import React, { useEffect, useState } from 'react';
import { SignUpInput, signInSchema } from '../../Schemas/UserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import useLoginMutation from '../../utils/LoginMutation';
import { useSelector } from 'react-redux';

function LoginPage() {
    const navigate = useNavigate();
    const userData = useSelector(state => state.user)
    useEffect(() => {
        if (userData.userInfo) {
            navigate('/')
        }
    }, [userData])
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<SignUpInput>({
        resolver: zodResolver(signInSchema),
    });

    const { mutate, isLoading } = useLoginMutation();

    const onSubmit = (data: SignUpInput) => {
        mutate(data);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="w-full h-screen bg-slate-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-center font-bold text-gray-800 text-3xl mb-6">Login</h1>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            className={`mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none
                                         ${errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-gray-500'}`}
                            id="email"
                            {...register('email')}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                className={`mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none
                                             ${errors.password ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-gray-500'}`}
                                id="password"
                                type={showPassword ? "text" : "password"}
                                {...register('password')}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash className="text-gray-700" />
                                ) : (
                                    <FaRegEye className="text-gray-700" />
                                )}
                            </button>
                        </div>
                        {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
                    </div>
                    <Link to="/forget-password" className="text-sm text-primary font-medium hover:underline">
                        Forget Password?
                    </Link>
                    <button
                        type="submit"
                        disabled={!isValid || isLoading}
                        className="w-full py-2 px-4 bg-primary text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2
                         focus:ring-indigo-500 hover:scale-105 transition-transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                    >
                        Submit
                    </button>
                    <p className="text-center text-[#5a7184]">
                        Don't have an account?{' '}
                        <span>
                            <Link
                                className="text-sm text-primary font-medium hover:underline"
                                to="/register"
                            >
                                Sign up
                            </Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
