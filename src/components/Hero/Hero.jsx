import React, { useEffect } from 'react';
import heroChef from '../../assets/chef.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });
        AOS.refresh();
    }, []);

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.05, // letter delay
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const text = `Delicious home made <br/> food For today`;
    const parts = text.split("<br/>");

    return (
        <section className='w-screen min-h-screen bg-[#f7f2e2] flex flex-col justify-center items-center pt-10 overflow-y-hidden'>
            <div>
                <h2 className='font-bold stalinist-one-regular text-lg text-red-500 text-center' data-aos="fade-down">
                    Feed yourself with home made food
                </h2>
                {/* <h1 className='text-center text-7xl font-bold mt-4'>
                    Delicious home made <br /> food For today
                </h1> */}
                <motion.h1
                    className="text-center text-7xl font-bold"
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {parts.map((part, partIndex) => (
                        <span key={partIndex}>
                            {part.split("").map((char, i) => (
                                <motion.span key={`${partIndex}-${i}`} variants={letter}>
                                    {char}
                                </motion.span>
                            ))}

                            {/* Insert actual line break for each <br/> */}
                            {partIndex !== parts.length - 1 && <br />}
                        </span>
                    ))}
                </motion.h1>
            </div>
            <div className='w-96 flex justify-center' data-aos="fade-up" >
                <img src={heroChef} alt="picture of chef" />
            </div>
        </section>
    );
};

export default Hero;