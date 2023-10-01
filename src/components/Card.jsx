const Card = ({ question, answer, isFlipped, handleClick }) => {
  const className = "card" + (isFlipped ? " flipped" : "");
  return (
    <div className={className} onClick={handleClick}>
      <div className="front">{question}</div>
      <div className="back">{answer}</div>
    </div>
  );
};

export default Card;
