import About from "@/components/About";
import dynamic from 'next/dynamic'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
// import StyleGuide from "@/components/StyleGuide";


export default function Home() {
  return (
    <main className="w-full max-w-[1080px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      <Footer />
      {/* <StyleGuide /> */}
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
