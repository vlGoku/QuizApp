import { createContext, Dispatch, SetStateAction } from "react";
import { IQuestion } from "../ts/interfaces/global_interface";

type QuestionContextType = [
  IQuestion[] | null,
  Dispatch<SetStateAction<IQuestion[]>>
];

const QuestionContext = createContext<QuestionContextType>([null, () => {}]);

export default QuestionContext;
