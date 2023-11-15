import NavBar from "@/components/NavBar/NavBar";
import styles from '@/styles/Product.module.css';

export default function Product () {
    return (
        <>
            <div className={`${styles.main}`}>
                <NavBar />
            </div>
        </>
    )
}