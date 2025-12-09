import React from "react";
import { motion } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";

const MyMeals = () => {
  // Sample meals (replace with MongoDB data)
  const meals = [
    {
      _id: "1",
      foodName: "Grilled Chicken Salad",
      foodImage: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
      price: 280,
      rating: 4.7,
      ingredients: ["Chicken", "Lettuce", "Olive Oil"],
      estimatedDeliveryTime: "30 minutes",
      chefName: "Chef Rahim",
      chefId: "C101",
    },
    {
      _id: "2",
      foodName: "Beef Tehari",
      foodImage:
        "https://punguskitchen.com/wp-content/uploads/2025/03/Tehari-is-a-fragrant-and-flavorful-rice-dish-made-with-beef-aromatic-spices_pungus-kitchen-4.jpg",
      price: 320,
      rating: 4.8,
      ingredients: ["Beef", "Rice", "Spices"],
      estimatedDeliveryTime: "40 minutes",
      chefName: "Chef Rahim",
      chefId: "C101",
    },
  ];

  return (
    <div>
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
      >
        My Meals
      </motion.h1>

      {/* Meals Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {meals.map((meal) => (
          <motion.div
            key={meal._id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all group"
          >
            {/* Image */}
            <div className="w-full h-60 overflow-hidden">
              <img
                src={meal.foodImage}
                alt={meal.foodName}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                {meal.foodName}
              </h2>

              {/* Price + Rating */}
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <p>৳{meal.price}</p>
                <p className="text-yellow-500">⭐ {meal.rating}</p>
              </div>

              {/* Ingredients */}
              <div>
                <p className="text-xs text-gray-500 mb-1">Ingredients:</p>
                <p className="text-sm text-gray-700 truncate">
                  {meal.ingredients.join(", ")}
                </p>
              </div>

              {/* Delivery time */}
              <p className="text-sm text-gray-700">
                Delivery:{" "}
                <span className="font-semibold">
                  {meal.estimatedDeliveryTime}
                </span>
              </p>

              {/* Chef information */}
              <div className="text-xs text-gray-500">
                <p>
                  Chef: <span className="font-semibold">{meal.chefName}</span>
                </p>
                <p>
                  ID: <span className="font-semibold">{meal.chefId}</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-info-content px-4 py-2 rounded-lg text-sm shadow-md transition cursor-pointer">
                  <FaTrash /> Delete
                </button>

                <button className="flex items-center gap-2 bg-primary text-info-content px-4 py-2 rounded-lg text-sm shadow-md transition cursor-pointer">
                  <FaEdit /> Update
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default MyMeals