import React from "react";
import { motion } from "framer-motion";

const ManageUsers = () => {

  // Dummy users for design purpose
  const users = [
    {
      name: "Sarah Ahmed",
      email: "sarah@gmail.com",
      role: "user",
      status: "active",
    },
    {
      name: "Chef Rahim",
      email: "rahimchef@gmail.com",
      role: "chef",
      status: "active",
    },
    {
      name: "Admin Akash",
      email: "akashadmin@gmail.com",
      role: "admin",
      status: "active",
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "user",
      status: "fraud",
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
        <p className="text-gray-500 mt-1">
          View and manage all registered users on the platform.
        </p>
      </div>

      {/* Table Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.4 }}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
      >
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="py-4">User Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">

              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">

                  {/* Name */}
                  <td className="py-4 font-medium">{user.name}</td>

                  {/* Email */}
                  <td>{user.email}</td>

                  {/* Role Badge */}
                  <td>
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-semibold 
                      ${user.role === "admin" 
                        ? "bg-purple-100 text-purple-700" 
                        : user.role === "chef" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td>
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-semibold 
                      ${user.status === "fraud"
                        ? "bg-red-100 text-red-700"
                        : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* Action Button */}
                  <td className="text-center">
                    {user.role === "admin" ? (
                      <button 
                        disabled 
                        className="btn btn-sm opacity-40 cursor-not-allowed"
                      >
                        Make Fraud
                      </button>
                    ) : user.status === "fraud" ? (
                      <button 
                        disabled 
                        className="btn btn-sm bg-red-500/20 text-red-500 border-none cursor-not-allowed"
                      >
                        Already Fraud
                      </button>
                    ) : (
                      <button 
                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-red-500 shadow-none"
                      >
                        Make Fraud
                      </button>
                    )}
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
export default ManageUsers;