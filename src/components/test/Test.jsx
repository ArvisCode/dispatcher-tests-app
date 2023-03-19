import { useState, useEffect } from "react";

import { Question } from "../Question/Question";
import { Title, FinishButton } from "./Test.styled";

import { useTaskGetAllQuery } from "../../redux/taskApi";

export const Test = () => {
  const [result, setResult] = useState([undefined]);
  const [right, setRight] = useState([]);
  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);

  let questions = [];
  const { data } = useTaskGetAllQuery();
  if (data) {
    questions = [...data.response];
  }

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

  //useEffect(() => {
  //  console.log("result: ", count, "%");
  //  console.log(complete);
  //}, [count, complete]);

  //useEffect(() => {
  //  console.log("right: ", right);
  //  console.log("result: ", result);
  //}, [right, result]);

  return (
    <>
      <Title>Пройдіть тест</Title>
      {questions &&
        questions.map(({ question, answers, index_true_answer }, idx) => (
          <Question
            key={question}
            setRight={setRight}
            setResult={setResult}
            idx={idx}
            text={question}
            answers={answers}
            index_true_answer={index_true_answer}
            right={right}
            result={result}
            complete={complete}
          />
        ))}
      {complete === true ? (
        <Title>Ви відповіли вірно на {count}% запитань.</Title>
      ) : questions.length === result.length &&
        [...result].every((el) => el !== undefined) ? (
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
