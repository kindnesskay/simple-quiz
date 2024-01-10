import { selectedOption } from "@/components/questionCard";
const Axios = require("axios");
export default async function submitAnswer(selectedOption: selectedOption) {
  try {
    const response = await Axios.post(
      `https://web-dev-quiz-api.vercel.app/answer/${selectedOption?.id}`,
      {
        answer: selectedOption?.answer,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.correct;
  } catch (error) {
    console.log(error);
  }
}
