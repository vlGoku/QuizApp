import * as yup from "yup";

const QuestionSchema = yup
  .object({
    questionTitle: yup
      .string()
      .required("Question is required")
      .min(10, "The question must have min. 10 chars.")
      .max(100, "The question must have max. 50 chars"),
    correctAnswer: yup.string().required("Answer is required"),
    answer2: yup.string().required("Answer is required"),
    answer3: yup.string().required("Answer is required"),
    answer4: yup.string().required("Answer is required"),
  })
  .required();

export default QuestionSchema;
