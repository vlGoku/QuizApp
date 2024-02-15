import { useState, useEffect, useContext } from "react";
import { IQuestion, QuestionInput } from "../ts/interfaces/global_interface";
import QuestionContext from "./QuestionContext";

export default function useQuestions() {
  const [questions, setQuestions] = useContext(QuestionContext);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    (async () => {
      try {
        const data = await fetch("/questions", options);
        setQuestions((await data.json()) as IQuestion[]);
      } catch (error) {
        setErr(error as Error);
      }
    })();
  }, [setQuestions]);

  async function handleDelete(question: IQuestion) {
    const options = {
      method: "DELETE",
    };
    const res = await fetch(`/questions/${question.id}`, options);
    if (res.ok) {
      setQuestions((prevQuestion) =>
        prevQuestion.filter((prevQuestion) => prevQuestion.id !== question.id)
      );
    }
  }

  async function handleAdd(question: QuestionInput): Promise<void> {
    let method = "POST";
    let url = "/movies";
    if (question.id) {
      method = "PUT";
      url += `/${question.id}`;
    }
    const options = {
      method: "POST",
      body: JSON.stringify(question),
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch("/questions", options);
    const data = await res.json();
    if (question.id) {
      setQuestions((prevQuestions) =>
        prevQuestions?.map((prevQuestion) => {
          if (prevQuestion.id === question.id) {
            return data;
          }
          return prevQuestion;
        })
      );
    } else {
      setQuestions((prevQuestion) => [...prevQuestion, data]);
    }
  }

  return [err, handleDelete, handleAdd, questions];
}
