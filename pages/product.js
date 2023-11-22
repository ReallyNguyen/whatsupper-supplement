import NavBar from "@/components/NavBar/NavBar";
import Testimonials from "@/components/Testimonials";
import testimonialsData from '@/data/testimonials';
import testimonialsStyles from '@/components/Testimonials/Testimonials.module.css';
import styles from '@/styles/Product.module.css';
import React, { StrictMode } from "react";
import { ThemeProvider } from '../components/Contexts/ThemeContext.js';
import PopUp from "@/components/PopUp/index.js";
import { useState } from "react";
import Main from "@/components/Animation/Home";
import Refresh from "@/components/Animation/GeneratorRefresh";
import Info from "@/components/Animation/RecipeInfo";
import Lottie from "lottie-react";


export default function Product() {

    return (
        <ThemeProvider>
            <div className={`${styles.main}`}>
                <NavBar />
                <div className={`${styles.header}`}>
                    <p className={`${styles.mainHeader}`}>Your Personal Chef</p>
                    <p className={`${styles.subHeader}`}>Conjure up recipes at your fingertips, turning everyday deals into savoury meals.</p>
                </div>
                <StrictMode>
                    <div className={`${styles.animations}`}>
                        <Main />
                        <Refresh />
                        <Info />
                    </div>
                </StrictMode>
                <div className={`${styles.testimonialHeader}`}>
                    <p className={`${styles.mainTestHeader}`}>What’s Cooking?</p>
                    <p className={`${styles.subTestHeader}`}>See what others are creating
                        with our AI scanning feature 🧑‍🍳✨</p>
                </div>
                <PopUp />
            </div>
        </ThemeProvider>

    )
}