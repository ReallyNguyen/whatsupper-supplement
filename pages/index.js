import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { ThemeProvider } from '@/context/ThemeContext';
import DarkToggle from '@/components/DarkToggle';
import ChatBot from '@/components/ChatBot';
import NavBar from '@/components/NavBar/NavBar'
import HorizontalCarousel from '@/components/HorizontalCarousel'

import DownloadButton from '@/components/Buttons/downLoadButton';
import MessageButton from '@/components/Buttons/messageButton';
import SeeMoreButton from '@/components/Buttons/seeMoreButton';

import Testimonials from '@/components/Testimonials';
import testimonialsData from '@/data/testimonials';
import testimonialsStyles from '@/components/Testimonials/Testimonials.module.css';
import horizontalStyles from '@/components/HorizontalCarousel/HorizontalCarousel.module.css';
import ContactForm from '@/components/Contact';
import React, { StrictMode } from "react";
// import Main from "@/components/Animation/Home";
// import Refresh from "@/components/Animation/GeneratorRefresh";
// import Info from "@/components/Animation/RecipeInfo";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <NavBar />
        <ChatBot />
        {/* <StrictMode>
          <Main />
          <Refresh />
          <Info />
        </StrictMode> */}
        <div className={`${styles.gridContainer}`}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={`${styles.gridColumn}`}>
               <Testimonials
                imageUrl={testimonial.imageUrl}
                title={testimonial.title}
                username={testimonial.username}
                description={testimonial.description}
                className={testimonialsStyles[`card${index + 1}`]}
              /> 

            </div>
          ))}
        </div>

        <div className={`${styles.horizontalContainer}`}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <HorizontalCarousel
                imageUrl={testimonial.imageUrl}
                title={testimonial.title}
                username={testimonial.username}
                description={testimonial.description}
                className={horizontalStyles[`card${index + 1}`]}
              /> 

            </div>
          ))}
        </div>
        {/* <ContactForm /> */}
      </main>
    </>
  );
}