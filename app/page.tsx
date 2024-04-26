import { Navbar, Hero, GridServices, Hours, Maps, Slider, Footer } from "@/components"

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <GridServices />

      <Hours />

      <Maps />

      <div className="w-11/12 m-auto flex justify-center">
        <Slider />
      </div>
      
      <Footer />
    </>
  );
}
