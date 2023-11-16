import React, { useContext, useEffect } from 'react';
import styles from './DarkToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

import SunSVG from '../../assets/toggle/moon.svg';
import MoonSVG from '../../assets/toggle/sun.svg';

const DarkToggle = ({ children }) => {
    const { switchDark, switchLight, theme } = useContext(ThemeContext);

    useEffect(() => {
        // Set the default theme to light mode when the component mounts
        switchLight();
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className={styles.toggleContainer}>
            <button
                className={`${styles.togglebtn} ${theme === 'light' ? styles.dark : styles.light}`}
                onClick={theme === 'light' ? switchDark : switchLight}
            >
                <span className={styles.icon}>
                    <Image src={theme === 'dark' ? SunSVG : MoonSVG} alt={theme === 'light' ? 'Sun' : 'Moon'} />
                </span>
            </button>
            {children}
        </div>
    );
};

export default DarkToggle;
