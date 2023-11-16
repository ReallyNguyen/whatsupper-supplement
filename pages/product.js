import NavBar from "@/components/NavBar/NavBar";
import Testimonials from "@/components/Testimonials";
import testimonialsData from '@/data/testimonials';
import testimonialsStyles from '@/components/Testimonials/Testimonials.module.css';
import styles from '@/styles/Product.module.css';
import React, { StrictMode } from "react";
// import Main from "@/components/Animation/Home";
// import Refresh from "@/components/Animation/GeneratorRefresh";
// import Info from "@/components/Animation/RecipeInfo";

export default function Product() {
    return (
        <>
            <div className={`${styles.main}`}>
                <NavBar />
                <div className={`${styles.header}`}>
                    <p className={`${styles.mainHeader}`}>Your Personal Chef</p>
                    <p className={`${styles.subHeader}`}>Conjure up recipes at your fingertips, turning everyday deals into savoury meals.</p>
                </div>
                {/* <StrictMode>
          <Main />
          <Refresh />
          <Info />
        </StrictMode> */}
                <div className={`${styles.testimonialHeader}`}>
                    <p className={`${styles.mainTestHeader}`}>What’s Cooking?</p>
                    <p className={`${styles.subTestHeader}`}>See what others are creating
                        with our AI scanning feature 🧑‍🍳✨</p>
                </div>
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
            </div>
        </>
    )
}