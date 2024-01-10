import QuestionCard from "@/components/questionCard";
import Axios from "axios";
import { errors } from "undici-types";
export default async function Home() {
  async function fetchQuestion(questionID: number) {
    try {
      const response = await Axios.get(
        `http://127.0.0.1:3000/question/${questionID}`
      );
      

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const question = await fetchQuestion(3);
  return <main>{question && <QuestionCard quiz={question} />}</main>;
}
