import React from 'react';
import { Link } from 'react-router';

const FoodCard = ({ meal }) => {
    const { chef_id, chef_name, food_image, food_name, food_price, food_rating } = meal;
    return (
        <Link>
            <div className="card bg-base-100 shadow-sm stalinist-one-regula">
                <figure>
                    <img
                        src={food_image}
                        alt="Shoes"
                        className='w-full h-72 object-cover' />
                </figure>
                <div className='p-4 space-y-4'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className="card-title">{food_name}</h2>
                        <p className='font-semibold'>৳{food_price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full border-primary shadow-none">Order Now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FoodCard;