import Link from "next/link"
import Image from "next/image"
import whatsupper  from "@/public/whatsupper.png"
import styles from '@/components/NavBar/NavBar.home.module.css'
import { useState } from "react"
import { useRouter } from "next/router"


export default function NavBar () {
    const router = useRouter()
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
                    <Link href="/" className={`${styles.link1} ${router.pathname === "/" ? styles.clicked : ""}`}>Product</Link>
                    <Link href="/" className={`${styles.link2} ${router.pathname === "/" ? styles.clicked : ""}`}>Blog</Link>
                    <Link href="/" className={`${styles.link1} ${router.pathname === "/" ? styles.clicked : ""}`}>Contact Us</Link>              
                </div>
            </div>
        </>
    )
}