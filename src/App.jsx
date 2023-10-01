import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

const App = () => {
  const [previous, setPrevious] = useState([]);
  const [current, setCurrent] = useState(0);

  const questionsAndAnswers = [
    {q: "What is a set?", a: "An unordered collection of objects"}, 
    {q: "What are the objects of a set called?", a: "Elements"},
    {q: "_ is defined as the number of elements in a set", a: "Cardinality"},
    {q: "If every element in set A is in set B, then A is a _ of B", a: "subset"},
    {q: "If A is a subset of B, but there exists an element in A not in B, then A is a _ of B", a: "proper subset"},
    {q: "The _ of A and B is the set of elements in A or B", a: "union" },
    {q: "The _ of A and B is the set of elements in both A and B", a: "intersection"},
    {q: "The _ between A is B is the set of elements in A but not B", a: "difference"},
    {q: "The difference between two sets is not _", a: "commutative"},
    {q: "However, _ is commutative", a: "symmetric difference"},
  ]
  const handlePrevClick = () => {
    if (previous.length === 0) {
      return;
    }
    const next = previous[previous.length - 1];
    setPrevious(previous.slice(0, -1));
    setCurrent(next);
  }

  const handleNextClick = () => {
    const min = 0;
    const max = questionsAndAnswers.length - 1;

    let next;
    do {
      next = Math.floor(Math.random() * (max - min + 1) + min);
    } while (next == current)
    setPrevious([...previous, current]);
    setCurrent(next);
  }

  return (
    <>
      <h1>Set Theory Study Guide</h1>
      <h2>How well do you know your set vocabulary? Test your knowledge!</h2>
      <h5>Number of cards: {questionsAndAnswers.length}</h5>
      <Card question={questionsAndAnswers[current]['q']} answer={questionsAndAnswers[current]['a']} key={current} />
      <div className="button-panel">
        <button id="prevBtn" onClick={handlePrevClick}>←</button>
        <button id="nextBtn" onClick={handleNextClick}>➝</button>
      </div>
    </>
  )
}

export default App
