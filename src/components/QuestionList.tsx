import { IQuestion, QuestionInput } from "../ts/interfaces/global_interface";
import { Container, Grid, Fab } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";
import useQuestions from "./useQuestions";
import FormEdit from "./FormEdit";
import QuestionItemList from "./QuestionItemList";

export default function QuestionList() {
  const [err, handleDelete, handleAdd, questions] = useQuestions();
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    question: IQuestion | null;
  }>({
    open: false,
    question: null,
  });
  const [formDialog, setFormDialog] = useState<{
    open: boolean;
    question?: IQuestion;
  }>({ open: false });

  const handleDialog = (open: boolean, question: IQuestion) => {
    if (open) {
      setDeleteDialog({ open: true, question });
    } else {
      setDeleteDialog({ open: false, question: null });
    }
  };

  const handleEditDialog = (open: boolean, question: IQuestion) => {
    if (open) {
      setFormDialog({ open: true, question });
    } else {
      setFormDialog({ open: false, question: undefined });
    }
  };

  {
    if (err !== null) {
      return <Container>{(err as Error).message}</Container>;
    } else {
      return (
        <Container sx={{ p: 10 }}>
          <Grid container spacing={2}>
            {" "}
            {(questions as IQuestion[]).map(
              (question: IQuestion): JSX.Element => {
                return (
                  <QuestionItemList
                    key={question.id}
                    question={question}
                    onDialog={handleDialog}
                    onEdit={handleEditDialog}
                  />
                );
              }
            )}
          </Grid>
          <DeleteDialog
            title="Delete Element"
            text="Do you really want to delete the question?"
            open={deleteDialog.open}
            onConfirm={(isConfirmed) => {
              if (isConfirmed && deleteDialog.question) {
                (handleDelete as (question: IQuestion) => Promise<void>)(
                  deleteDialog.question
                );
              }
              setDeleteDialog({ open: false, question: null });
            }}
          ></DeleteDialog>
          <FormEdit
            onSave={(question: QuestionInput) => {
              setFormDialog({ open: false, question: undefined });
              (handleAdd as (question: QuestionInput) => Promise<void>)(
                question
              );
            }}
            open={formDialog.open}
            onClose={() => setFormDialog({ open: false, question: undefined })}
            question={formDialog.question}
          />
          <Fab
            color="primary"
            onClick={() => setFormDialog({ open: true, question: undefined })}
            sx={{
              position: "fixed",
              right: "50%",
              bottom: "10%",
              transform: "translateX(-50%)",
            }}
          >
            <Add />
          </Fab>
        </Container>
      );
    }
  }
}
