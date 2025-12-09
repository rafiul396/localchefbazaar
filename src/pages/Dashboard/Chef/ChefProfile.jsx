import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaUserTie, FaUserEdit } from "react-icons/fa";

const ChefProfile = () => {
    const user = {
        name: "Md. Arif Hasan",
        email: "arif@example.com",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        address: "Uttara, Dhaka",
        role: "chef", // user / chef / admin
        status: "active", // active / fraud
        chefId: "C101",
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-accent to-gray-100 py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="w-full mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
            >
                {/* Header */}
                <div className="flex items-center gap-6 border-b pb-6">
                    <img
                        src={user.image}
                        alt={user.name}
                        className="w-24 h-24 rounded-2xl shadow-md object-cover"
                    />

                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            {user.name}
                        </h1>
                        <p className="text-gray-500">{user.email}</p>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <InfoCard label="Address" value={user.address} />
                    <InfoCard label="Role" value={user.role.toUpperCase()} />

                    <InfoCard
                        label="Status"
                        value={
                            <span
                                className={`font-semibold ${user.status === "active"
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                            >
                                {user.status}
                            </span>
                        }
                    />

                    {user.role === "chef" && (
                        <InfoCard label="Chef ID" value={user.chefId} />
                    )}
                </div>

                {/* Actions */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl shadow-md"
                    >
                        <FaUserShield />
                        Be an Admin
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}

function InfoCard({ label, value }) {
    return (
        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-xs font-semibold text-gray-500 mb-1">{label}</p>
            <p className="text-[15px] font-medium text-gray-800">{value}</p>
        </div>
    );
}
export default ChefProfile;