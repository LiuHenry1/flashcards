const AnswerSpace = ({value, handleInput, handleSubmit, status}) => {
  let className = "user-input ";
  if (status !== "unanswered") {
    className += status;
  }
  return (
    <form action={handleSubmit} onSubmit={handleSubmit}>
      <input className={className}
        type="text"
        value={value}
        onChange={handleInput}
        placeholder="Enter your guess here!"
      />
      <input className="submit-answer" type="submit"/>
    </form>
  );
};

export default AnswerSpace;
