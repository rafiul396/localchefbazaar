import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import ReviewModal from "../MealDetails/ReviewModal"


const ReviewDetails = ({ mealId, user }) => {
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
                {/* Add Favorite */}
                <button
                    className="btn btn-primary border-primary shadow-none py-8 px-8 rounded-xl text-lg font-semibold text-white"
                >
                    <FaHeart />
                    Add to Favorite
                </button>
            </div>

            {/* Modal */}
            {
                open && <ReviewModal setOpen={setOpen} user={user} mealId={mealId}  />
            }
        </div>
    );
};

export default ReviewDetails;
