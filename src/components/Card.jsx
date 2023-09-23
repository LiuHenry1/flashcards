const Card = ({question, answer}) => {
    return (
      <div className="card">
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