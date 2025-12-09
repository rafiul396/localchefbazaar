import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaTruck, FaMoneyBill } from "react-icons/fa";

const MyOrders = () => {
    // SAMPLE STATIC DATA — replace with MongoDB data
    const orders = [
        {
            id: "ORD-001",
            foodName: "Grilled Chicken Salad",
            price: 280,
            quantity: 2,
            deliveryTime: "45 min",
            chefName: "Chef Rahim",
            chefId: "C101",
            orderStatus: "preparing", // pending | preparing | delivered
            paymentStatus: "pending", // pending | paid
        },
        {
            id: "ORD-002",
            foodName: "Beef Tehari",
            price: 320,
            quantity: 1,
            deliveryTime: "30 min",
            chefName: "Chef Anika",
            chefId: "C102",
            orderStatus: "pending",
            paymentStatus: "pending",
        },
        {
            id: "ORD-003",
            foodName: "Pasta Alfredo",
            price: 320,
            quantity: 1,
            deliveryTime: "50 min",
            chefName: "Chef Hasan",
            chefId: "C102",
            orderStatus: "delivered",
            paymentStatus: "paid",
        },
        {
            id: "ORD-003",
            foodName: "Pasta Alfredo",
            price: 320,
            quantity: 1,
            deliveryTime: "50 min",
            chefName: "Chef Hasan",
            chefId: "C102",
            orderStatus: "delivered",
            paymentStatus: "paid",
        },
        {
            id: "ORD-003",
            foodName: "Pasta Alfredo",
            price: 320,
            quantity: 1,
            deliveryTime: "50 min",
            chefName: "Chef Hasan",
            chefId: "C102",
            orderStatus: "delivered",
            paymentStatus: "paid",
        },
        {
            id: "ORD-003",
            foodName: "Pasta Alfredo",
            price: 320,
            quantity: 1,
            deliveryTime: "50 min",
            chefName: "Chef Hasan",
            chefId: "C102",
            orderStatus: "delivered",
            paymentStatus: "paid",
        },
        {
            id: "ORD-003",
            foodName: "Pasta Alfredo",
            price: 320,
            quantity: 1,
            deliveryTime: "50 min",
            chefName: "Chef Hasan",
            chefId: "C102",
            orderStatus: "delivered",
            paymentStatus: "paid",
        },
        {
            id: "ORD-003",
            foodName: "Pasta Alfredo",
            price: 320,
            quantity: 1,
            deliveryTime: "50 min",
            chefName: "Chef Hasan",
            chefId: "C102",
            orderStatus: "delivered",
            paymentStatus: "paid",
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "text-yellow-600 bg-yellow-100";
            case "preparing":
                return "text-blue-600 bg-blue-100";
            case "delivered":
                return "text-green-600 bg-green-100";
            default:
                return "";
        }
    };

    return (
        <div>
            {/* PAGE TITLE */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            >
                My Orders
            </motion.h1>

            {/* ORDERS GRID */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {orders.map((order) => (
                    <motion.div
                        key={order.id}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition"
                    >
                        {/* FOOD NAME */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            {order.foodName}
                        </h2>

                        {/* ORDER STATUS */}
                        <div className="flex items-center gap-2 mb-3">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                    order.orderStatus
                                )}`}
                            >
                                {order.orderStatus}
                            </span>

                            {/* Payment Status */}

                        </div>

                        <div className="space-y-2 text-sm text-gray-700">
                            <p>
                                <strong>Price:</strong> ৳{order.price}
                            </p>
                            <p>
                                <strong>Quantity:</strong> {order.quantity}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaClock className="text-primary" />{" "}
                                <span>
                                    <strong>Delivery Time:</strong> {order.deliveryTime}
                                </span>
                            </p>

                            <p className="mt-3 font-semibold text-gray-800">Chef Details:</p>
                            <p>
                                <strong>Name:</strong> {order.chefName}
                            </p>
                            <p>
                                <strong>Chef ID:</strong> {order.chefId}
                            </p>
                        </div>

                        {/* PAY BUTTON LOGIC */}
                        {order.orderStatus !== "pending" &&
                            order.paymentStatus === "pending" && (
                                <button
                                    className="w-full bg-primary hover:bg-green-700 text-white py-3 rounded-xl mt-6 flex items-center justify-center gap-2 font-semibold transition"
                                    onClick={() => console.log("Redirect to Stripe")}
                                >
                                    <FaMoneyBill /> Pay Now
                                </button>
                            )}

                        {order.paymentStatus === "paid" && (
                            <div className="mt-6 flex items-center justify-center gap-2 text-green-600 font-semibold">
                                <FaCheckCircle /> Payment Completed
                            </div>
                        )}

                        {order.orderStatus === "pending" && (
                            <div className="mt-6 flex items-center justify-center gap-2 text-green-600 font-semibold">
                                <FaCheckCircle /> Payment unlocks after order acceptance
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
export default MyOrders;