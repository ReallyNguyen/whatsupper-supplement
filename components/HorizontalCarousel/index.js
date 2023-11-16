import React from 'react';
import styles from './HorizontalCarousel.module.css';

const HorizontalCarousel = ({ imageUrl, title, username, description, className }) => {
    return (
        <div className="carousel-container">
            <div className={`${styles.horizontalCarousel}`}>
                <div className={`${styles.card} ${className}`}>
                    <img className={styles.image} src={imageUrl} alt={title} />
                    <div className={styles.content}>
                        <h2>{title}</h2>
                        <p>{username}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalCarousel;

