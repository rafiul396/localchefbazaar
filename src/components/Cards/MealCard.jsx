import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MealCard = ({ meal }) => {
    const { chef_id, chef_name, food_image, food_name, food_price, food_rating, delivery_area } = meal;
    return (
            <div className="card bg-base-100 shadow-sm stalinist-one-regula text-black" data-aos="zoom-in">
                <figure>
                    <img
                        src={food_image}
                        alt="Shoes"
                        className='w-full h-72 object-cover' />
                </figure>
                <div className='p-4 space-y-4'>
                    <div>
                        <div className='w-full flex justify-between items-center'>
                            <h2 className="card-title">{food_name}</h2>
                            <p className='font-semibold'>৳{food_price}</p>
                        </div>
                        <p><span className='font-semibold'>Chef Name :</span> {chef_name}</p>
                        <p><span className='font-semibold'>Chef ID :</span> {chef_id}</p>
                        <p><span className='font-semibold'>Delivery Area :</span> {delivery_area}</p>
                        <p className='flex items-center gap-2'><span className='font-semibold'>Rating :</span> <FaStar className='text-yellow-500' /> {food_rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary w-full border-primary shadow-none" to="/meals/meal-details" >See Details</Link>
                    </div>
                </div>
            </div>
    );
};

export default MealCard;