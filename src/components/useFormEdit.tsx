import { useState, useEffect } from "react";
import { QuestionInput, IQuestion } from "../ts/interfaces/global_interface";

export default function useFormEdit(
  onSave: (question: QuestionInput) => void,
  editQuestion: IQuestion
) {
  const [question, setQuestion] = useState<QuestionInput>({
    questionTitle: "",
    correctAnswer: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  useEffect(() => {
    if (editQuestion) {
      setQuestion(editQuestion);
    }
  }, [editQuestion]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setQuestion((prevQuestion) => {
      return { ...prevQuestion, [name]: value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(question);
  };
  return [question, handleChange, handleSubmit];
}
