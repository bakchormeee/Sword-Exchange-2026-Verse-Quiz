export interface Verse {
  reference: string;
  content: string;
}

export interface VerseSubmission extends Verse {
  submittedContent: string;
}

export type Mode = "test" | "results";

export type QuizType = "reference" | "content";
