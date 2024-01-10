const Axios = require("axios");
export default async function submitAnswer(selectedOption: {
  answer: string;
  id: number;
}) {
  try {
    const response = await Axios.post(
      `http://127.0.0.1:3000/answer/${selectedOption.id}`,
      {
        answer: selectedOption.answer,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Answer submission result:", response.data.message);
    return response.data.correct;
  } catch (error) {
    console.log(error);
  }
}
