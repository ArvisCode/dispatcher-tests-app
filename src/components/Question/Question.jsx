import { Fragment } from "react";
import { QuestionText } from "./Question.styled";

const Answers = ({ answers }) => {
  const checkedAnswer = "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, ": ", value);
  };

  return answers.map((answer) => (
    <Fragment key={answer}>
      <label style={{ display: "flex" }}>
        <input
          type="radio"
          checked={checkedAnswer === answer}
          name={answer}
          value={answer}
          onChange={handleChange}
        />
        {answer}
      </label>
    </Fragment>
  ));
};

export const Question = ({ number, text, answers }) => {
  return (
    <>
      <QuestionText>
        {number}. {text}
      </QuestionText>
      {answers && <Answers answers={answers} />}
    </>
  );
};
