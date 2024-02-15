import "./App.css";
import { Typography } from "@mui/material";
import QuestionsProvider from "./components/QuestionProvider";
import QuestionList from "./components/QuestionList";

function App() {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Quiz Game
      </Typography>
      <QuestionsProvider>
        <QuestionList />
      </QuestionsProvider>
    </>
  );
}

export default App;
