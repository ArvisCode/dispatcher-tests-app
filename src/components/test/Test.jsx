import { useState, useEffect } from "react";

import { Question } from "../Question/Question";
import { questions } from "../../test-response/questions";
import { Title, FinishButton } from "./Test.styled";

export const Test = () => {
  const [result, setResult] = useState([]);
  const [right, setRight] = useState([]);
  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);

  const finish = () => {
    const score = result.reduce((prevValue, el, index) => {
      if (el === right[index]) {
        return prevValue + 1;
      }
      return prevValue;
    }, count);

    setCount((score / right.length) * 100);
    setComplete(true);
  };

  useEffect(() => {
    console.log("result: ", count, "%");
    console.log(complete);
  }, [count, complete]);

  useEffect(() => {
    console.log("right: ", right);
    console.log("result: ", result);
  }, [right, result]);

  return (
    <>
      <Title>Пройдіть тест</Title>
      {questions &&
        questions.map(({ text, answers, index_true_answer }, idx) => (
          <Question
            key={text}
            setRight={setRight}
            setResult={setResult}
            idx={idx}
            text={text}
            answers={answers}
            index_true_answer={index_true_answer}
            right={right}
            result={result}
          />
        ))}
      {complete === true ? (
        <Title>Ви відповіли вірно на {count}% запитань.</Title>
      ) : questions.length === result.length ? (
        <FinishButton type="button" name="finishButton" onClick={finish}>
          Завершити
        </FinishButton>
      ) : (
        <Title style={{ color: "red" }}>
          Надайте відповіді на всі запитання
        </Title>
      )}
    </>
  );
};
