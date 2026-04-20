import type { VerseSubmission } from "../../../types";
import { Card, CardContent, Typography, Box, Chip, Stack } from "@mui/material";

const UnattemptedVerseEvaluation = ({
  verseSubmission,
}: {
  verseSubmission: VerseSubmission;
}) => {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 2, mb: 2, borderColor: "error.light" }}
    >
      <CardContent>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {verseSubmission.reference}
          </Typography>
          <Chip label="Skipped" color="error" size="small" />
        </Stack>

        <Box>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            EXPECTED
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {verseSubmission.content}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UnattemptedVerseEvaluation;
