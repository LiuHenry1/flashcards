const AnswerSpace = ({value, handleInput, handleSubmit, status}) => {
  let className = "user-input ";
  if (status !== "unanswered") {
    className += status;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className={className}
        type="text"
        value={value}
        onChange={handleInput}
        placeholder="Enter your guess here!"
      />
      <input type="submit"/>
    </form>
  );
};

export default AnswerSpace;
