import React from "react";
import { motion } from "framer-motion";
import ReviewDetails from "./ReviewDetails";
import OrderPage from "../Order/OrderPage";
import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";




export default function MealDetails() {
    const { user, loading } = useAuth();
    const [openOrder, setOpenOrder] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { mealId } = useParams();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["meal", mealId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/meals/${mealId}`);
            return res.data;
        }
    })

    const { data: customer, isLoading: customerLoading } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        }
    })

    if (loading || isLoading || customerLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gray-50 pb-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-80 md:h-[420px] overflow-hidden rounded-b-3xl"
                >
                    <img
                        src={data?.foodImage}
                        alt={data?.footName}
                        className="w-full h-full object-cover rounded-b-3xl shadow-lg"
                    />
                </motion.div>


                <div className="max-w-4xl mx-auto px-5 mt-8">


                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary berkshire-swash-regular">
                            {data?.foodName}
                        </h1>
                        <span className="text-2xl font-semibold text-accent-content">
                            ৳{data?.price}
                        </span>
                    </div>


                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-yellow-500 text-xl">★</span>
                        <p className="text-gray-700 text-sm font-medium">
                            {data?.rating} / 5
                        </p>
                    </div>


                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-md border border-gray-100">
                        <h2 className="text-lg font-semibold mb-2">Prepared by</h2>
                        <p className="text-xl font-bold text-gray-800">{data?.chefName}</p>

                        <p className="mt-1 text-gray-600 text-sm">
                            Experience:{" "}
                            <span className="font-semibold">{data?.chefExperience}</span>
                        </p>

                        <p className="text-gray-600 text-sm">
                            Chef ID: <span className="font-semibold">{data?.chefId}</span>
                        </p>
                    </div>

                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-md border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3">Ingredients</h2>

                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data?.ingredients.map((item, index) => (
                                <li key={index} className="text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-md border border-gray-100">
                        <h2 className="text-lg font-semibold mb-3">Delivery Information</h2>

                        <p className="text-gray-700 text-sm">
                            Delivery Area:{" "}
                            <span className="font-semibold text-gray-900">
                                No
                            </span>
                        </p>

                        <p className="text-gray-700 text-sm mt-1">
                            Estimated Delivery Time:{" "}
                            <span className="font-semibold text-green-600">
                                {data?.estimatedDeliveryTime}
                            </span>
                        </p>
                    </div>

                    <div className="mt-10">
                        <motion.button
                            disabled={customer?.userStatus === "fraud"}
                            onClick={() => setOpenOrder(data)}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full py-5 rounded-xl text-lg font-semibold text-white ${customer?.userStatus === "fraud" ? "bg-gray-300 text-gray-600 cursor-no-drop" : "bg-primary text-white cursor-pointer"}`}
                        >
                            Order Now
                        </motion.button>
                    </div>
                </div>
            </div>
            {/* Review Section */}
            <ReviewDetails />

            {/* Order Modal */}
            {openOrder && (<OrderPage meal={openOrder}
                onClose={() => setOpenOrder(null)}
                refetch={refetch} />)}
        </>
    );
}
