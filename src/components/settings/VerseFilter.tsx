import { useState, useMemo } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Typography,
  Paper,
} from "@mui/material";
import verses from "../../data/verses";
import type { Verse } from "../../types";

const VerseSelector = ({
  selected,
  setSelected,
}: {
  selected: Verse[];
  setSelected: React.Dispatch<React.SetStateAction<Verse[]>>;
}) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      verses.filter((v) =>
        v.reference.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  const allFilteredSelected = filtered.every((v) =>
    selected.map((verse) => verse.reference).includes(v.reference),
  );

  const handleToggle = (reference: string) => {
    const fullVerse = verses.find((verse) => verse.reference === reference);
    const updated = selected.map((verse) => verse.reference).includes(reference)
      ? selected.filter((r) => r.reference !== reference)
      : [...selected, fullVerse];
    console.log(updated);
    setSelected(updated);
  };

  const handleSelectAll = () => {
    const updated = allFilteredSelected
      ? selected.filter(
          (verse) =>
            !filtered.map((v) => v.reference).includes(verse.reference),
        ) // deselect all filtered
      : [...new Set([...selected, ...filtered])]; // select all filtered
    console.log(updated);
    setSelected(updated);
  };

  return (
    <Box>
      <Paper sx={{ p: 2, width: 350 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
          Select Verses ({selected.length} selected)
        </Typography>

        {/* Search */}
        <TextField
          fullWidth
          size="small"
          placeholder="Search verses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 1 }}
        />

        {/* Select All */}
        <Button size="small" onClick={handleSelectAll} sx={{ mb: 1 }}>
          {allFilteredSelected ? "Deselect All" : "Select All"}
        </Button>

        <Divider sx={{ mb: 1 }} />

        {/* List */}
        <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
          {filtered.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ p: 1 }}>
              No verses found
            </Typography>
          ) : (
            filtered.map((verse) => (
              <FormControlLabel
                key={verse.reference}
                control={
                  <Checkbox
                    size="small"
                    checked={selected
                      .map((select) => select.reference)
                      .includes(verse.reference)}
                    onChange={() => handleToggle(verse.reference)}
                  />
                }
                label={
                  <Typography variant="body2">{verse.reference}</Typography>
                }
                sx={{ display: "flex", ml: 0, mb: 0.5 }}
              />
            ))
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default VerseSelector;
