// NavBar.jsx

import Link from "next/link";
import Image from "next/image";
import whatsupper from "@/public/whatsupper.png";
import nav from "@/public/nav.svg"
import styles from '@/components/NavBar/NavBar.module.css';
import DarkToggle from "../DarkToggle";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from 'react-modal'

export default function NavBar() {
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  console.log('NavBar component mounted');

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
      display: 'flex',
      width: '131px',
      height: '263px',
      top: '-5px',
      left: '-5px',
      borderRadius: '15px'
    }
  }

  return (
    <>
      <div className={styles.navbarItems}>
        <div className={styles.nav}>
          <div onClick={() => setIsOpen(true)}>
            <Image src={nav} width={30} />
          </div>

          <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <div className={styles.dropdown}>
              <div>
                <h2 className={styles.x} onClick={() => setIsOpen(false)}>X</h2>
                <div className={styles.navbarItemsColumns}>
                  <Link
                    href="/product"
                    className={`${styles.link1mobile} ${router.pathname === '/product' ? styles.clicked : ''
                      }`}
                  >
                    Product
                  </Link>
                  <Link href="https://whatsupper-blog.vercel.app/" className={`${styles.link2mobile}`}>
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className={`${styles.link1mobile} ${router.pathname === '/contact' ? styles.clicked : ''
                      }`}
                  >
                    Contact Us
                  </Link>
                  <div className={styles.logoMobile}>
                    <Link href="/">
                      <Image src={whatsupper} alt="whatsupperLogo" width={120} />
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </Modal>


        </div>
        <div className={styles.whatsupperLogo}>
          <Link href="/">
            <Image src={whatsupper} alt="whatsupperLogo" width={200} />
          </Link>
        </div>
        <div className={styles.navbarLinks}>
          <Link
            href="/product"
            className={`${styles.link1} ${router.pathname === '/product' ? styles.clicked : ''
              }`}
          >
            Product
          </Link>
          <Link href="https://whatsupper-blog.vercel.app/" className={`${styles.link2}`}>
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${styles.link1} ${router.pathname === '/contact' ? styles.clicked : ''
              }`}
          >
            Contact Us
          </Link>
          <DarkToggle />
        </div>
      </div>
    </>
  );
}
