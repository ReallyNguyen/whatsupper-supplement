import styles from '@/components/PopUp/PopUp.module.css';
import Ramen from '../../assets/popup/ramen.png';
import Flyer from '../../assets/popup/flyer.png';
import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal'
import Testimonials from "@/components/Testimonials";
import testimonialsData from '@/data/testimonials';
import testimonialsStyles from '@/components/Testimonials/Testimonials.module.css';

export default function PopUp() {
    const [activeTab, setActiveTab] = useState('Recipe');
    const [overlayVisible, setOverlayVisible] = useState(true);

    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };

    const [isOpen, setIsOpen] = useState(false)

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            setOverlayVisible(false);
        }
    };

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
            display: 'flex'
        }
    }

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={`${styles.gridContainer}`} >
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className={`${styles.gridColumn}`} onClick={() => setIsOpen(true)} >
                            < Testimonials
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
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageTextContainer}>
                            <Image src={Ramen} alt="ramen" objectFit="cover" className={styles.imageWidth} />
                            <div className={styles.overlayText}>
                                <h1>Tonkatsu Ramen</h1>
                                <p> Immerse yourself in a rich, velvety pork bone broth, painstakingly simmered to perfection. Tender slices of golden, crispy Tonkatsu dance atop a tangle of springy ramen noodles, creating a delightful interplay of textures.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tabContainer}>
                        <button
                            className={`${styles.tab} ${activeTab === 'Recipe' && styles.activeTab}`}
                            onClick={() => handleTabPress('Recipe')}
                        >
                            <div>
                                <h1>Recipe</h1>
                            </div>
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'Flyer' && styles.activeTab}`}
                            onClick={() => handleTabPress('Flyer')}
                        >
                            <div>
                                <h1>Flyer</h1>
                            </div>
                        </button>
                    </div>

                    {activeTab === 'Recipe' && (
                        <div className={styles.tabsContainer}>
                            <div className={styles.recipeContainer}>
                                <h1>Ingredients</h1>
                                <div className={styles.instructions}>
                                    <div className={styles.column1}>
                                        <h3>For the Broth:</h3>
                                        <ul>
                                            <li>4 pork shanks or pork hocks</li>
                                            <li>1 onion, halved</li>
                                            <li>4 cloves garlic, smashed</li>
                                            <li>1 piece ginger (about 2 inches), sliced</li>
                                            <li>1 cup sake</li>
                                            <li>8 cups water</li>
                                            <li>2 tablespoons soy sauce</li>
                                            <li>2 tablespoons mirin (sweet rice wine)</li>
                                        </ul>
                                    </div>
                                    <div className={styles.column1}>
                                        <h3>For the Ramen:</h3>
                                        <ul>
                                            <li>Ramen noodles (enough for the number of servings you want)</li>
                                            <li>Tonkatsu (breaded and deep-fried pork cutlet) - you can buy pre-made or make your own</li>
                                            <li>Green onions, thinly sliced</li>
                                            <li>Nori (seaweed sheets), sliced into thin strips</li>
                                            <li>Bamboo shoots, sliced</li>
                                            <li>Soft-boiled eggs, halved</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.recipeContainer}>
                                <h1>Instructions</h1>
                                <div className={styles.instructions}>
                                    <div className={styles.column1}>
                                        <h3>1. Prepare the Broth:</h3>
                                        <ul className={`${styles.alpha} ${styles.first}`}>
                                            <li>
                                                In a large pot, bring water to a boil and blanch the pork shanks or hocks for about 10 minutes. Discard the water and rinse the pork under cold water.</li>
                                            <li>Clean the pot and return the pork. Add the onion, garlic, ginger, sake, and water. Bring to a boil, then reduce heat to simmer.</li>
                                            <li>Skim off any scum that rises to the surface. Simmer for about 4-6 hours until the broth becomes milky and flavorful.</li>
                                            <li>Strain the broth, discarding solids. Return the broth to the pot and add soy sauce and mirin. Keep it warm.</li>
                                        </ul>
                                    </div>
                                    <div className={styles.column1}>
                                        <h3>2. Prepare the Toppings:</h3>
                                        <div className={styles.instructionsRow}>
                                            <ul className={`${styles.alpha} ${styles.final}`}>
                                                <li>
                                                    Cook the ramen noodles according to the package instructions. Drain and set aside.</li>
                                                <li>Prepare the Tonkatsu (if not pre-made) by breading and deep-frying pork cutlets until golden brown. Slice into strips.</li>
                                                <li>Skim off any scum that rises to the surface. Simmer for about 4-6 hours until the broth becomes milky and flavorful.</li>
                                                <li>Soft-boil the eggs.</li>
                                            </ul>
                                            <h3>3. Assemble the Ramen:</h3>
                                            <ul className={`${styles.alpha} ${styles.final}`}>
                                                <li>
                                                    Divide the cooked noodles among serving bowls.</li>
                                                <li>Ladle the hot broth over the noodles.</li>
                                                <li>Arrange Tonkatsu slices, green onions, bamboo shoots, nori strips, and a half of a soft-boiled egg on top.</li>
                                                <li>Serve immediately and enjoy!</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Flyer' && (
                        <div className={styles.tabsContainer}>
                            <div className={styles.image}>
                                <Image
                                    src={Flyer}
                                    alt="flyer"
                                    width={900}
                                    objectFit="cover"

                                />

                            </div>
                            <div className={styles.scanContainer}>
                                <div className={styles.scannedContainer}>
                                    <h1>Items Scanned:</h1>
                                    <div className={styles.scanned}>
                                        <ul>
                                            <li>4 pork shanks </li>
                                            <li>1 onion</li>
                                            <li>4 cloves garlic</li>
                                            <li>1 cup sake</li>
                                            <li>2 tablespoons soy sauce</li>
                                            <li>2 tablespoons mirin (sweet rice wine)</li>
                                        </ul>
                                        <ul>
                                            <li>Ramen noodles</li>
                                            <li>Green onions, thinly sliced</li>
                                            <li>Nori (seaweed sheets)</li>
                                            <li>Bamboo shoots, sliced</li>
                                            <li>Soft-boiled eggs, halved</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>

        </>
    );
}
