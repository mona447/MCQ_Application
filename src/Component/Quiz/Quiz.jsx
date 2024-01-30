import React from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <div className='page-container'>
      <div className='quiz-container'>
        <h1>Quiz App</h1>
        <form className="quiz-form">
          <div className="button-container">
            <Link to="/java">
               <button type="button" className="quiz-button">Java</button>
            </Link>
            <Link to="/python">
               <button type="button" className="quiz-button">Python</button>
            </Link>
            <Link to="/javascript">
               <button type="button" className="quiz-button">JavaScript</button>
            </Link>
            <Link to="/css">
               <button type="button" className="quiz-button">CSS</button>
            </Link>
            <Link to="/html">
               <button type="button" className="quiz-button">HTML</button>
            </Link>
            <Link to="/reactjs">
               <button type="button" className="quiz-button">ReactJS</button>
            </Link>
            <Link to="/sql">
               <button type="button" className="quiz-button">SQL</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Quiz;
