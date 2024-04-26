"use client"

import React from 'react';
import Carousel from './Carousel';

const Hero = () => {
    
    return (
        <div className="w-screen flex flex-col items-center relative top-12 gap-12">
            <div>
                <p className="text-4xl">Gatsby Barbershop</p>
            </div>

            <Carousel />
        </div>
    );
};

export default Hero;
