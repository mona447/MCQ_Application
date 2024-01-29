import React from 'react';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className='page-container'>
      <div className='quiz-container'>
        <h1>Quiz App</h1>
        <form className="quiz-form">
          <div className="button-container">
            <button type="button" className="quiz-button">Java</button>
            <button type="button" className="quiz-button">Python</button>
            <button type="button" className="quiz-button">HTML</button>
            <button type="button" className="quiz-button">CSS</button>
            <button type="button" className="quiz-button">JavaScript</button>
            <button type="button" className="quiz-button">ReactJS</button>
            <button type="button" className="quiz-button">SQL</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Quiz;
