import React from 'react';
import { Link } from 'react-router-dom';

const Java = () => {
  return (
    <div className='page-container'>
      <div className='quiz-container'>
       <h2>Java Chapters</h2>
        <form className="quiz-form">
          <div className="button-container">
            <Link to="/datatype">
              <button type="button" className="quiz-button">Data types</button>
            </Link>
            <button type="button" className="quiz-button">Variables</button>
            <button type="button" className="quiz-button">Oops</button>
            <button type="button" className="quiz-button">Exception</button>
            <button type="button" className="quiz-button">Collection</button>
            <button type="button" className="quiz-button">Regex</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Java;
