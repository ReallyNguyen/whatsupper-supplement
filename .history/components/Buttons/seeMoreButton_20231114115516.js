import React, { useState } from 'react';
import '@fontsource/manrope';

export default function SeeMoreButton() {
  // Initialize state with a default color and text
  const [buttonColor, setButtonColor] = useState('#629560');
  const [buttonText, setButtonText] = useState('See More Recipes');
  const [buttonClicked, setButtonClicked] = useState(false);

  // Function to handle button click and change color and text
  const handleButtonClick = () => {
    // Change the button color to a new color
    setButtonColor('#96AF65');
    // Change the button text
    setButtonText('See More Recipes');
    setButtonClicked(true);
  };

  return (
    <>
      <button className={`${styles.seeMore} ${buttonClicked ? styles.seeMoreClicked : ''}`}
        
        onClick={handleButtonClick}
        onMouseEnter={() => setButtonColor('#96AF65')} // Change color on hover
        onMouseLeave={() => setButtonColor('#629560')} // Revert color when not hovered
      >
        {buttonText}
      </button>
    </>
  );
}

// backgroundColor: buttonClicked ? '#96AF65' : buttonColor,
//           width: '255px',
//           height: '67px',
//           flexShrink: '0',
//           borderRadius: '0.9375rem',
//           borderWidth: '0',
//           outline: 'none',

//           color: 'var(--off-white, #F1EFEF)',
//           fontFamily: 'Manrope',
//           fontSize: '1.25rem',
//           fontStyle: 'normal',
//           fontWeight: 600,
//           lineHeight: 'normal',
//           lineSpacing: '-0.03rem',
          // transition: 'background-color 0.3s',

