import Link from "next/link"
import Image from "next/image"
import whatsupper  from "@/public/whatsupper.png"
import styles from '@/components/NavBar/NavBar.home.module.css'

export default function NavBar (){
    return (
        <>
            <div className={styles.navbarItems}>
                <div className={styles.whatsupperLogo}>
                    <Image 
                    src={whatsupper}
                    alt="whatsupperLogo"
                    width={200}
                    />
                </div>
                <div className={styles.navbarLinks}>
                    <Link href="/" className={styles.link1}>Product</Link>
                    <Link href="/" className={styles.link2}>Blog</Link>
                    <Link href="/" className={styles.link3}>Contact Us</Link>
                </div>                
            </div>

        </>
    )
}