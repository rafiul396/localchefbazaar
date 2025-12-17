import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaUserTie, FaUserEdit } from "react-icons/fa";
import useUser from "../../../hooks/useUser";

const AdminProfile = () => {
    const {userData: user} = useUser();
    // const user = {
    //     name: "Md. Arif Hasan",
    //     email: "arif@example.com",
    //     image: "https://randomuser.me/api/portraits/men/41.jpg",
    //     address: "Uttara, Dhaka",
    //     role: "admin", // user / chef / admin
    //     status: "active", // active / fraud
    //     chefId: "C101",
    // };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="w-full mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 oswald"
            >
                {/* Header */}
                <div className="flex items-center gap-6 border-b pb-6">
                    <img
                        src={user.userPhoto}
                        alt={user.userName}
                        className="w-24 h-24 rounded-2xl shadow-md object-cover"
                    />

                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            {user.userName}
                        </h1>
                        <p className="text-gray-500">{user.userEmail}</p>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <InfoCard label="Address" value={user.userAddress} />
                    <InfoCard label="Role" value={user.userRole.toUpperCase()} />

                    <InfoCard
                        label="Status"
                        value={
                            <span
                                className={`font-semibold ${user.userStatus === "active"
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                            >
                                {user.userStatus}
                            </span>
                        }
                    />

                    {user.role === "chef" && (
                        <InfoCard label="Chef ID" value={user.chefId} />
                    )}
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
export default AdminProfile;