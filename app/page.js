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
import SineWave from "@/components/Sine";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div style={{ maxWidth: "1440px", margin: "auto" }}>
      <div className="relative w-full bg-red flex justify-center">
        <Navbar />
      </div>
      <Hero />
      <div className="h-[240px]"></div>
      <Carousel />
      <div id="process" className="h-[20px]"></div>
      <About />
      <div id="features" className="h-[100px]"></div>
      <GridComponent />
      <div id="" className="h-[20px]"></div>
      <Boys />
      <div className="h-[100px]"></div>
      <Violet />
      <div id="faq" className="h-[100px]"></div>
      <FAQ />
      <div id="contact" className="h-[100px]"></div>
      <FooterComponent />
    </div>
  );
}
