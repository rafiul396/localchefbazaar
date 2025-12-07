import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <a className='flex items-center gap-2 cursor-pointer'href='/' >
                        <img
                            src={logo}
                            alt="amar kitchen logo"
                            className='w-[80px]'
                        />
                        <div>
                            <h3 className='berkshire-swash-regular font-semibold text-3xl text-[#442a00]'>
                                Amar Kitchen
                            </h3>
                            <p className='text-lg text-yellow-500 oswald'>
                                Food & Drink
                            </p>
                        </div>
                    </a>
    );
};

export default Logo;