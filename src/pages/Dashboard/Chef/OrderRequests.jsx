import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaTruck } from "react-icons/fa";

const OrderRequests = () => {

  // STATIC ORDER DATA (you can replace later with API)
  const userChefId = "chef-101"; // logged-in chef ID

  const orders = [
    {
      _id: "1",
      foodName: "Grilled Chicken Salad",
      price: 280,
      quantity: 2,
      orderStatus: "pending",
      userEmail: "john@example.com",
      userAddress: "Uttara, Dhaka",
      orderTime: "2025-02-12 10:30 AM",
      paymentStatus: "pending",
      chefId: "chef-101",
    },
    {
      _id: "2",
      foodName: "Beef Tehari",
      price: 350,
      quantity: 1,
      orderStatus: "accepted",
      userEmail: "sara@example.com",
      userAddress: "Banani, Dhaka",
      orderTime: "2025-02-11 09:00 PM",
      paymentStatus: "pending",
      chefId: "chef-101",
    },
    {
      _id: "3",
      foodName: "Pasta Alfredo",
      price: 300,
      quantity: 1,
      orderStatus: "delivered",
      userEmail: "michael@example.com",
      userAddress: "Mirpur, Dhaka",
      orderTime: "2025-02-10 07:20 PM",
      paymentStatus: "paid",
      chefId: "chef-101",
    },
    {
      _id: "4",
      foodName: "Vegetable Khichuri",
      price: 180,
      quantity: 3,
      orderStatus: "cancelled",
      userEmail: "rahim@example.com",
      userAddress: "Dhanmondi, Dhaka",
      orderTime: "2025-02-09 12:10 PM",
      paymentStatus: "pending",
      chefId: "chef-101",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-gray-100 px-4 md:px-6 py-12 inter">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
      >
        Order Requests
      </motion.h1>

      {/* Order Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders
          .filter((order) => order.chefId === userChefId)
          .map((order) => {
            const isCancelled = order.orderStatus === "cancelled";
            const isAccepted = order.orderStatus === "accepted";
            const isDelivered = order.orderStatus === "delivered";
            const isPending = order.orderStatus === "pending";

            return (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 space-y-4 hover:shadow-xl transition-all"
              >
                {/* Food Name + Price */}
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {order.foodName}
                  </h2>
                  <span className="text-lg font-bold text-primary">
                    ৳{order.price}
                  </span>
                </div>

                {/* Quantity */}
                <p className="text-sm text-gray-700">
                  Quantity:{" "}
                  <span className="font-semibold">{order.quantity}</span>
                </p>

                {/* Order Status */}
                <p className="text-sm">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      isCancelled
                        ? "text-red-600"
                        : isDelivered
                        ? "text-green-700"
                        : isAccepted
                        ? "text-indigo-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </p>

                {/* Payment */}
                <p className="text-sm">
                  Payment:{" "}
                  <span
                    className={`font-semibold ${
                      order.paymentStatus === "paid"
                        ? "text-green-700"
                        : "text-red-500"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </p>

                {/* User Email */}
                <p className="text-sm text-gray-700 break-all">
                  User Email: <span className="font-semibold">{order.userEmail}</span>
                </p>

                {/* Address */}
                <p className="text-sm text-gray-700">
                  Address:{" "}
                  <span className="font-semibold">{order.userAddress}</span>
                </p>

                {/* Order Time */}
                <p className="text-xs text-gray-500">
                  Ordered At: {order.orderTime}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  {/* Cancel */}
                  <button
                    disabled={!isPending}
                    className={`
                      flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg text-sm font-medium shadow-md transition
                      ${
                        !isPending
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-600 text-white"
                      }`}
                  >
                    <FaTimes /> Cancel
                  </button>

                  {/* Accept */}
                  <button
                    disabled={!isPending}
                    className={`
                      flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg text-sm font-medium shadow-md transition
                      ${
                        !isPending
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                  >
                    <FaCheck /> Accept
                  </button>

                  {/* Deliver */}
                  <button
                    disabled={!isAccepted}
                    className={`
                      flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg text-sm font-medium shadow-md transition
                      ${
                        !isAccepted
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-primary hover:bg-[#4f6a32] text-white"
                      }`}
                  >
                    <FaTruck /> Deliver
                  </button>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
export default OrderRequests;