import ContactForm from "@/components/Contact";
import NavBar from "@/components/NavBar/NavBar";
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    return (
        <>
            <div className={`${styles.main}`}>
                <NavBar />
                <div className={`${styles.landingContent}`}>
                    <p className={`${styles.header}`}>Interested in learning more?</p>
                    <p className={`${styles.subheader}`}>We’d love to hear from you!</p>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}