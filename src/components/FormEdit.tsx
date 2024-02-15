import { IQuestion, QuestionInput } from "../ts/interfaces/global_interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import QuestionSchema from "./validationScheme";
import { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface Props {
  onSave: (question: QuestionInput) => void;
  editQuestion?: IQuestion;
  open: boolean;
  onClose: () => void;
  question?: QuestionInput;
}

export default function FormEdit({
  open,
  onSave,
  onClose,
  question = {
    questionTitle: "",
    correctAnswer: "",
    answer2: "",
    answer3: "",
    answer4: "",
  },
}: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuestionInput>({
    defaultValues: question,
    resolver: yupResolver(QuestionSchema),
  });

  useEffect(() => {
    if (question.id) reset(question);
  }, [question, reset]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="form-dialog-question">
        {question.id ? "Edit Question" : "Add new Question"}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSave)}>
        <DialogContent>
          <div>
            <TextField
              {...register("questionTitle")}
              error={!!errors.questionTitle}
              label="QuestionTitle"
            />
            {errors.questionTitle && <div>{errors.questionTitle.message}</div>}
          </div>
          <div>
            <TextField
              {...register("correctAnswer")}
              error={!!errors.correctAnswer}
              label="Correct Answer"
            />
            {errors.correctAnswer && <div>{errors.correctAnswer.message}</div>}
          </div>
          <div>
            <TextField
              {...register("answer2")}
              error={!!errors.answer2}
              label="Answer2"
            />
            {errors.answer2 && <div>{errors.answer2.message}</div>}
          </div>
          <div>
            <TextField
              {...register("answer3")}
              error={!!errors.answer3}
              label="Answer3"
            />
            {errors.answer3 && <div>{errors.answer3.message}</div>}
          </div>
          <div>
            <TextField
              {...register("answer4")}
              error={!!errors.answer4}
              label="Answer4"
            />
            {errors.answer4 && <div>{errors.answer4.message}</div>}
          </div>
          <DialogActions>
            <Button color="primary" type="submit">
              Save
            </Button>
            <Button color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
}
