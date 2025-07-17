import "../styles/globals.css";
import { Hero } from "@/components/sections/HeroSection";
import { About } from "@/components/sections/AboutSection";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
