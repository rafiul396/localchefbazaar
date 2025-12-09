import React from "react";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";

const FavoriteMeal = () => {
  // Temporary sample data
  const favorites = [
    {
      id: "fav001",
      mealName: "Grilled Chicken Salad",
      chefName: "Chef Rahim",
      price: 280,
      dateAdded: "Jan 20, 2025",
    },
    {
      id: "fav002",
      mealName: "Beef Tehari",
      chefName: "Chef Anika",
      price: 320,
      dateAdded: "Feb 02, 2025",
    },
    {
      id: "fav003",
      mealName: "Vegetable Khichuri",
      chefName: "Chef Tanvir",
      price: 180,
      dateAdded: "Feb 10, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-gray-100 px-4 md:px-8 py-12 inter">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
      >
        Favorite Meals
      </motion.h1>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-x-auto">

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-5 bg-gray-100 py-4 px-6 text-sm font-semibold text-gray-700">
          <p>Meal Name</p>
          <p>Chef Name</p>
          <p>Price</p>
          <p>Date Added</p>
          <p className="text-center">Actions</p>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100">
          {favorites.map((fav) => (
            <motion.div
              key={fav.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6 px-6 text-sm md:items-center hover:bg-gray-50 transition"
            >
              {/* Meal Name */}
              <div className="md:hidden">
                <p className="text-xs text-gray-500">Meal Name</p>
                <p className="font-semibold text-gray-900">{fav.mealName}</p>
              </div>
              <p className="hidden md:block font-semibold text-gray-900">{fav.mealName}</p>

              {/* Chef Name */}
              <div className="md:hidden">
                <p className="text-xs text-gray-500">Chef</p>
                <p className="text-gray-700">{fav.chefName}</p>
              </div>
              <p className="hidden md:block text-gray-700">{fav.chefName}</p>

              {/* Price */}
              <div className="md:hidden">
                <p className="text-xs text-gray-500">Price</p>
                <p className="font-medium text-gray-800">৳{fav.price}</p>
              </div>
              <p className="hidden md:block font-medium text-gray-800">৳{fav.price}</p>

              {/* Date Added */}
              <div className="md:hidden">
                <p className="text-xs text-gray-500">Date</p>
                <p className="text-gray-600">{fav.dateAdded}</p>
              </div>
              <p className="hidden md:block text-gray-600">{fav.dateAdded}</p>

              {/* Delete Button */}
              <div className="flex md:justify-center">
                <button
                  className="
                    flex items-center gap-2 
                    bg-red-100 text-red-600 
                    px-4 py-2 rounded-lg text-sm 
                    hover:bg-red-200 
                    transition shadow-sm
                  "
                >
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FavoriteMeal;