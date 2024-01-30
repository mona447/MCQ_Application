import React from 'react';

const HTML = () => {
  return (
    <div className='page-container'>
      <div className='quiz-container'>
       <h2>HTML Chapters</h2>
        <form className="quiz-form">
          <div className="button-container">
            <button type="button" className="quiz-button">Statements</button>
            <button type="button" className="quiz-button">OPerator</button>
            <button type="button" className="quiz-button">Function</button>
            <button type="button" className="quiz-button">Query</button>
            <button type="button" className="quiz-button">Joins</button>
            <button type="button" className="quiz-button">Constraints</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HTML;
