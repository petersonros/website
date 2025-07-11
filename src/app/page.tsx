import React from 'react';
import { Hero } from "@/components/Hero"
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      {/* Em breve: <About />, <Projects />, <Contact /> */}
    </main>
  );
}

