import React, { useState } from 'react';
import axios from 'axios';
import { forgetPassword } from '../../services/index/User';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple email validation
        if (!email || !email.trim()) {
            setError('Email is required');
            return;
        }

        try {
            // Send GET request to your backend for password recovery
            forgetPassword(email);
            console.log('Password reset request sent successfully:');
        } catch (error: any) {
            // Handle error (display error message to the user)
            console.error('Error sending password reset request:', error.message);
        }
    };

    return (
        <div className='w-full h-screen bg-slate-200 flex items-center justify-center'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
                <h2 className='text-2xl mb-4 text-center font-bold'>Forget Password</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''
                            }`}
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p className='text-red-500 text-xs italic'>{error}</p>}
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        Send Code
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ForgetPassword;
