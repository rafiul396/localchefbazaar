import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const ReviewDetails = () => {
    const [open, setOpen] = useState(false);
    const [reviewForm, setReviewForm] = useState({
        reviewer_name: "",
        rating: 5,
        comment: ""
    });

    const reviews = [
        {
            reviewer_name: "Sarah Akter",
            reviewer_image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            comment: "The food tasted absolutely delicious! It felt like pure homemade comfort.",
            date: "Jan 12, 2025"
        },
        {
            reviewer_name: "Rahim Uddin",
            reviewer_image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 4,
            comment: "Great taste, fresh ingredients, fast delivery! Will order again.",
            date: "Feb 03, 2025"
        },
        {
            reviewer_name: "Maya Chowdhury",
            reviewer_image: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
            comment: "Amazing quality and well-packed. Chef’s cooking was outstanding.",
            date: "Feb 10, 2025"
        }
    ];

    // Handle form input
    const handleChange = (e) => {
        setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted Review:", reviewForm);

        // Close modal
        setOpen(false);

        // Reset form
        setReviewForm({
            reviewer_name: "",
            rating: 5,
            comment: ""
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-5 py-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Customer Reviews
            </h2>

            {/* Reviews List */}
            <div className="space-y-6">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-2xl shadow-md border border-gray-100"
                    >
                        <div className="flex gap-4 items-start">
                            <img
                                src={review.reviewer_image}
                                alt={review.reviewer_name}
                                className="w-14 h-14 rounded-full object-cover shadow-sm"
                            />

                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {review.reviewer_name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{review.date}</p>
                                </div>

                                <div className="flex items-center mt-1">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-lg">★</span>
                                    ))}
                                </div>

                                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                                    {review.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Give Review Button */}
            <div className="mt-8 flex justify-between">
                <button
                    onClick={() => setOpen(true)}
                    className="btn btn-primary border-primary shadow-none py-8 px-8 rounded-xl text-lg font-semibold text-white"
                >
                    Give Review
                </button>
                <button
                    onClick={() => setOpen(true)}
                    className="btn btn-primary border-primary shadow-none py-8 px-8 rounded-xl text-lg font-semibold text-white"
                >
                    <FaHeart />
                    Add to Favorite
                </button>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 animate-fadeIn">

                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Write a Review</h3>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Name */}
                            <input
                                type="text"
                                name="reviewer_name"
                                value={reviewForm.reviewer_name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-200 outline-none"
                            />

                            {/* Rating */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Rating
                                </label>
                                <select
                                    name="rating"
                                    value={reviewForm.rating}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-200 outline-none"
                                >
                                    {[5, 4, 3, 2, 1].map((r) => (
                                        <option key={r} value={r}>
                                            {r} Stars
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Comment */}
                            <textarea
                                name="comment"
                                value={reviewForm.comment}
                                onChange={handleChange}
                                placeholder="Write your review..."
                                rows="4"
                                required
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-200 outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full btn btn-primary border-primary shadow-none py-8 rounded-xl text-lg font-semibold text-white"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewDetails;
