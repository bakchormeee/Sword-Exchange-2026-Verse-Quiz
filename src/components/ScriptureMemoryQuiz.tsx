import VerseContentQuizQns from "./VerseContentQuiz/testpage/index";
import VerseContentQuizSummaryPage from "./VerseContentQuiz/summarypage/index";
import VerseRefQuizQns from "./VerseReferenceQuiz/testpage";
import VerseRefQuizSummaryPage from "./VerseReferenceQuiz/summarypage";
import SettingsBar from "./settings/SettingsBar";
import verses from "../data/verses";
import { useState } from "react";
import type { Mode, VerseSubmission, QuizType, Verse } from "../types";
import { Box, Typography, Divider } from "@mui/material";

const RandomVersePage = () => {
  const [mode, setMode] = useState<Mode>("test");
  const [submission, setSubmission] = useState<VerseSubmission[]>([]);
  const [quizMode, setQuizMode] = useState<QuizType>("content");
  const [testNum, setTestNum] = useState(1);
  const [selected, setSelected] = useState<Verse[]>(verses);

  const onSubmit = (submittedVerses: VerseSubmission[]) => {
    setSubmission(submittedVerses);
    setMode("results");
  };

  const generateRandomArray = (n: number): number[] => {
    const pool = Array.from({ length: selected.length }, (_, i) => i);
    for (let i = pool.length - 1; i > 0; i--) {
      //@ts-ignore
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, n);
  };

  const versesForQuiz = generateRandomArray(testNum).map(
    (idx) => selected[idx],
  );

  const QuizHeader = () => (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        Scripture Memory Quiz
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <SettingsBar
        testNum={testNum}
        setTestNum={setTestNum}
        selected={selected}
        setSelected={setSelected}
        quizMode={quizMode}
        setQuizMode={setQuizMode}
      />
    </div>
  );

  const VerseContentQuiz = () => (
    <div>
      {mode === "test" && (
        <VerseContentQuizQns
          onSubmit={onSubmit}
          versesForQuiz={versesForQuiz}
        />
      )}
      {mode === "results" && (
        <VerseContentQuizSummaryPage
          submissions={submission}
          returnToQuiz={() => setMode("test")}
        />
      )}
    </div>
  );

  const VerseRefQuiz = () => (
    <div>
      {mode === "test" && (
        <VerseRefQuizQns onSubmit={onSubmit} versesForQuiz={versesForQuiz} />
      )}
      {mode === "results" && (
        <VerseRefQuizSummaryPage
          submissions={submission}
          returnToQuiz={() => setMode("test")}
        />
      )}
    </div>
  );

  return (
    <Box sx={{ maxWidth: "100%", mx: "auto", px: 3, py: 4 }}>
      {mode === "test" && <QuizHeader />}
      {quizMode === "content" && <VerseContentQuiz />}
      {quizMode === "reference" && <VerseRefQuiz />}
    </Box>
  );
};

export default RandomVersePage;
