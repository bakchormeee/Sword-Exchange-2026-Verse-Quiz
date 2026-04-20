import verses from "../../../data/verses";
import SingleVerseQuiz from "./SingleVerseQuiz";
import SettingsBar from "../../settings/SettingsBar";
import { type SyntheticEvent } from "react";
import type { QuizType, Verse } from "../../../types";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Stack,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import VerseSelector from "../../settings/VerseFilter";

const VerseContentQuizQns = ({ onSubmit, versesForQuiz }) => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newSubmissions = versesForQuiz.map((verse) => ({
      ...verse,
      submittedContent: data.get(verse.reference) as string,
    }));
    onSubmit(newSubmissions);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {versesForQuiz.map((verse, idx) => (
          <SingleVerseQuiz verse={verse} key={idx} idx={idx} />
        ))}
      </Stack>
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 3, borderRadius: 2, py: 1.5 }}
      >
        Submit Answers
      </Button>
    </form>
  );
};

export default VerseContentQuizQns;
