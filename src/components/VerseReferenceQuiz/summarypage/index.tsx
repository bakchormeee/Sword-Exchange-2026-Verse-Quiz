import type { VerseSubmission } from "../../../types";
import AttemptedVerseEvaluation from "./AttemptedVerseEvaluation";
import UnattemptedVerseEvaluation from "./UnattemptedVerseEvaluation";
import { Box, Typography, Divider, Stack, Chip, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const VerseRefQuizSummaryPage = ({
  submissions,
  returnToQuiz,
}: {
  submissions: VerseSubmission[];
  returnToQuiz: () => void;
}) => {
  const attempted = submissions.filter((s) => s.submittedContent.length > 0);
  const unattempted = submissions.filter(
    (s) => s.submittedContent.length === 0,
  );

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        Summary
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Attempted Section */}
      {attempted.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Stack
            direction="row"
            sx={{ alignItems: "center", mb: 2 }}
            spacing={1}
          >
            <CheckCircleIcon color="success" />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Attempted
            </Typography>
            <Chip label={attempted.length} size="small" color="success" />
          </Stack>
          {attempted.map((submission, idx) => (
            <AttemptedVerseEvaluation verseSubmission={submission} key={idx} />
          ))}
        </Box>
      )}

      {/* Unattempted Section */}
      {unattempted.length > 0 && (
        <Box>
          <Stack
            direction="row"
            sx={{ alignItems: "center", mb: 2 }}
            spacing={1}
          >
            <HighlightOffIcon color="error" />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Unattempted
            </Typography>
            <Chip label={unattempted.length} size="small" color="error" />
          </Stack>
          {unattempted.map((submission, idx) => (
            <UnattemptedVerseEvaluation
              verseSubmission={submission}
              key={idx}
            />
          ))}
        </Box>
      )}
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 3, borderRadius: 2, py: 1.5 }}
        onClick={returnToQuiz}
      >
        Return to quiz
      </Button>
    </div>
  );
};

export default VerseRefQuizSummaryPage;
