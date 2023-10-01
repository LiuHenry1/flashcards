import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import content from "./assets/contentJSON.json";
import AnswerSpace from "./components/AnswerSpace";

const App = () => {
  const [previous, setPrevious] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isFlipped, setView] = useState(false);
  const [userAnswer, setAnswer] = useState("");
  const [status, setStatus] = useState("unanswered");

  const questionsAndAnswers = content.questionsAndAnswers;

  const handlePrevClick = () => {
    if (previous.length === 0) {
      return;
    }

    const next = previous[previous.length - 1];

    setView(false);
    setPrevious(previous.slice(0, -1));
    setCurrent(next);
    setAnswer("");
    setStatus("unanswered");
  };

  const handleNextClick = () => {
    const min = 0;
    const max = questionsAndAnswers.length - 1;

    let next;
    do {
      next = Math.floor(Math.random() * (max - min + 1) + min);
    } while (next == current);

    setView(false);
    setPrevious([...previous, current]);
    setCurrent(next);
    setAnswer("");
    setStatus("unanswered");
  };

  const handleCardClick = () => {
    setView(!isFlipped);
  };

  const handleInput = (e) => {
    setAnswer(e.target.value);
    setStatus("unanswered");
  };

  const handleSubmit = (e) => {
    if (userAnswer === "") {
      return;
    }
    
    e.preventDefault();
    const userAnswerLower = userAnswer.toLowerCase();
    const correctAnswerLower = 
      questionsAndAnswers[current]["a"].toLowerCase();

    if (userAnswerLower === correctAnswerLower) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  }

  return (
    <>
      <h1>Set Theory Study Guide</h1>
      <h2>How well do you know your set vocabulary? Test your knowledge!</h2>
      <h5>Number of cards: {questionsAndAnswers.length}</h5>
      <Card
        question={questionsAndAnswers[current]["q"]}
        answer={questionsAndAnswers[current]["a"]}
        isFlipped={isFlipped}
        handleClick={handleCardClick}
        key={current}
      />
      <AnswerSpace 
        value={userAnswer} 
        handleInput={handleInput} 
        handleSubmit={handleSubmit} 
        status={status} />
      <div className="button-panel">
        <button id="prevBtn" onClick={handlePrevClick}>
          ←
        </button>
        <button id="nextBtn" onClick={handleNextClick}>
          ➝
        </button>
      </div>
    </>
  );
};

export default App;
