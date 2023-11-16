import React, { useContext } from 'react';
import styles from './DarkToggle.module.css';
import Image from 'next/image';
import SunSVG from '../../assets/toggle/moon.svg';
import MoonSVG from '../../assets/toggle/sun.svg';
import { useTheme } from '../Contexts/ThemeContext';

const DarkToggle = ({ children }) => {
    const { theme, switchDark, switchLight } = useTheme();
    console.log('Current Theme:', theme); // Log the current theme

  const handleButtonClick = () => {
    if (theme === 'light') {
      switchDark();
    } else {
      switchLight();
    }
    console.log('Dark mode:', theme === 'dark'); // Log the dark mode status
  };

  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.togglebtn} ${theme === 'light' ? styles.dark : styles.light}`}
        onClick={handleButtonClick}
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