import React, { useState } from 'react';
import styles from './button.module.css'

export default function MessageButton() {
  // Initialize state with a default color and text
  const [buttonColor, setButtonColor] = useState('#629560');
  const [buttonText, setButtonText] = useState('Send Message');
  const [buttonClicked, setButtonClicked] = useState(false);

  // Function to handle button click and change color and text
  const handleButtonClick = () => {
    // Change the button color to a new color
    setButtonColor('#96AF65');
    // Change the button text
    setButtonText('Message Sent!');
    setButtonClicked(true);
  };

  return (
    <>
      <button
        className={`${styles.message} ${buttonClicked ? styles.messageClicked : ''}`}
        onClick={handleButtonClick}
        onMouseClick={() => setButtonColor('#96AF65')} // Change color on hover
        onMouseLeave={() => setButtonColor('#629560')} // Revert color when not hovered
      >
        {buttonText}
      </button>
    </>
  );
}


// backgroundColor: buttonClicked ? '#96AF65' : buttonColor, // Change color permanently if clicked
// width: '490px',
// height: '52.192px',
// flexShrink: '0',
// borderRadius: '0.73031rem',
// borderWidth: '0',
// outline: 'none',

// color: 'var(--off-white, #F1EFEF)',
// fontFamily: 'Manrope',
// fontSize: '1.25rem',
// fontStyle: 'normal',
// fontWeight: 700,
// lineHeight: 'normal',
// transition: 'background-color 0.3s', // Add a smooth transition effect

