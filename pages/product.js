import NavBar from "@/components/NavBar/NavBar";
import Testimonials from "@/components/Testimonials";
import testimonialsData from '@/data/testimonials';
import testimonialsStyles from '@/components/Testimonials/Testimonials.module.css';
import styles from '@/styles/Product.module.css';
import React, { StrictMode } from "react";
import { ThemeProvider } from '../components/Contexts/ThemeContext.js';
import PopUp from "@/components/PopUp/index.js";
import { useState } from "react";
// import Main from "@/components/Animation/Home";
// import Refresh from "@/components/Animation/GeneratorRefresh";
// import Info from "@/components/Animation/RecipeInfo";

export default function Product() {

    const [isPopUpVisible, setPopUpVisibility] = useState(false);
    const handleClosePopUp = () => {
        // Close the PopUp component
        setPopUpVisibility(false);
    };
    const handleTestimonialClick = () => {
        // Toggle the visibility of the PopUp component
        setPopUpVisibility(!isPopUpVisible);
    };
    return (
        <ThemeProvider>
            <div className={`${styles.main}`}>
                <NavBar />
                <div className={`${styles.header}`}>
                    <p className={`${styles.mainHeader}`}>Your Personal Chef</p>
                    <p className={`${styles.subHeader}`}>Conjure up recipes at your fingertips, turning everyday deals into savoury meals.</p>
                </div>
                {/* <StrictMode>
                    <div className={`${styles.animations}`}>
                        <Main />
                        <Refresh />
                        <Info />
                    </div>
                </StrictMode> */}
                <div className={`${styles.testimonialHeader}`}>
                    <p className={`${styles.mainTestHeader}`}>What’s Cooking?</p>
                    <p className={`${styles.subTestHeader}`}>See what others are creating
                        with our AI scanning feature 🧑‍🍳✨</p>
                </div>
                <div className={`${styles.gridContainer} ${styles.scrollableGrid}`}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className={`${styles.gridColumn}`} onClick={handleTestimonialClick}>
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
                {isPopUpVisible && (
                    <PopUp>
                        {/* Add a close button or any other content inside PopUp */}
                        <button onClick={handleClosePopUp}>Close PopUp</button>
                    </PopUp>
                )}
            </div>
        </ThemeProvider>

    )
}