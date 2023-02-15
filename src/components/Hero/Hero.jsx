import { HeroContainer, HeroTitle, SubmitButton } from "./Hero.styled";
import { Question } from "../Question/Question";

export const Hero = () => {
  const questions = [
    {
      number: "1",
      text: "Ups...",
      answers: [
        "Question not found..11",
        "Question not found..12",
        "Question not found..13",
      ],
    },
    {
      number: "2",
      text: "Ups...",
      answers: [
        "Question not found..21",
        "Question not found..22",
        "Question not found..23",
      ],
    },
    {
      number: "3",
      text: "Ups...",
      answers: [
        "Question not found..31",
        "Question not found..32",
        "Question not found..33",
      ],
    },
  ];
  return (
    <>
      <HeroContainer>
        <HeroTitle>Пройдіть тест</HeroTitle>
        {questions &&
          questions.map((question) => <Question props={question} />)}
        <SubmitButton disabled="true" type="button" name="submitButton">
          Перевірити
        </SubmitButton>
      </HeroContainer>
    </>
  );
};
