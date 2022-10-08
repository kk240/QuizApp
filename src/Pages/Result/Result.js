import React, { useEffect } from "react";
import { Button } from "@mui/material";
import "./Result.css";
import { useNavigate } from "react-router-dom";

const Result = ({ name, score }) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title"> Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to HomePage
      </Button>
    </div>
  );
};

export default Result;
