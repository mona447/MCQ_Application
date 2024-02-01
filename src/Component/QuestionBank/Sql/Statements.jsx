import React, { useState, useEffect } from "react";
import '../Question.css'

const DataType = [
  {
    question:"Which Command in sql has grant access ?",
    options: ["DCL", "DDL", "DQL", "DML"],
    correctAnswer: "DCL",
  },
  {
    question: "To make the changes permanent which command we need to use in SQL ?",
    options: ["DQL", "DDL", "DCL", "TCL"],
    correctAnswer: "TCL",
  },
  {
    question: "Why we use Data Manipulation Language ??",
    options: ["to insert", "to update", "to delete", "all of the above"],
    correctAnswer: "all of the above",
  },
  {
    question: "Which command language we use in SQL to grant access or denay access present in database table?",
    options: ["DCL", "TCL", "DML", "DDL"],
    correctAnswer: "DCL",
  },
  {
    question: "Which of the following is not a DDL command?",
    options: ["TRUNCATE", "ALTER", "CREATE", "UPDATE"],
    correctAnswer: "UPDATE",
  },
  {
    question: "Which of the following are TCL commands?",
    options: ["COMMIT and ROLLBACK", "UPDATE and TRUNCATE", "SELECT and INSERT", "GRANT and REVOKE"],
    correctAnswer: "COMMIT and ROLLBACK",
  },
  {
    question: "Which statement is used to delete all rows in a table without having the action logged?",
    options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    correctAnswer: "TRUNCATE",
  },
  {
    question: "What does the following code snippet do?\n\nDELETE FROM STUDENTS \n\nWHERE AGE = 16; \n\nROLLBACK;",
    options: ["Performs an undo operation on the delete operation", "delete the rows from the table where age=16", "delete the entire table", "None of the above"],
    correctAnswer: "Performs an undo operation on the delete operation",
  },
  {
    question: "Which of the following is the full form of DDL??",
    options: ["Data Derivation Language", "Dynamic Derivation Language", "Data Defination Language", "Data Define Language"],
    correctAnswer: "Data Defination Language",
  },
  {
    question: "Which language command we use to retrive data from a table?",
    options: ["All the Below", "Join", "Selection", "Projection"],
    correctAnswer: "All the Below",
  },
];

const TestComponent = () => {
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(60); // Initial time in seconds (10 minutes)

  useEffect(() => {
    let timer;
    if (isTestStarted && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000); // Update every second
    } else if (remainingTime === 0) {
      handleNextQuestion(); // Automatically move to the next question when time runs out
    }
    return () => clearInterval(timer);
  }, [isTestStarted, remainingTime]);

  const startTest = () => {
    setIsTestStarted(true);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct and update the score
    if (selectedOption === DataType[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption("");
    setRemainingTime(60); // Reset the timer for the next question
  };

  const handleSubmit = () => {
    // Evaluate the last question before submitting
    if (selectedOption === DataType[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Finish the test
    setIsTestFinished(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="test-container">
      {!isTestStarted && <button onClick={startTest}>Start Test</button>}

      {isTestStarted &&
        !isTestFinished &&
        currentQuestionIndex < DataType.length && (
          <div>
            <h3>Question {currentQuestionIndex + 1}:</h3>
            <p>{DataType[currentQuestionIndex].question}</p>
            <p>
              Time Remaining:{" "}
              <span className="time-remaining">
                {formatTime(remainingTime)}
              </span>
            </p>{" "}
            <ul>
              {DataType[currentQuestionIndex].options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="options"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
            <button onClick={handleNextQuestion}>Next</button>
          </div>
        )}

      {isTestFinished && (
        <div>
          <h3>Test Finished!</h3>
          <p>
            Your score: {score} out of {DataType.length}
          </p>
        </div>
      )}

      {isTestStarted && currentQuestionIndex === DataType.length && (
        <div>
          <h3>Test Finished!</h3>
          <p>
            Your score: {score} out of {DataType.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
