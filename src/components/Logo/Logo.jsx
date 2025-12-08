import React from 'react';
import logo from '../../assets/logo.png'

const Logo = ({ mainTextSize, subTextSize, logoSize }) => {
    return (
        <a className='flex items-center gap-2 cursor-pointer'href='/' >
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
                    </a>
    );
};

export default Logo;