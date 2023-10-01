const Card = ({ question, answer, isFlipped, handleClick }) => {
  return (
    <div className={"card" + (isFlipped ? " flipped" : "")} onClick={handleClick}>
      <div className="front">{question}</div>
      <div className="back">{answer}</div>
    </div>
  );
};

export default Card;
