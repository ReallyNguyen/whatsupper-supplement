import React, { useContext } from 'react';
import styles from './DarkToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

import SunSVG from '../../assets/toggle/moon.svg';
import MoonSVG from '../../assets/toggle/sun.svg';

const DarkToggle = ({ children }) => {
    const { switchDark, switchLight, theme } = useContext(ThemeContext);

    return (
        <div className={styles.toggleContainer}>
            <button className={`${styles.togglebtn} ${theme === "dark" ? styles.dark : styles.light}`} onClick={theme === "dark" ? switchLight : switchDark}>
                <span className={styles.icon}>
                    <Image src={theme === "dark" ? MoonSVG : SunSVG} alt={theme === "dark" ? "Moon" : "Sun"} />
                </span>
                <span className={`${styles.modeIndicator} ${theme === "dark" ? styles.darkIndicator : styles.lightIndicator}`} />
            </button>
            {children}
        </div>
    );
};

export default DarkToggle;
