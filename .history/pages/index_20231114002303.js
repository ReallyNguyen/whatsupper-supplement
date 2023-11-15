import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { ThemeProvider } from '@/context/ThemeContext';
import DarkToggle from '@/components/DarkToggle';
import ChatBot from '@/components/ChatBot';
import NavBar from '@/components/NavBar/NavBar'
import DownloadButton from '@/components/Buttons/downLoadButton';
import MessageButton from '@/components/Buttons/messageButton';
import SeeMoreButton from '@/components/Buttons/seeMoreButton';


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
        <h1>Test</h1>
        <DownloadButton/>
        <MessageButton/>
        <SeeMoreButton/>

      </main>

      <ThemeProvider>
        <main className={`${styles.main}`}>
          <DarkToggle />
          <ChatBot />
        </main>
      </ThemeProvider>

    </>
  );
}
