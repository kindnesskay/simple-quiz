"use client";
import GameOver from "@/components/GameOver";
import QuizQuestion, { selectedOption } from "@/components/questionCard";
import { fetchQuestion } from "@/lib/GetQuestion";
import submitAnswer from "@/lib/submitAnswer";
import { useEffect, useState } from "react";
export default function page() {
  const [question, setQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const lastQuestion = 10;
  const [score, setScore] = useState(0);
  async function fetchData(id: number) {
    const response = await fetchQuestion(id);
    setQuestion(response);
  }
  try {
  } catch (error) {}
  useEffect(() => {
    fetchData(questionNumber);
  }, [questionNumber]);
  const handleAgain = () => {
    setQuestionNumber(1);
    setGameOver(false);
    setScore(0)
  };
  const handleNext = async (answer: selectedOption) => {
    
    if (questionNumber >= lastQuestion) {
      setGameOver(true);
      return;
    }
    try {
      const response = await submitAnswer(answer);
      if (response == true) {
        setScore(score + 1);
      }
    } catch (error) {}
    setQuestionNumber(questionNumber + 1);
  };

  const handleEnd = () => {
    return null;
  };
  return (
    <>
      {gameOver && (
        <div className="w-full flex justify-center pt-8 px-4">
          <GameOver score={score} handleAgain={handleAgain} handleEnd={handleEnd} />
        </div>
      )}
      {question && !gameOver && (
        <QuizQuestion key={questionNumber} quiz={question} handleNext={handleNext} />
      )}
    </>
  );
}
