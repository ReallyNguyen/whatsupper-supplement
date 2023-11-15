import React, { useState } from 'react';
import styles from "./ContactCard.module.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className={styles.contactCard}>
            <div className={styles.cardHeader}></div>
            <div className={styles.cardBody}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.nameEmail}>
                        <div className={styles.nameCombined}>
                            <label className="name">Name</label>
                            <input className={styles.nameInput}
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className={styles.emailCombined}>
                            <label className="email">Email</label>
                            <input className={styles.emailInput}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <label htmlFor="message" className={styles.messageLabel}>Message</label>
                    <div className={`${styles.textarea} ${styles.messageInput}`}

                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}

                        required
                    />
                    <button className={styles.submit} type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
