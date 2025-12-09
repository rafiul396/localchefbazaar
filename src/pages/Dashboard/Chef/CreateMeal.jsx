import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload } from "react-icons/fi";

const CreateMeal = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-primary text-center mb-10"
            >
                Create a New Meal
            </motion.h1>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Food Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Food Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>

                    {/* Chef Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Chef Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>

                    {/* Food Image Upload */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-gray-700 font-semibold mb-1">
                            Upload Food Image
                        </label>

                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <label className="w-full md:w-1/3 h-40 border-2 border-dashed border-primary rounded-xl flex items-center justify-center cursor-pointer hover:bg-primary/5 transition">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                <div className="flex flex-col items-center text-primary">
                                    <FiUpload size={30} />
                                    <p className="text-sm mt-1">Upload Image</p>
                                </div>
                            </label>

                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-40 h-40 rounded-xl object-cover shadow-md border"
                                />
                            )}
                        </div>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Price (৳)
                        </label>
                        <input
                            type="number"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Rating
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            step="0.1"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>

                    {/* Estimated Delivery Time */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Estimated Delivery Time
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. 30 minutes"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>

                    {/* Chef Experience */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Chef Experience
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. 5 years experience"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>

                    {/* Ingredients */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-gray-700 font-semibold mb-1">
                            Ingredients
                        </label>
                        <textarea
                            required
                            rows={4}
                            placeholder="List ingredients separated by commas"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        ></textarea>
                    </div>

                    {/* Chef ID */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Chef ID
                        </label>
                        <input
                            type="text"
                            readOnly
                            value="chef_123456"
                            className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 outline-none"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            User Email
                        </label>
                        <input
                            type="email"
                            readOnly
                            value="user@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl text-lg font-semibold shadow-md"
                        >
                            Submit Meal
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CreateMeal;