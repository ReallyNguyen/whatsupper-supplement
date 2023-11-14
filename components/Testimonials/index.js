import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = ({ imageUrl, title, username, description, className }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <img className={styles.image} src={imageUrl} alt={title} />
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{username}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Testimonials;