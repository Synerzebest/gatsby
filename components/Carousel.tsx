"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);
    
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="shadow-lg h-[450px] w-full relative overflow-hidden">
            <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                <Image src="/image1.jpeg" alt="Image 1" layout="fill" objectFit="cover" />
            </div>

            <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <Image src="/image2.jpeg" alt="Image 2" layout="fill" objectFit="cover" />
            </div>

            <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
                <Image src="/image3.jpeg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Carousel
