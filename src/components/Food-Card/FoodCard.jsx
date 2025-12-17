import React from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FoodCard = ({ meal }) => {
    const { foodName, foodImage, price, rating, _id } = meal;

    return (
        <Link to={`/meals/${_id}`} data-aos="zoom-in">
            <div className="card bg-base-100 shadow-sm stalinist-one-regula">
                <figure>
                    <img
                        src={foodImage}
                        alt={foodName}
                        className='w-full h-72 object-cover' />
                </figure>
                <div className='p-4 space-y-4'>
                    <div className='w-full flex justify-between items-center'>
                        <h2 className="card-title">{foodName}</h2>
                        <p className='font-semibold'>৳{price}</p>
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