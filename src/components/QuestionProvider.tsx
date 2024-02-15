import React, { useState } from "react";
import QuestionContext from "./QuestionContext";
import { IQuestion } from "../ts/interfaces/global_interface";

interface Props {
  children: React.ReactNode;
}

export default function QuestionsProvider({ children }: Props) {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  return (
    <QuestionContext.Provider value={[questions, setQuestions]}>
      {children}
    </QuestionContext.Provider>
  );
}
