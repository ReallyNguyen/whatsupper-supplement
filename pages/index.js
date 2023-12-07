import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import ChatBot from '@/components/ChatBot';
import NavBar from '@/components/NavBar/NavBar'
import HorizontalCarousel from '@/components/HorizontalCarousel'
import { ThemeProvider } from '../components/Contexts/ThemeContext.js';

import DownloadButton from '@/components/Buttons/downLoadButton';
// import MessageButton from '@/components/Buttons/messageButton';
import SeeMoreButton from '@/components/Buttons/seeMoreButton';
import testimonialsData from '@/data/testimonials';
import horizontalStyles from '@/components/HorizontalCarousel/HorizontalCarousel.module.css';

export default function Home() {
  console.log('Home component mounted'); // Add this console log

  return (
    <ThemeProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <NavBar />
        <div className={`${styles.titleImg}`}>
          <div className={`${styles.cta}`}>
            <p className={`${styles.header}`}>Empowering People, <span className={`${styles.green}`}><br/>One Meal</span> at a Time 🍽️</p>
            {/* <DownloadButton /> */}
          </div>
          <Image
            src="/homemockup.png"
            width={325}
            height={660} 
            priority={true} // {false} | {true}
            alt="picture of phone"
            className={`${styles.mockup}`}
          />
        </div>
        <div className={`${styles.carouselContainer}`}>
          <p className={`${styles.carouselHeader}`}>See What Others Are Creating</p>
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
        </div>
        {/* <SeeMoreButton /> */}
       
        <ChatBot />
      </main>
      </ThemeProvider>
  );
}