export interface IQuestion {
  id: number;
  questionTitle: string;
  correctAnswer: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

export type QuestionInput = Omit<IQuestion, "id"> & {
  id?: number;
};
