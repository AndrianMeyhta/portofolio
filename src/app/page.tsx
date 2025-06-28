// src/app/page.tsx - VERSI FINAL YANG BENAR

"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MorphingShape from "@/components/MorphingShape";

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
