import React from 'react';
import Image from 'next/image';

const images = ["/slider1.jpeg", "/slider2.jpeg", "/slider3.jpeg", "/slider4.jpeg"];

const Slider = () => {
  return (
    <div className="w-full m-auto flex items-center overflow-x-scroll h-[600px] relative top-24">
      <div className="flex gap-[2rem] justify-center">
        {images.map((image, index) => (
          <div key={index} className="w-[300px] h-[300px] relative">
            <div className="w-full h-full relative m-auto">
              <Image
                alt="slider image"
                src={image}
                layout="fill"
                objectFit="contain"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
