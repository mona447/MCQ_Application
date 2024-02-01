import React, { useState, useEffect } from "react";
import '../Question.css'

const DataType = [
  {
    question:
      "What will be the output of the below program?\n\nclass A {\n    public static void main(String[] args) {\n        System.out.println(args.length);\n    }\n}",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
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
