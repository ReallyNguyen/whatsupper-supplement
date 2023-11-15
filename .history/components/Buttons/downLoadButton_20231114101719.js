import React, { useState } from 'react';
import '@fontsource/manrope';
import styles from './button.module.css'

export default function DownloadButton() {
  // Initialize state with a default color and text
  const [buttonColor, setButtonColor] = useState('#629560');
  const [buttonText, setButtonText] = useState('Download Now ->');
  const [buttonClicked, setButtonClicked] = useState(false);

  // Function to handle button click and change color and text
  const handleButtonClick = () => {
    // Change the button color to a new color
    setButtonColor('#96AF65');
    // Change the button text
    setButtonText('Download Now ->');
    setButtonClicked(true);
  };

  return (
    <>
      <button className={`${styles.download}`}
      onClick={handleButtonClick}
      onMouseEnter={() => setButtonColor('#96AF65')} // Change color on hover
      onMouseLeave={() => setButtonColor('#629560')} // Revert color when not hovered
      >
        {buttonText}
      </button>
    </>
  );
}

// style={{
//   backgroundColor: buttonClicked ? '#96AF65' : buttonColor,
//   width: '15.9375rem',
//   height: '4.1875rem',
//   flexShrink: '0',
//   borderRadius: '0.9375rem',
//   borderWidth: '0',
//   outline: 'none',

//   color: 'var(--off-white, #F1EFEF)',
//   fontFamily: 'Manrope',
//   fontSize: '1.25rem',
//   fontStyle: 'normal',
//   fontWeight: 600,
//   lineHeight: 'normal',
//   lineSpacing: '-0.03rem',
//   transition: 'background-color 0.3s',

// }}
// onClick={handleButtonClick}
// onMouseEnter={() => setButtonColor('#96AF65')} // Change color on hover
// onMouseLeave={() => setButtonColor('#629560')} // Revert color when not hovered