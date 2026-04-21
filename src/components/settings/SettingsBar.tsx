import {
  Card,
  CardContent,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import VerseSelector from "../settings/VerseFilter";
import { type SyntheticEvent, useState, useEffect } from "react";
import type { Verse, QuizType } from "../../types";

const SettingsBar = ({
  testNum,
  setTestNum,
  quizMode,
  setQuizMode,
  selected,
  setSelected,
}: {
  testNum: number;
  setTestNum: React.Dispatch<React.SetStateAction<number>>;
  quizMode: QuizType;
  setQuizMode: React.Dispatch<React.SetStateAction<QuizType>>;
  selected: Verse[];
  setSelected: React.Dispatch<React.SetStateAction<Verse[]>>;
}) => {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    console.log("SettingsBar mounted");
    return () => console.log("SettingsBar unmounted");
  }, []);

  const toggleFilter = (event: SyntheticEvent) => {
    event.preventDefault();
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        Scripture Memory Quiz
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Card variant="outlined" sx={{ mb: 3, borderRadius: 2 }}>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              {/* Number of Questions */}
              <FormControl size="small" sx={{ width: 200 }}>
                <InputLabel>Number of Questions</InputLabel>
                <Select
                  value={testNum}
                  label="Number of Questions"
                  onChange={(e) => setTestNum(Number(e.target.value))}
                >
                  {Array.from({ length: selected.length }, (_, i) => i + 1).map(
                    (num) => (
                      <MenuItem value={num} key={num}>
                        {num}
                      </MenuItem>
                    ),
                  )}
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ width: 210 }}>
                <InputLabel>Quiz Mode</InputLabel>
                <Select
                  value={quizMode}
                  label="Quiz Mode"
                  onChange={(e) => {
                    setQuizMode(e.target.value);
                  }}
                >
                  <MenuItem value="content" key={1}>
                    Test Verse Content
                  </MenuItem>
                  <MenuItem value="reference" key={2}>
                    Test Verse Reference
                  </MenuItem>
                </Select>
              </FormControl>
              <Button onClick={toggleFilter} variant="outlined">
                {showFilter
                  ? "Hide Advanced Settings"
                  : "Show Advanced Settings"}
              </Button>
            </Stack>
            {showFilter /* Verse Selector */ && (
              <VerseSelector selected={selected} setSelected={setSelected} />
            )}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsBar;
