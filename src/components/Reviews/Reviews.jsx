// import React, { use } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import ReviewCard from '../Cards/ReviewCard';

// const Reviews = () => {
//     const reviews = [1, 2, 3, 4, 5]

//     return (
//         <div>
//             <div className='grid place-items-center mb-10'>
//                 <img src='#' alt="" />
//                 <h3 className='text-3xl font-semibold text-center mb-2'>
//                     What our customers are sayings
//                 </h3>
//                 <p className='w-1/2 text-center font-light text-base'>
//                     Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
//                 </p>
//             </div>
//             <Swiper
//                 loop={true}
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={false}   // Important Fix
//                 slidesPerView={3}
//                 coverflowEffect={{
//                     rotate: 45,
//                     stretch: 0,
//                     depth: 200,
//                     modifier: 1,
//                     slideShadows: true,
//                 }}
//                 pagination={true}
//                 autoplay={{
//                     delay: 2000,
//                     disableOnInteraction: false,
//                 }}
//                 modules={[EffectCoverflow, Pagination, Autoplay]}
//             >
//                 {reviews.map((reviewC, index) => (
//                     <SwiperSlide key={index}>
//                         <ReviewCard reviewC={reviewC} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//         </div>
//     );
// };

// export default Reviews;

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import ReviewCard from '../Cards/ReviewCard';

// const reviews = [
//   { id: 1, text: "Amazing food!" },
//   { id: 2, text: "Loved it!" },
//   { id: 3, text: "Best service ever!" },
//   { id: 4, text: "Outstanding!" },
//   { id: 5, text: "Highly recommended!" },
// ];

// export default function ReviewSlider() {
//   const [index, setIndex] = useState(0);

//   // Autoplay
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % reviews.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full flex justify-center items-center mt-10">
//       <div className="relative w-80 h-48">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5 }}

//           >
//             {/* {reviews[index].text} */}
//             <ReviewCard review={reviews[index].text} />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ReviewCard from '../Cards/ReviewCard';
import { div } from "motion/react-client";

const reviews = [
    { id: 1, text: "Amazing food & great service!" },
    { id: 2, text: "Loved it! Will order again." },
    { id: 3, text: "Best homemade meals ever!" },
    { id: 4, text: "Very fresh & delicious." },
    { id: 5, text: "Highly recommended!" },
];

export default function PremiumReviewSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 2600);
        return () => clearInterval(timer);
    }, []);

    const getVisibleCards = () => {
        const prev = (index - 1 + reviews.length) % reviews.length;
        const next = (index + 1) % reviews.length;
        return [prev, index, next];
    };

    return (
        <div>
            <div className="grid place-items-center">
                <h3 className='text-4xl xl:text-7xl font-semibold text-center mb-2 berkshire-swash-regular text-primary'>
                    Food That Touches Hearts
                </h3>
                <p className='w-1/2 text-center font-light text-lg xl:text-xl oswald text-accent-content'>
                    Discover how every homemade meal brings comfort, freshness, and real satisfaction.
                    Experience the taste that turns ordinary days into something truly special.
                </p>
            </div>
            <div className="w-full flex justify-center py-14">
                <div className="flex gap-4 md:gap-8 items-center">
                    {getVisibleCards().map((idx, position) => (
                        <motion.div
                            key={reviews[idx].id}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{
                                opacity: 1,
                                scale: position === 1 ? 1.15 : 0.9,
                                y: position === 1 ? 0 : 30,
                            }}
                            transition={{ duration: 0.6 }}
                            className={`${position === 1
                                ? "z-20 shadow-2xl"
                                : "z-10 opacity-70 shadow-lg"
                                } rounded-3xl`}
                        >
                            <ReviewCard review={reviews[idx]} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
