import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = ({ mainTextSize, subTextSize, logoSize }) => {
    return (
        <Link className='flex items-center gap-2 cursor-pointer' to='/' >
                        <img
                            src={logo}
                            alt="amar kitchen logo"
                            className={logoSize}
                        />
                        <div>
                            <h3 className={`berkshire-swash-regular font-semibold ${mainTextSize} text-[#442a00]`}>
                                Amar Kitchen
                            </h3>
                            <p className={`${subTextSize} text-yellow-500 oswald`}>
                                Food & Drink
                            </p>
                        </div>
                    </Link>
    );
};

export default Logo;