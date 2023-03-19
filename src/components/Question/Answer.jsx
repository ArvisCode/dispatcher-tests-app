import { AnswerText, AnswerTextTrue } from "./Question.styled";

export const Answers = ({
  answers,
  text,
  index_true_answer,
  setResult,
  setRight,
  idx,
  right,
  result,
  complete,
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
            {complete ? (
              index === index_true_answer ? (
                <AnswerTextTrue>{answer}</AnswerTextTrue>
              ) : (
                <AnswerText>{answer}</AnswerText>
              )
            ) : (
              <AnswerText>{answer}</AnswerText>
            )}
          </label>
        ))}
    </>
  );
};
