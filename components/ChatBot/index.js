import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const initialMessages = [
  "Welcome to WhatSupper Support!",
  "We're here to help you. Let us know how we can assist you today!",
  "For all inquiries regarding our app and website, click on the prompts down below to direct you to the correct channels."
];

const questionsAndAnswers = [
  { question: 'Product Related Questions', answer: 'What would you like to ask?' },
  { question: 'Company Related Questions', answer: 'What would you like to know?' },
  { question: 'Resources', answer: 'What resources would you like?' },
  { question: 'Other', answer: 'For all other inquiries, please email us at WhatSupper@gmail.com.' },
];

export default function Chat() {
  const [chat, setChat] = useState([]);
  const [availableQuestions, setAvailableQuestions] = useState(questionsAndAnswers);
  const chatContentRef = useRef(null);
  const [chatVisible, setChatVisible] = useState(false);

  const showInitialMessage = () => {
    if (chat.length === 0) {
      setChat([
        { text: initialMessages[0], type: 'bot' },
        { text: initialMessages[1], type: 'bot' },
        { text: initialMessages[2], type: 'bot' }
      ]);
    }
  };

  const scrollToBottom = () => {
    if (chatContentRef.current) {
      const chatContent = chatContentRef.current;
      const lastBotMessage = chatContent.querySelector('.message.bot:last-child');
  
      if (lastBotMessage) {
        lastBotMessage.scrollIntoView({ behavior: 'smooth' });
      } else {
        chatContent.scrollTop = chatContent.scrollHeight;
      }
    }
  };

  useEffect(() => {
    showInitialMessage();
    scrollToBottom();
  }, [chat]);

  useEffect(() => {
    showInitialMessage();
    scrollToBottom();
  }, [chat]);

  const handleQuestionClick = (question, answer) => {
    setChat([...chat, { text: question, type: 'user' }, { text: answer, type: 'bot' }]);

    switch (question) {
      case 'Product Related Questions':
      case 'Company Related Questions':
      case 'Resources':
        setAvailableQuestionsForCategory(question);
        break;
      default:
        setAvailableQuestions(questionsAndAnswers);
        break;
    }

    scrollToBottom();
  };

  const setAvailableQuestionsForCategory = (question) => {
    switch (question) {
      case 'Product Related Questions':
        setAvailableQuestions([
          { question: 'Product Usage', answer: ' Our user-friendly app simplifies the cooking experience for you. To get started, easily download the application on your smartphone, grant camera access, and scan any food-related fliers at your disposal. WhatSupper utilizes advanced AI technology to effortlessly generate personalized recipes just for you! If you have any questions or need assistance, feel free to ask. We are here to help!' },
          { question: 'Product Features', answer: 'WhatSupper offers easy meal-planning and recipe generation with our cutting-edge AI tools. WhatSupper users are also able to view other recipes created from coupon fliers by users local to you!' },
          { question: 'How do I download WhatSupper?', answer: 'Whatsupper is available for free download, and users can access its core features without a subscription. You can download our app directly from GitHub and use it on the Expo App.' },
          { question: 'How does the AI work?', answer: 'Whatsupper has an AI feature that scans the food-related items from grocery store flyers to generate recipes, optimizing the usage of purchased items and minimizing waste.' },
        ]);
        break;
      case 'Company Related Questions':
        setAvailableQuestions([
          { question: 'Company History', answer: 'WhatSupper was created by a team of 7 students at BCIT in Burnaby, Canada.' },
          { question: 'What sets Whatsupper apart?', answer: 'Whatsupper stands out by providing you discounted recipes and seamless meal-planning at your fingertips! Just point your smartphone camera at a flyer and let us work our AI recipe magic! With the use of OpenAI, we can generate recipes based on the area scanned.  Elevate your cooking, save time, and delight your taste buds with WhatSupper — We Scan. You Save and Savour.' },
          { question: 'Business Inquiries', answer: 'All business inquiries can be directed to WhatSupper@gmail.com.' },
          { question: 'Company Values', answer: 'Whatsupper caters to budget-conscious grocery shoppers and meal planners, a group that values cost-effective ways to manage food expenses while maintaining meal quality. The app allows users to create nutritious, budget-friendly meals by integrating discounted ingredients from grocery store coupon flyers. It also provides easy access to digital coupons from various stores, enabling informed shopping decisions for maximum savings.  Additionally, Whatsupper simplifies coupon management, eliminating the need for searching and organization, making grocery shopping both cost-effective and convenient for users in this market. Our app serves the market of budget-conscious consumers who are looking for ways to save money while preparing meals.' },
        ]);
        break;
      case 'Resources':
        setAvailableQuestions([
          { question: 'Accesible Food Resources', answer: 'WhatSupper believes that accessible nutritious food should be available for everyone. If you or a loved one is facing adversity, please contact your local food bank.' },
          { question: 'App Documentation', answer: 'To learn more about how this app was created, please check out our blog!' },
          { question: 'GitHub Help', answer: 'For any GitHub-related issues, please contact WhatSupper@gmail.com.' },
          { question: 'App Help', answer: 'For any App-related issues, please contact WhatSupper@gmail.com.' },
        ]);
        break;
      default:
        setAvailableQuestions(questionsAndAnswers);
        break;
    }
  };

  const handleCloseClick = () => {
    setChatVisible(false);
  };

  const handleChatBoxIconClick = () => {
    setChat([]);
    scrollToBottom(); 
    setChatVisible(!chatVisible); 
  };

  return (
    <>
      {!chatVisible && (
        <img
          src="/ChatBoxIcon.png"
          alt="Chat Box Icon"
          className="chat-box-icon"
          onClick={handleChatBoxIconClick}
        />
      )}

      <div className={`container ${chatVisible ? 'visible' : 'hidden'}`}>
        <Head>
          <title>WhatSupper Support</title>
        </Head>

        <div className="chat-container">
          <div className="banner">
            <div className="banner-text">WhatSupper Support</div>
            <div className="close-button" onClick={handleCloseClick}>
              <img src="/x.png" alt="Close button" />
            </div>
          </div>

          <div className="content-container">
            <div className="chat-content" ref={chatContentRef}>
              {chat.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  {message.type === 'bot' && (
                    <img className="avatar" src="/whatsuppericonavatar.png" alt="Bot Avatar" />
                  )}
                  <div className={`text ${message.type === 'bot' ? 'bot' : 'user'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="user-response">
            {availableQuestions.map((qa, index) => (
              <div
                key={index}
                onClick={() => handleQuestionClick(qa.question, qa.answer)}
                className={`question user`}
                style={{ fontSize: '15px', textAlign: 'center', width: '50%' }}
              >
                {qa.question}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          position: fixed;
          bottom: 40px;
          right: 10px;
          transition: all 0.3s ease;
        }

        .visible {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        .hidden {
          opacity: 0;
          transform: translateX(100%);
          pointer-events: none;
        }

        .chat-container {
          width: 350px;
          height: 300px; 
          border-radius: 10px;
          background-color: #F1EFEF;
          position: fixed; 
          font-family: 'Manrope', sans-serif;
          z-index: 4;
          bottom: 85px;
        }

        .banner {
          background-color: #629560;
          color: #F1EFEF;
          padding: 1rem;
          text-align: center;
          font-family: 'Manrope', sans-serif;
          display: flex;
          justify-content: space-between;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .banner-text {
          flex-grow: 1;
          font-size: 1rem;
          text-align: left;
          padding-bottom: 1px;

        }

        .close-button {
          cursor: pointer;
        }

        .close-button img {
          width: 12px;
        }


        .content-container {
          max-height: calc(100% - 70px);
          overflow-y: scroll;
          position: relative;
          width: 100%; 
        }

        .chat-content {
          padding: 15px;
          overflow-y: scroll; 
        }

        .message {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .bot {
          text-align: left;
          color: #221F1F;
          font-size: 15px;
        }

        .user {
          text-align: right;
          color: #221F1F;
          font-size: 15px;
        }

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .text {
          word-wrap: break-word;
        }

        .user-response {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding-bottom: 10px;
          padding: 10px;
          border-top: 1px solid #ccc;
          background-color: #F1EFEF;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          margin: 0; 
        }
        

        .question {
          cursor: pointer;
          padding: 5px;
          border: 1px solid #ccc;
          margin-bottom: 5px;
          font-size: 15px;
          text-align: right;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bot .text {
          background-color: white;
          padding: 8px;
          border-radius: 10px;
        }

        .chat-box-icon {
          position: fixed;
          bottom: 20px; 
          right: 20px; 
          width: 50px;
          height: 50px;
        }
      `}</style>
    </>
  );
}
