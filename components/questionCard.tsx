"use client";
import { useState } from "react";
export type selectedOption = {
  answer: string;
  id: number;
} | null;

export default function QuizQuestion({
  quiz,
  handleNext,
  handleQuit,
  percentage,
  max
}: {
  quiz: any;
  handleNext: any;
  handleQuit:any
  percentage:number
  max:number
}) {
  const question = quiz?.question;
  const options = quiz?.options;
  const [selectedOption, setSelectedOption] = useState<selectedOption>(null);
  const currentPercentage=((100 * percentage)/max)-max
  
  
  
  const handleOptionChange = (option: string) => {
    setSelectedOption({ answer: option, id: quiz?.id });
  };

  function handleNextButton() {
    if (!selectedOption) return;
    handleNext(selectedOption);
    
  }

  return (
    <div className="w-full max-w-md p-2">

      <h1 className="font-bold text-xl mb-1 text-neutral-300">Web Dev Quiz</h1>
      <div>
        <h2 className="font-bold text-3xl mb-1">Question</h2>
      </div>
      <div>
        <h3 className="font-bold p-2 mb-2 text-xl">{question}</h3>
        <div className="w-full bg-slate-300 h-4 mb-2 rounded-md overflow-hidden">
          <div className="h-full bg-sky-500 rounded-md" style={{width:`${currentPercentage}%`}}></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {options.map((option: string, index: number) => (
          <label
            key={index}
            htmlFor={`option${index}`}
            className={` flex items-center cursor-pointer px-2 py-2 gap-2  justify-between w-full min-h-16 rounded-xl border-solid border-2 border-black hover:border-sky-500 hover:text-sky-500 text-gray-700 font-semibold`}
          >
            <input
              type="radio"
              id={`option${index}`}
              name="options"
              className="hidden"
              checked={selectedOption?.answer === option}
              onChange={() => handleOptionChange(option)}
            />
            <span className="w-full">

            {option}
            </span>

            <div
              className={`w-full max-w-6 h-6 border-2  border-gray-400 rounded-full transition duration-300 ease-in-out  ${
                selectedOption?.answer === option
                  ? "bg-green-500 border-green-500"
                  : ""
              }`}
            >
              {selectedOption?.answer === option && (
                <svg
                  className="w-full h-full mx-auto my-auto text-white opacity-100 transform scale-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
          </label>
        ))}
      </div>
      <div className="flex px-4 w-full mt-2 font-bold gap-4  ">
        <button onClick={handleQuit} className="h-16 p-2 rounded-lg hover:bg-red-500 hover:text-white border border-solid w-1/2">Quit</button>
        <button
          className="h-16 p-2 rounded-lg hover:bg-sky-600 bg-sky-400 text-white w-1/2"
          onClick={handleNextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}
