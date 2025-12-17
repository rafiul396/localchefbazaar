import React from 'react';
import Hero from '../../components/Hero/Hero';
import Container from '../../components/Layout/Container';
import FoodCard from '../../components/Food-Card/FoodCard';
import Meals from '../Meals/Meals';
import MealCard from '../../components/Cards/MealCard';
import Reviews from '../../components/Reviews/Reviews';
import BeAChef from '../../components/Be-A-Chef/BeAChef';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const Home = () => {
  const axiosSecure = useAxiosSecure()
  const { data: mealsData, isLoading } = useQuery({
    queryKey: ["homeMeals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals/top-rated");
      return res.data;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  console.log(mealsData);


  return (
    <>
      <Hero />
      <Container>
        <section className='bg-base-100 w-full py-20 overflow-y-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
              mealsData?.map(meal => <FoodCard key={meal._id} meal={meal} />)
            }
          </div>
        </section>
      </Container>
      <section className='py-20 bg-accent'>
        <Reviews />
      </section>
      <Container>
        <BeAChef />
      </Container>
    </>
  );
};

export default Home;