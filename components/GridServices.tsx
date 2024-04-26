import React from 'react';
import { services } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const GridServices = () => {
    return (
        <div className="w-11/12 m-auto flex justify-evenly gap-4 flex-wrap relative top-[7rem]">
            { services.map((service, index) => (
                <div className="w-[280px] flex flex-col justify-between gap-[3rem] p-4 pt-8 rounded-lg shadow-lg" key={index}>
                    <div className="h-[300px] w-full relative">
                        <Image
                            alt="service image"
                            src={service.image}
                            layout="fill"
                            objectFit="contain"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-2xl text-center">{service.title}</p>
                        <hr></hr>
                    </div>

                    <div className="flex gap-[5px] items-center justify-center">
                        <p className="text-lg text-gray-500">{service.price}</p>
                        <p className="text-lg text-gray-500">-</p>
                        <p className="text-lg text-gray-500">{service.duration}</p>
                    </div>

                    <Link href="/book" className="p-4 border bg-black text-white text-center rounded-lg hover:bg-white hover:text-black duration-300">Réserver</Link>
                </div>
            ))}
        </div>
    )
}

export default GridServices
