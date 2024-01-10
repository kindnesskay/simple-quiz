import Axios from "axios";
export async function fetchQuestion(questionID: number) {
  try {
    const response = await Axios.get(
      `https://web-dev-quiz-api.vercel.app/question/${questionID}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
