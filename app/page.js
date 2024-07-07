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
import { useContext, useEffect } from "react";
import Navbar from "@/components/navbar";
import SineWave from "@/components/Sine";
import ViewTrack from "@/components/ViewTrack";
import React from "react";
import HashChangeListener from "./HashChangeListener";
import { Global } from "@emotion/react";
import { GlobalStateProvider } from "@/components/GlobalContext";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  
  return (
    <GlobalStateProvider>
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <HashChangeListener />
        <div className="relative w-full bg-red flex justify-center">
          <Navbar />
        </div>
        <ViewTrack x="#hero" />
        <Hero />
        <div className="h-[240px]"></div>
        <Carousel />
        <div id="about" className="h-[20px]"></div>
        <ViewTrack x="#about" />
        <About />
        <div id="features" className="h-[100px]"></div>
        <ViewTrack x="#features" />
        <GridComponent />
        <div id="" className="h-[20px]"></div>
        <ViewTrack x="#boys" />
        <Boys />
        <div id="disclaimer" className="h-[100px]"></div>
        <ViewTrack x="#disclaimer" />
        <Violet />
        <div id="faq" className="h-[100px]"></div>
        <FAQ />
        <ViewTrack x="#faq" />
        <div id="contact" className="h-[100px]"></div>
        <FooterComponent />
      </div>
    </GlobalStateProvider>
  );
}
