import React from 'react';
import { motion } from "framer-motion";

const OrderPage = ({ setOpenOrder }) => {
    return (
        <div className="fixed inset-0 backdrop-blur-xl bg-white/60 flex justify-center items-center z-50 px-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl"
            >
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                        Confirm Your Order
                    </h2>
                    <button
                        onClick={() => setOpenOrder(false)}
                        className="text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <input
                        className="w-full border rounded-lg px-4 py-2"
                        readOnly
                    />
                    <input
                        className="w-full border rounded-lg px-4 py-2"
                        readOnly
                    />
                    <input
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Quantity"
                        type="number"
                        min="1"
                        required
                    />
                    <input
                        className="w-full border rounded-lg px-4 py-2"
                        readOnly
                    />
                    <input
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Your Email"
                        type="email"
                        required
                    />
                    <textarea
                        className="w-full border rounded-lg px-4 py-2"
                        placeholder="Your Address"
                        required
                    ></textarea>
                    <input
                        className="w-full border rounded-lg px-4 py-2"
                        value="Pending"
                        readOnly
                    />
                    <input
                        className="w-full border rounded-lg px-4 py-2"
                        value={new Date().toLocaleString()}
                        readOnly
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg text-white font-semibold text-lg"
                        style={{ backgroundColor: "#ff8400" }}
                    >
                        Confirm Order
                    </button>
                </form>

                {/* <button
                    onClick={() => setOpenOrder(false)}
                    className="w-full py-3 rounded-lg text-white font-semibold text-lg bg-red-500"
                >
                    Cancel
                </button> */}
            </motion.div>
        </div>
    );
};

export default OrderPage;