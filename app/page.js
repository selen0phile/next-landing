"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import About from "@/components/about";
import GridComponent from "@/components/feature";
import FooterComponent from "@/components/footer";
import ContactForm from "@/components/contact";
import Carousel, { Card } from "@/components/Carousel";
import Boys from "@/components/Boys";
import Violet from "@/components/Violet";
import FAQ from "@/components/FAQ";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useClient } from "@/components/hooks";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <div style={{ maxWidth: "1440px", margin: "auto" }}>
      <div className="relative w-full bg-red flex justify-center">
        <Navbar />
      </div>
      <Hero />
      <div className="h-[240px]"></div>
      <Carousel />
      <div id="about" className="h-[100px]"></div>
      <About />
      {/* <GridComponent /> */}
      <div className="h-[100px]"></div>
      <Boys />
      <div className="h-[100px]"></div>
      <Violet />
      <div id="faq" className="h-[100px]"></div>
      <FAQ />
      <div id="contact" className="h-[100px]"></div>
      <FooterComponent />
      {/* <ContactForm /> */}
    </div>
    
  );
}
