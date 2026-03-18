import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Education from "@/components/Education";
import CinePsique from "@/components/CinePsique";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import CoffeeScroll from "@/components/CoffeeScroll";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WaveDivider from="#f0e4d5" to="#fefcf9" />
        <About />
        <WaveDivider from="#fefcf9" to="#3e2d1f" />
        <Specialties />
        <WaveDivider from="#3e2d1f" to="#f0e4d5" flip />
        <Education />
        <WaveDivider from="#f0e4d5" to="#2a1e14" />
        <CinePsique />
        <WaveDivider from="#2a1e14" to="#fefcf9" flip />
        <Testimonials />
        <WaveDivider from="#fefcf9" to="#f0e4d5" />
        <FAQ />
        <WaveDivider from="#f0e4d5" to="#3e2d1f" />
      </main>
      <CTA />
      <CoffeeScroll />
    </>
  );
}
