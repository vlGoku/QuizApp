import React, { useState } from "react";
import { IQuestion } from "../ts/interfaces/global_interface";
import {
  Card,
  CardContent,
  Grid,
  Container,
  Typography,
  CardActions,
  IconButton,
  Radio,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

interface Props {
  question: IQuestion;
  onDialog: (open: boolean, question: IQuestion) => void;
  onEdit: (open: boolean, question: IQuestion) => void;
}

export default function QuestionItemList({
  question,
  onDialog,
  onEdit,
}: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const answers = [
    question.correctAnswer,
    question.answer2,
    question.answer3,
    question.answer4,
  ];

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <Container>
      <Card sx={{ mb: "30px" }}>
        <CardContent sx={{ backgroundColor: "peachpuff" }}>
          <Typography component="h2" variant="h5">
            Question: {question.questionTitle}
          </Typography>
          {answers.map((answer, index) => (
            <div key={index}>
              <Radio
                onChange={() => handleAnswerSelection(answer)}
                checked={selectedAnswer === answer}
                value={answer}
              />
              <Typography
                component="label"
                variant="button"
                sx={{ fontSize: "30px" }}
              >
                {answer}
              </Typography>
            </div>
          ))}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            color="primary"
            aria-label="delete-question"
            onClick={() => onDialog(true, question)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="edit-question"
            onClick={() => onEdit(true, question)}
          >
            <Edit />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
}
