import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { text } = review
    return (
        <div className="backdrop-blur-xl bg-white/60 border border-white/20 
            rounded-3xl p-6 w-48 md:w-72 lg:w-80 h-fit text-center">
            {/* Quote Icon */}
            <div className="text-teal-300 text-4xl mb-4">
                <FaUserCircle />
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {text}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-primary my-4"></div>

            {/* Profile Section */}
            <div className="flex items-center gap-3">
                {/* Circle Avatar Placeholder */}
                <div></div>
                <img className="w-10 h-10 rounded-full bg-teal-900" src="#" alt="" />
                <div>
                    <h3 className="font-semibold text-gray-800">
                        userNme
                    </h3>
                    <p className="text-sm text-gray-500">
                        {/* {new Date(reviewC.date).toLocaleDateString()} */}
                        date
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;