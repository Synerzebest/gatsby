import React from 'react';
import Link from 'next/link';

const Hours = () => {
    return (
        <div className="w-screen flex flex-col gap-8 border border-top border-bottom items-center justify-evenly relative top-[10rem] h-[350px]">
            <p className="text-3xl">Nos portes sont ouvertes</p>

            <div className="flex flex-col gap-2 items-center">
                <p className=" text-xl">Mardi - Dimanche</p>
                <p className="text-md text-gray-800">10h - 22h</p>
            </div>

            <Link href="/book" className="p-4 border bg-black text-white rounded-lg hover:bg-white hover:text-black duration-300">Réserver en ligne</Link>

        </div>
    )
}

export default Hours
