export const Answers = ({
  answers,
  text,
  index_true_answer,
  setResult,
  setRight,
  idx,
  right,
  result,
}) => {
  const res = [...result];
  const raw = [...right];

  const handleChange = (e) => {
    const { id } = e.target;
    res[idx] = Number(id);
    setResult(res);
    raw[idx] = index_true_answer;
    setRight(raw);
  };

  return (
    <>
      {answers &&
        answers.map((answer, index) => (
          <label style={{ display: "flex" }} key={answer}>
            <input
              id={index}
              type="radio"
              name={text}
              value={answer}
              onChange={handleChange}
            />
            {answer}
          </label>
        ))}
    </>
  );
};
