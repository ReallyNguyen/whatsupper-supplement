import Link from "next/link"
import Image from "next/image"
import whatsupper  from "@/public/whatsupper.png"
import styles from '@/components/NavBar/NavBar.module.css'
import DarkToggle from "../DarkToggle"
import { useRouter } from "next/router"

export default function NavBar () {
    const router = useRouter()
    return (
        <>
            <div className={styles.navbarItems}>
                <div className={styles.whatsupperLogo}>
                    <Link href="/">
                        <Image 
                        src={whatsupper}
                        alt="whatsupperLogo"
                        width={200}
                        />
                    </Link>
                </div>
                <div className={styles.navbarLinks}>
                    <Link href="/product" className={`${styles.link1} ${router.pathname === "/product" ? styles.clicked : ""}`}>Product</Link>
                    <Link href="https://whatsupper-blog.vercel.app/" className={`${styles.link2}`}>Blog</Link>
                    <Link href="/contact" className={`${styles.link1} ${router.pathname === "/contact" ? styles.clicked : ""}`}>Contact Us</Link>  
                    <DarkToggle />            
                </div>
            </div>
        </>
    )
}