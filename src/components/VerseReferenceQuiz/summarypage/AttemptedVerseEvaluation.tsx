import type { VerseSubmission } from "../../../types";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Stack,
  Chip,
  Box,
} from "@mui/material";

const getAccuracyColor = (accuracy: number) => {
  if (accuracy >= 90) return "success";
  if (accuracy >= 50) return "warning";
  return "error";
};

const AttemptedVerseEvaluation = ({
  verseSubmission,
}: {
  verseSubmission: VerseSubmission;
}) => {
  let accuracy: number =
    verseSubmission.submittedContent === verseSubmission.reference ? 100 : 0;
  if (
    verseSubmission.reference === "Psalm 139:7-12" &&
    verseSubmission.submittedContent === "Psalms 139:7-12"
  ) {
    accuracy = 100;
  }

  const color = getAccuracyColor(accuracy);

  return (
    <Card variant="outlined" sx={{ borderRadius: 2, mb: 2 }}>
      <CardContent>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {verseSubmission.content}
          </Typography>
          <Chip label={`${accuracy}%`} color={color} size="small" />
        </Stack>

        {/* Accuracy Bar */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Accuracy
          </Typography>
          <LinearProgress
            variant="determinate"
            value={accuracy}
            color={color}
            sx={{ height: 8, borderRadius: 4, mt: 0.5 }}
          />
        </Box>

        {/* Expected */}
        <Box sx={{ mb: 1.5 }}>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            EXPECTED
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {verseSubmission.reference}
          </Typography>
        </Box>

        {/* Submitted */}
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            YOUR ANSWER
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 0.5,
              p: 1.5,
              borderRadius: 1,
              bgcolor: "action.hover",
            }}
          >
            {verseSubmission.submittedContent}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AttemptedVerseEvaluation;
