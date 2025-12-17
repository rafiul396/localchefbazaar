import React from 'react';
import FoodCard from './FoodCard';

const TopRatedMeals = ({ mealsData, isLoading }) => {

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <section className='bg-base-100 w-full py-20 overflow-y-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    mealsData?.map(meal => <FoodCard key={meal._id} meal={meal} />)
                }
            </div>
        </section>
    );
};

export default TopRatedMeals;