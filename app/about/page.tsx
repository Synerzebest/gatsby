import React from 'react';
import { Navbar, Footer, Carousel } from '@/components';

const page = () => {
    return (
        <>
            <Navbar />
            <div className="w-11/12 sm:w-3/4 m-auto flex flex-col items-center gap-[3rem] py-12">
                <p className="text-3xl">À propos de nous</p>

                <p className="text-center text-2xl">Un salon de coiffure qui peut tout faire</p>

                <p className="text-center text-xl">Depuis le jour où nous avons ouvert nos portes à Bruxelles, nous avons gagné notre place de Barbershop. Nous offrons des soins de beauté sans pareils, tout en restant à l&apos;écoute du rythme de vie de nos clients, ainsi nous vous prodiguerons des soins de beauté aussi rapides que possible.</p>

                <p className="text-center text-xl">Au fil des ans, notre équipe de spécialistes s'est donnée pour mission de bichonner au maximum nos merveilleux clients. Contactez-nous et découvrez ce que notre équipe de spécialistes peut faire pour vous.<br></br><br></br> Vous pouvez également passer nous voir pour profiter de nos services sans rendez-vous.</p>
            </div>

            <div className="relative top-[5rem]">
               <Carousel /> 
            </div>
            

            <Footer />
        </>
    )
}

export default page
