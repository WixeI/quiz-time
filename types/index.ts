import { z } from "zod";

// ----------------------------------------
// # Schemas
// ----------------------------------------

// ## User Profile -Related
// ----------------------------------------

const usernameSchema = z.string().min(6).max(24);
const nicknameSchema = z.string().min(2).max(64);

const userProfileSchema = z.object({
  username: usernameSchema,
  nickname: nicknameSchema,
});

// ## Quiz Template -Related
// ----------------------------------------

const objectSchema = z.object({
  id: z.string().uuid(),
  prompt: z.string(),
  imageSrc: z.string().optional(),
});

const questionSchema = z.object({
  id: z.string().uuid(),
  prompt: z.string(),
  options: z.array(objectSchema).min(2).max(4),
});

// todo: Use superRefine to treat for questionAmount needing to be less than questionPool.length
/*
https://zod.dev/?id=strings
- For custom messages, see examples in the messages string
- Remember you can use Zod to make api calls to verify things like if ID exists in backend/db
  - This requires an refine async and needs to run on a parseAsync()

Start using jsdocs for things. Think of a pattern, just like the hierarchy comment pattern, 
something easy to follow and use everywhere. Check examples and gpt to learn
*/
const quizSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string().min(1).max(200),
    questionPool: z.array(questionSchema),
    questionAmount: z.number().int(),
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
  })
  .superRefine((data, ctx) => {
    if (data.questionAmount > data.questionPool.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "questionAmount cannot be greater than the length of questionPool",
        path: ["questionAmount"],
      });
    }
  });

// ## Quiz Instance -Related
// ----------------------------------------

const questionAnswerSchema = z.object({
  questionID: z.string().uuid(),
  answerID: z.string().uuid(),
});

const quizAnswerResultSchema = z
  .object({
    owner: userProfileSchema,
    questionList: z.array(questionAnswerSchema),
    correctAnswerAmount: z.number().int(),
  })
  .superRefine((data, ctx) => {
    if (data.correctAnswerAmount > data.questionList.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "correctAnswerAmount cannot be greater than the length of questionList",
        path: ["correctAnswerAmount"],
      });
    }
  });

const quizInstanceSchema = z.object({
  templateID: z.string().uuid(),
  owner: userProfileSchema,
  questionList: z.array(questionAnswerSchema),
  leaderboard: z.array(quizAnswerResultSchema),
});

// ----------------------------------------
// # Types
// ----------------------------------------

// ## Quiz Template -Related
// ----------------------------------------

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

// ## Quiz Instance -Related
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

// ## User Profile -Related
// ----------------------------------------

type UserProfile = {};

type Username = string;
type Nickname = string;
