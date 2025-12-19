import React from 'react';
import Container from '../../components/Layout/Container';
import MealCard from '../../components/Cards/MealCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

// const mealsData = [
//     {
//         "chef_id": "C101",
//         "chef_name": "Chef Rahim",
//         "food_name": "Grilled Chicken Salad",
//         "food_image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
//         "food_price": 280,
//         "food_rating": 4.7,
//         "delivery_area": "Uttara, Bashundhara, Nikunjo"
//     },
//     {
//         "chef_id": "C102",
//         "chef_name": "Chef Anika",
//         "food_name": "Beef Tehari",
//         "food_image": "https://punguskitchen.com/wp-content/uploads/2025/03/Tehari-is-a-fragrant-and-flavorful-rice-dish-made-with-beef-aromatic-spices_pungus-kitchen-4.jpg",
//         "food_price": 320,
//         "food_rating": 4.8,
//         "delivery_area": "Mirpur, Kazipara, Shewrapara"
//     },
//     {
//         "chef_id": "C103",
//         "chef_name": "Chef Tanvir",
//         "food_name": "Vegetable Khichuri",
//         "food_image": "https://i.ytimg.com/vi/GDgQuZp1WLw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB9JioG9HxHbdu4-KSTC-3RWOC8Ug",
//         "food_price": 180,
//         "food_rating": 4.5,
//         "delivery_area": "Dhanmondi, Mohammadpur, Lalmatia"
//     },
//     {
//         "chef_id": "C104",
//         "chef_name": "Chef Misha",
//         "food_name": "Fried Rice with Chicken",
//         "food_image": "https://nkechiajaeroh.com/wp-content/uploads/2020/12/Nigerian-fried-rice-recipe-main-photo-3-768x768.jpg",
//         "food_price": 260,
//         "food_rating": 4.6,
//         "delivery_area": "Banani, Gulshan, Baridhara"
//     },
//     {
//         "chef_id": "C105",
//         "chef_name": "Chef Hasan",
//         "food_name": "Pasta Alfredo",
//         "food_image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
//         "food_price": 300,
//         "food_rating": 4.9,
//         "delivery_area": "Banasree, Rampura, Aftabnagar"
//     },
//     {
//         "chef_id": "C106",
//         "chef_name": "Chef Riya",
//         "food_name": "Fish Curry with Rice",
//         "food_image": "https://images.unsplash.com/photo-1562967914-608f82629710",
//         "food_price": 240,
//         "food_rating": 4.7,
//         "delivery_area": "Jatrabari, Motijheel, Khilgaon"
//     }
// ]

const Meals = () => {
    const axiosSecure = useAxiosSecure()
    const {data: mealsData = [], isLoading} = useQuery({
        queryKey: ["meals"],
        queryFn: async () => {
            const res = await axiosSecure.get("/meals")
            return res.data
        }
    })

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <section>
            <title>Meals | GhorerChef</title>
            <Container>
                <section className='bg-base-100 w-full py-20 overflow-y-hidden'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            mealsData.map(meal => <MealCard key={meal._id} meal={meal} />)
                        }
                    </div>
                </section>
            </Container>
        </section>
    )
};

export default Meals;