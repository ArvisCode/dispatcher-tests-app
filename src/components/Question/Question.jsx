import { QuestionText } from "./Question.styled";
import { Answers } from "./Answer";

export const Question = ({
  idx,
  text,
  answers,
  index_true_answer,
  setResult,
  setRight,
  right,
  result,
}) => {
  return (
    <>
      <form>
        <QuestionText>
          {idx + 1}. {text}
        </QuestionText>
        {answers && (
          <Answers
            idx={idx}
            setRight={setRight}
            setResult={setResult}
            answers={answers}
            text={text}
            index_true_answer={index_true_answer}
            right={right}
            result={result}
          />
        )}
      </form>
    </>
  );
};
