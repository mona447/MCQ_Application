import React from 'react';
import { Link } from 'react-router-dom';

const SQL = () => {
  return (
    <div className='page-container'>
      <div className='quiz-container'>
       <h2>SQL Chapters</h2>
        <form className="quiz-form">
          <div className="button-container">
          <Link to="/statements">
            <button type="button" className="quiz-button">Statements</button></Link>
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

export default SQL;
