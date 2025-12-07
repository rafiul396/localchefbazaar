import React, { useState } from 'react';

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="w-full min-h-screen bg-[#FCFCFC] dark:bg-[#1C1C1C]">


            <div className="w-full h-64 md:h-80 relative">
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg berkshire-swash-regular">
                        Welcome Back
                    </h1>
                </div>
            </div>


            <div className="max-w-lg mx-auto mt-[-80px] bg-white dark:bg-[#2A2A2A] rounded-xl shadow-xl p-8 md:p-10 relative z-10 mb-10" data-aos="fade-up">

                <h2 className="text-2xl font-semibold text-primary dark:text-gray-100 mb-6 text-center">
                    Login to Your Account
                </h2>

                <form className="space-y-5">

                    <div>
                        <label className="text-sm text-gray-600 dark:text-gray-300">Email
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 
                                  bg-gray-50 dark:bg-[#2A2A2A] text-gray-800 dark:text-gray-200 focus:ring-2 
                                  focus:ring-[#FF6F61] outline-none"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 dark:text-gray-300">Password
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 
                                      bg-gray-50 dark:bg-[#2A2A2A] text-gray-800 dark:text-gray-200 focus:ring-2 
                                      focus:ring-[#FF6F61] outline-none"
                                />
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-300 cursor-pointer"
                                >
                                    {showPass ? "Hide" : "Show"}
                                </span>
                            </div>
                        </label>
                    </div>


                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-primary hover:underline text-sm"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button className="w-full btn shadow-none border-none bg-primary text-white py-3 rounded-lg text-lg font-semibold transition">
                        Login
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
                    Don't have an account?{" "}
                    <a href="/register" className="text-primary font-medium hover:underline">
                        Register
                    </a>
                </p>

            </div>
        </div>
    );
};

export default Login;