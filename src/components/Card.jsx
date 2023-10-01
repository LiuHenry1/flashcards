const Card = ({ question, answer, difficulty, isFlipped, handleClick }) => {
  const className = "card " + difficulty + (isFlipped ? " flipped" : "") ;
  return (
    <div className={className} onClick={handleClick}>
      <div className="front">{question}</div>
      <div className="back">{answer}</div>
    </div>
  );
};

export default Card;
