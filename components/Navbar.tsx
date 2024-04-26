"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const logo = "/logo.png"

const Navbar = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsVisible(previsVisible => !previsVisible)
    }
    return (
        <div className="w-screen flex justify-between py-4 px-8 items-center border border-bottom">
            <div>
                <Image alt="logo" src={logo} width={120} height={120}></Image>
            </div>
            <div className="hidden sm:block">
                <ul className="flex gap-4">
                    <li><Link className="hover:underline" href="/">Accueil</Link></li>
                    <li><Link className="hover:underline" href="/book">Réserver</Link></li>
                    <li><Link className="hover:underline" href="/about">À propos</Link></li>
                </ul>
            </div>
            <div className="block sm:hidden">
                <button onClick={toggleMenu}>
                    <Image src="/menu.svg" width={50} height={50} alt="menu"></Image>
                </button>

                <ul className={`flex flex-col items-center text-center gap-[20px] absolute right-[0px] p-4 bg-white rounded-lg shadow-lg z-10 ${isVisible ? 'block' : 'hidden'}`}>
                    <li><Link className="hover:underline text-2xl px-4 py-2" href="/">Accueil</Link></li>
                    <li><Link className="hover:underline text-2xl px-4 py-2" href="/book">Réserver</Link></li>
                    <li><Link className="hover:underline text-2xl px-4 py-2" href="/about">À propos</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
