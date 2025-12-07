import React from "react";
import { motion } from "framer-motion";
import ReviewDetails from "./ReviewDetails";
import OrderPage from "../Order/OrderPage";
import { useState } from "react";




export default function MealDetails() {
    const [openOrder, setOpenOrder] = useState(false);
    // Hardcoded sample data
    const food_name = "Grilled Chicken Salad";
    const food_image =
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141";
    const food_price = 280;
    const food_rating = 4.7;
    const chef_name = "Chef Rahim";
    const chef_id = "C101";
    const chef_experience = "5+ years of home cooking";
    const delivery_area = "Dhaka, Uttara, Mirpur, Banani";
    const estimated_delivery_time = "30 - 45 minutes";
    const ingredients = [
        "Fresh chicken breast",
        "Lettuce",
        "Cherry tomatoes",
        "Olive oil",
        "Black pepper",
        "Lemon dressing",
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50 pb-16">
                {/* Top Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-80 md:h-[420px] overflow-hidden rounded-b-3xl"
                >
                    <img
                        src={food_image}
                        alt={food_name}
                        className="w-full h-full object-cover rounded-b-3xl shadow-lg"
                    />
                </motion.div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-5 mt-8">

                    {/* Title + Price */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary berkshire-swash-regular">
                            {food_name}
                        </h1>
                        <span className="text-2xl font-semibold text-accent-content">
                            ৳{food_price}
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-yellow-500 text-xl">★</span>
                        <p className="text-gray-700 text-sm font-medium">
                            {food_rating} / 5
                        </p>
                    </div>

                    {/* Chef Info */}
                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-md border border-gray-100">
                        <h2 className="text-lg font-semibold mb-2">Prepared by</h2>
                        <p className="text-xl font-bold text-gray-800">{chef_name}</p>

                        <p className="mt-1 text-gray-600 text-sm">
                            Experience:{" "}
                            <span className="font-semibold">{chef_experience}</span>
                        </p>

                        <p className="text-gray-600 text-sm">
                            Chef ID: <span className="font-semibold">{chef_id}</span>
                        </p>
                    </div>

                    {/* Ingredients */}
                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-md border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3">Ingredients</h2>

                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {ingredients.map((item, index) => (
                                <li key={index} className="text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Delivery Info */}
                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-md border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3">Delivery Information</h2>

                        <p className="text-gray-700 text-sm">
                            Delivery Area:{" "}
                            <span className="font-semibold text-gray-900">
                                {delivery_area}
                            </span>
                        </p>

                        <p className="text-gray-700 text-sm mt-1">
                            Estimated Delivery Time:{" "}
                            <span className="font-semibold text-green-600">
                                {estimated_delivery_time}
                            </span>
                        </p>
                    </div>

                    {/* Order Button */}
                    <div className="mt-10">
                        <motion.button
                            onClick={() => setOpenOrder(true)}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-5 rounded-xl text-lg font-semibold text-white"
                            style={{ backgroundColor: "#628141" }}
                        >
                            Order Now
                        </motion.button>
                    </div>
                </div>
            </div>
            {/* Review Section */}
            <ReviewDetails />

            {/* Order Modal */}
            {openOrder && (<OrderPage setOpenOrder={setOpenOrder} />)}
        </>
    );
}
