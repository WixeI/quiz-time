import { z } from "zod";

// ----------------------------------------
// # Quiz Template -Related
// ----------------------------------------

// todo: Use superRefine to treat for questionAmount needing to be less than questionPool.length
/*
https://zod.dev/?id=strings
- For custom messages, see examples in the messages string
- Remember you can use Zod to make api calls to verify things like if ID exists in backend/db
  - This requires an refine async and needs to run on a parseAsync()

https://blog.logrocket.com/schema-validation-typescript-zod/
- See general examples for zod, but don't create a new function to validate. Export the schema and use parse

Use zod.infer to get the types

Start using jsdocs for things. Think of a pattern, just like the hierarchy comment pattern, 
something easy to follow and use everywhere. Check examples and gpt to learn
*/
const quizSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(200),
  questionPool: z.string(), //Should be its own schema
  questionAmount: z.string(),
  design: z.object({
    visual: z.object({
      backdropSrc: z.string(), //Create a pattern schema for Src's and use in all of them
      mainColor: z.string(),
      highlightColor: z.string(),
    }),
    sound: z.object({
      trackSrc: z.string(),
      sfxGenericClickSrc: z.string().optional(),
      sfxCorrectSrc: z.string().optional(),
      sfxIncorrectSrc: z.string().optional(),
      sfxFinishFanfareSrc: z.string().optional(),
      sfxFinishFanfareAllCorrectSrc: z.string().optional(),
      sfxFinishFanfareAllIncorrectSrc: z.string().optional(),
    }),
  }),
});

type QuizTemplate = {
  id: string;
  title: string;
  description: string;
  questionPool: Question[];
  questionAmount: number;
  design: {
    visual: {
      backdropSrc: string;
      mainColor: string;
      highlightColor: string;
    };
    sound: {
      trackSrc: string[];
      sfxGenericClickSrc?: string;
      sfxCorrectSrc?: string;
      sfxIncorrectSrc?: string;
      sfxFinishFanfareSrc?: string;
      sfxFinishFanfareAllCorrectSrc?: string;
      sfxFinishFanfareAllIncorrectSrc?: string;
    };
  };
};

type Question = {
  id: string;
  prompt: string;
  options: Option[];
};

type Option = {
  id: string;
  prompt: string;
  imageSrc?: string;
};

// ----------------------------------------
// # Quiz Instance -Related
// ----------------------------------------

// Make it so everything you need is in here? No, because it saves space in the database, even if costs a few queries more
// Change question to behave with ID searching

type QuizInstance = {
  templateID: string;
  owner: UserProfile;
  questionList: QuestionAnswer[];
  leaderboard: QuizAnswerResult[];
};

// Is used both by the creator and the respondant
type QuestionAnswer = {
  questionID: string;
  answerID: string;
};

type QuizAnswerResult = {
  owner: string;
  questionList: QuestionAnswer[];
  correctAnswerAmount: number;
};

// ----------------------------------------
// # User Profile -Related
// ----------------------------------------
type UserProfile = {};

type Username = string;
type Nickname = string;
