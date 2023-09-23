import { useState } from "react";

const Card = ({question, answer}) => {
  const [isFlipped, flip] = useState(false);

  const handleCardClick = () => {
    flip(!isFlipped);
  }

  if (isFlipped) {
    return (
      <div className="card flipped" onClick={handleCardClick}>
        <div className="front">
          {question}
        </div>
        <div className="back">
          {answer}
        </div>
      </div>
    )
  } 
  return (
    <div className="card" onClick={handleCardClick}>
      <div className="front">
        {question}
      </div>
      <div className="back">
        {answer}
      </div>
    </div>
  )
    
}

export default Card;