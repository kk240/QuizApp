import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const handleSelect = (option) => {
    if (selected === option && selected === correct) {
      return "select";
    } else if (selected === option && selected !== correct) {
      return "wrong";
    } else if (option === correct) {
      return "select";
    }
  };
  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) setScore(score + 1);
    setError(false);
  };
  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };
  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError(true);
    }
  };
  return (
    <div className="question">
      <h1>Question {currQues + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>Please select one value!!</ErrorMessage>}
          {options &&
            options.map((option) => (
              <button
                onClick={() => handleCheck(option)}
                className={`singleOption ${selected && handleSelect(option)}`}
                key={option}
                disabled={selected}
              >
                {option}
              </button>
            ))}
        </div>
        <div className="control">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185, marginLeft: 10 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
