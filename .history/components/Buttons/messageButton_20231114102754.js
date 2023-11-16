import React, { useState } from 'react';
import '@fontsource/manrope';

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
        style={{
          backgroundColor: buttonClicked ? '#96AF65' : buttonColor, // Change color permanently if clicked
          width: '490px',
          height: '52.192px',
          flexShrink: '0',
          borderRadius: '0.73031rem',
          borderWidth: '0',
          outline: 'none',

          color: 'var(--off-white, #F1EFEF)',
          fontFamily: 'Manrope',
          // fontFamily:'Manrope, var(--font-family)',
          fontSize: '1.25rem',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          transition: 'background-color 0.3s', // Add a smooth transition effect
          
        }}
        onClick={handleButtonClick}
        onMouseEnter={() => setButtonColor('#96AF65')} // Change color on hover
        onMouseLeave={() => setButtonColor('#629560')} // Revert color when not hovered
      >
        {buttonText}
      </button>
    </>
  );
}

// import React, { useState } from 'react';
// import '@fontsource/manrope';

// export default function Button() {
//   // Initialize state with a default color and text
//   const [buttonColor, setButtonColor] = useState('#629560');
//   const [buttonText, setButtonText] = useState('Send Message');

//   // Function to handle button click and change color and text
//   const handleButtonClick = () => {
//     // Change the button color to a new color
//     setButtonColor('#96AF65');
//     // Change the button text
//     setButtonText('Message Sent!');
//   };

//   return (
//     <>
//       <button
//         style={{
//           backgroundColor: buttonColor,
//           width: '490px',
//           height: '52.192px',
//           flexShrink: '0',
//           borderRadius: '0.73031rem',
//           outline: 'none',

//           color: 'var(--off-white, #F1EFEF)',
//           fontFamily: 'Manrope',
//           fontSize: '1.25rem',
//           fontStyle: 'normal',
//           fontWeight: 700,
//           lineHeight: 'normal',
          
//         }}
//         onClick={handleButtonClick}
//       >
//         {buttonText}
//       </button>
//     </>
//   );
// }


// -- PROTOTYPE --

// import React, { useState } from 'react';
// import '@fontsource/manrope'; // Import the Manrope font

// export default function Button() {
//   // Initialize state with a default color, text, and clicked state
//   const [buttonColor, setButtonColor] = useState('#629560');
//   const [buttonText, setButtonText] = useState('Change Color');
//   const [buttonClicked, setButtonClicked] = useState(false);

//   // Function to handle button click and change color and text
//   const handleButtonClick = () => {
//     // Change the button color to a new color
//     setButtonColor('#96AF65');
//     // Change the button text
//     setButtonText('Color Changed!');
//     // Set the button as clicked
//     setButtonClicked(true);
//   };

//   return (
//     <>
//       <button
//         style={{
//           backgroundColor: buttonClicked ? '#96AF65' : buttonColor, // Change color permanently if clicked
//           padding: '10px',
//           borderRadius: '5px',
//           color: 'var(--off-white, #F1EFEF)', // Use a CSS variable for color
//           cursor: 'pointer',
//           flexShrink: 0,
//           fontFamily: 'Manrope',
//           fontSize: '1.25rem',
//           fontStyle: 'normal',
//           fontWeight: 700,
//           lineHeight: 'normal',
//           outline: 'none', // Remove the focus outline
//           transition: 'background-color 0.3s', // Add a smooth transition effect
//         }}
//         onClick={handleButtonClick}
//         onMouseEnter={() => setButtonColor('#96AF65')} // Change color on hover
//         onMouseLeave={() => setButtonColor('#629560')} // Revert color when not hovered
//       >
//         {buttonText}
//       </button>
//     </>
//   );
// }


