import { IQuestion } from "../ts/interfaces/global_interface";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  IconButton,
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
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h5">
            Question: {question.questionTitle}
          </Typography>
          <Typography component="h5" variant="subtitle1" sx={{ mb: 1 }}>
            {question.answer3}
          </Typography>
          <Typography component="span" variant="body1">
            {question.correctAnswer}
          </Typography>
          <Typography component="h5" variant="subtitle1" sx={{ mb: 1 }}>
            {question.answer2}
          </Typography>
          <Typography component="h5" variant="subtitle1" sx={{ mb: 1 }}>
            {question.answer4}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton color="primary" aria-label="delete-question">
            <DeleteIcon />
          </IconButton>
          <IconButton color="primary" aria-label="edit-question">
            <Edit />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
