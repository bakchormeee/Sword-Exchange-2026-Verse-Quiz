import type { Verse } from "../../../types";
import {
  TextField,
  Card,
  CardContent,
  Stack,
  Chip,
  Typography,
} from "@mui/material";

const SingleVerseQuiz = ({ verse, idx }: { verse: Verse; idx: number }) => {
  return (
    <Card key={idx} variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: "center", mb: 1, spacing: 1 }}>
          <Chip
            label={`Q${idx + 1}`}
            size="small"
            color="primary"
            sx={{ mr: 0.8 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {verse.reference}
          </Typography>
        </Stack>
        <TextField
          name={verse.reference}
          placeholder="Type the verse from memory..."
          multiline
          rows={4}
          fullWidth
          variant="outlined"
        />
      </CardContent>
    </Card>
  );
};

export default SingleVerseQuiz;
