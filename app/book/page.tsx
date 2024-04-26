import React from 'react';
import { Navbar, Calendly, Footer } from '@/components';

const page = () => {
    return (
        <>
            <Navbar />

            <div className="relative top-8">
                <p className="text-center text-3xl">Faites vos réservations en ligne</p>
            </div>
            
            
            <Calendly />

            <Footer />
        </>
    )
}

export default page
