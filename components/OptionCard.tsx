"use client";
import { string } from "prop-types";
import { useState } from "react";
import QuestionCard from "./questionCard";
export default function OptionCard({
  text,
  id,
  checked,
}: {
  text: string;
  id: number;
  checked: boolean;
}) {
  const [isChecked, setIsChecked] = useState(checked || false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className=" px-8 py-2 flex items-center  justify-between w-full h-16 rounded-xl border-solid border-2 border-black hover:border-sky-500 hover:text-sky-500">
      <p className="font-semibold text-lg">{text}</p>
      <label
        htmlFor="roundCheckbox"
        className=" relative flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id="roundCheckbox"
          className="text-green-600 absolute  h-full w-full opacity-0"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div
          className={`h-6 w-6 rounded-full ${
            isChecked ? "bg-green-400" : "bg-transparent"
          } border-2 border-solid border-black`}
        ></div>
      </label>
    </div>
  );
}

export function Options({ array }: { array: string[] }) {
  const initialCheckboxes = Array.from(
    { length: array.length - 1 },
    () => false
  );
  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxes);
  const handleCheckboxChange = (index: number) => {
    setCheckboxStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {array &&
        array.map((option, index) => {
          return (
            <OptionCard text={option} key={index} id={index} checked={false} />
          );
        })}
    </div>
  );
}

export const QuizQuestion = ({
  question,
  options,
}: {
  question: string;
  options: string[];
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1 className="font-bold text-xl mb-2 text-neutral-300">Web Dev Quiz</h1>
      <div>
        <h2 className="font-bold text-3xl mb-4">Question</h2>
      </div>
      <div>
        <h3 className="font-bold p-2 mb-4 text-xl">{question}</h3>
      </div>
      <div className="flex flex-col gap-4">
        {options.map((option: string, index: number) => (
          <label
            key={index}
            htmlFor={`option${index}`}
            className="flex items-center cursor-pointer px-8 py-2  justify-between w-full h-16 rounded-xl border-solid border-2 border-black hover:border-sky-500 hover:text-sky-500"
          >
            <input
              type="radio"
              id={`option${index}`}
              name="options"
              className="hidden"
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <span className="text-gray-700 font-semibold text-lg">
              {option}
            </span>
            <div
              className={`w-6 h-6 border-2  border-gray-400 rounded-full transition duration-300 ease-in-out mr-2 ${
                selectedOption === option ? "bg-green-500 border-green-500" : ""
              }`}
            >
              {selectedOption === option && (
                <svg
                  className="w-full h-full mx-auto my-auto text-white opacity-100 transform scale-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
          </label>
        ))}
      </div>
      <div className="flex px-4 w-full mt-2 font-bold gap-4  ">
        <button className="h-16 p-2 rounded-lg w-1/2">Quit</button>
        <button className="h-16 p-2 rounded-lg bg-sky-400 text-white w-1/2">
          Next
        </button>
      </div>
    </div>
  );
};
