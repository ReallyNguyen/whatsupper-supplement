import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const initialMessage = "Hello! Welcome to WhatSupper Support. What can I help you with?";

const questionsAndAnswers = [
  { question: 'Product Related Questions', answer: 'What would you like to ask?' },
  { question: 'Company Related Questions', answer: 'What would you like to know?' },
  { question: 'Resources', answer: 'What resources would you like?' },
  { question: 'Other', answer: 'For all other inquiries, please email us at WhatSupper@gmail.com.' },
  // Add more questions and answers as needed
];

export default function Chat() {
  const [chat, setChat] = useState([]);
  const [availableQuestions, setAvailableQuestions] = useState(questionsAndAnswers);
  const chatContentRef = useRef(null);
  const [chatVisible, setChatVisible] = useState(false);

  const showInitialMessage = () => {
    if (chat.length === 0) {
      setChat([{ text: initialMessage, type: 'bot' }]);
    }
  };

  useEffect(() => {
    showInitialMessage();
  }, [chatVisible]);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
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
  };

  const setAvailableQuestionsForCategory = (question) => {
    switch (question) {
      case 'Product Related Questions':
        setAvailableQuestions([
          // ... (existing code)
        ]);
        break;
      case 'Company Related Questions':
        setAvailableQuestions([
          // ... (existing code)
        ]);
        break;
      case 'Resources':
        setAvailableQuestions([
          // ... (existing code)
        ]);
        break;
      // Add cases for other main questions if needed
      default:
        setAvailableQuestions(questionsAndAnswers);
        break;
    }
  };

  const handleCloseClick = () => {
    setChatVisible(false);
  };

  const handleChatBoxIconClick = () => {
    setChat([]); // Clear the chat
    setChatVisible(!chatVisible); // Toggle visibility
  };

  return (
    <>
      { !chatVisible && (
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
          <div className="chat-content" ref={chatContentRef}>
            {chat.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.type === 'bot' && <img className="avatar" src="/whatsuppericonavatar.png" alt="Bot Avatar" />}
                <div className={`text ${message.type === 'bot' ? 'bot' : 'user'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="user-response">
            {availableQuestions.map((qa, index) => (
              <div
                key={index}
                onClick={() => handleQuestionClick(qa.question, qa.answer)}
                className={`question user`}
                style={{ fontSize: '10px', textAlign: 'center', width: '50%' }}
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
          bottom: 100px;
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
          width: 250px;
          height: 250px;
          border-radius: 10px;
          background-color: #F1EFEF;
          position: relative;
          font-family: 'Manrope', sans-serif;
          z-index: 4;
        }

        .banner {
          background-color: #629560;
          color: #F1EFEF;
          padding: 10px;
          text-align: center;
          font-family: 'Manrope', sans-serif;
          display: flex;
          justify-content: space-between;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .banner-text {
          flex-grow: 1;
          font-size: 12px;
          text-align: left;
          padding-top: 3px;
        }

        .close-button {
          cursor: pointer;
          padding-bottom: 2px;
        }

        .close-button img {
          width: 8px;
        }

        .chat-content {
          padding: 10px;
          height: calc(100% - 50px);
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
          font-size: 10px;
        }

        .user {
          text-align: right;
          color: #221F1F;
          font-size: 10px;
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
        }

        .question {
          cursor: pointer;
          padding: 5px;
          border: 1px solid #ccc;
          margin-bottom: 5px;
          font-size: 10px;
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
          bottom: 20px; // Adjust the distance from the bottom as needed
          right: 20px; // Adjust the distance from the right as needed
          width: 30px;
          height: 30px;
        }
      `}</style>
    </>
  );
}
