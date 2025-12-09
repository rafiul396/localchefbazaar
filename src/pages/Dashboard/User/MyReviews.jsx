import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";

const MyReviews = () => {
  // SAMPLE DATA
  const [reviews, setReviews] = useState([
    {
      id: 1,
      mealName: "Grilled Chicken Salad",
      rating: 5,
      comment: "Absolutely delicious and fresh!",
      date: "2025-02-10",
    },
    {
      id: 2,
      mealName: "Beef Tehari",
      rating: 4,
      comment: "Great taste, packing could be better.",
      date: "2025-01-12",
    },
  ]);

  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [updatedData, setUpdatedData] = useState({ rating: 0, comment: "" });

  // Update Review Submit
  const handleUpdate = () => {
    setReviews((prev) =>
      prev.map((item) =>
        item.id === editModal ? { ...item, ...updatedData } : item
      )
    );
    setEditModal(null);
  };

  // Delete Review
  const handleDelete = () => {
    setReviews((prev) => prev.filter((item) => item.id !== deleteModal));
    setDeleteModal(null);
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        My Reviews
      </h1>

      <div className="space-y-6">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
          >
            {/* Meal Name + Date */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {review.mealName}
              </h2>
              <p className="text-gray-500 text-sm">
                {new Date(review.date).toDateString()}
              </p>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mt-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 mt-3 text-sm leading-relaxed">
              {review.comment}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-5">
              <button
                onClick={() => {
                  setUpdatedData({
                    rating: review.rating,
                    comment: review.comment,
                  });
                  setEditModal(review.id);
                }}
                className="flex items-center gap-2 bg-primary text-info-content px-4 py-2 rounded-lg text-sm shadow cursor-pointer"
              >
                <FaEdit /> Update
              </button>

              <button
                onClick={() => setDeleteModal(review.id)}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-info-content px-4 py-2 rounded-lg text-sm shadow cursor-pointer"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= UPDATE MODAL ================= */}
      <AnimatePresence>
        {editModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Update Review</h3>

              {/* Rating */}
              <label className="text-sm font-medium">Rating</label>
              <input
                type="number"
                min="1"
                max="5"
                value={updatedData.rating}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, rating: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 mt-1 mb-4"
              />

              {/* Comment */}
              <label className="text-sm font-medium">Comment</label>
              <textarea
                value={updatedData.comment}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, comment: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 mt-1 h-28"
              ></textarea>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setEditModal(null)}
                  className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= DELETE MODAL ================= */}
      <AnimatePresence>
        {deleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Delete Review?</h3>
              <p className="text-gray-600 text-sm mb-6">
                Are you sure you want to delete this review? This action cannot
                be undone.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteModal(null)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default MyReviews;