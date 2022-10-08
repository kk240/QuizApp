import { TextField, MenuItem, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../../Data/Categories";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="quiz-settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        {error && <ErrorMessage>Please fill all the fields.</ErrorMessage>}
        <div className="settings_select">
          <TextField
            label="Enter Player Name"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="select category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((option) => (
              <MenuItem key={option.category} value={option.value}>
                {option.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="select difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="easy" value="easy">
              easy
            </MenuItem>
            <MenuItem key="medium" value="medium">
              medium
            </MenuItem>
            <MenuItem key="hard" value="hard">
              hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="./quiz.svg" className="banner" alt="quiz" />
    </div>
  );
};

export default Home;
