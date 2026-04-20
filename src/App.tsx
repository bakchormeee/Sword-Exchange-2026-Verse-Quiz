import RandomVersePage from "./components/ScriptureMemoryQuiz.tsx";
import SettingsBar from "./components/settings/SettingsBar";
import verses from "./data/verses";
import type { VerseParameters, Verse } from "./types.tsx";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { AppBar } from "@mui/material";

const App = () => {
  return (
    <div>
      <RandomVersePage />
    </div>
  );
};

export default App;
