import { z } from "zod";

// ----------------------------------------
// # Schemas
// ----------------------------------------

// ## User Profile
// ----------------------------------------

export const usernameSchema = z.string().min(6).max(24);

export const nicknameSchema = z.string().min(2).max(64);

export const userProfileSchema = z.object({
  username: usernameSchema,
  nickname: nicknameSchema,
});

// ## Quiz Template
// ----------------------------------------

export const optionSchema = z.object({
  id: z.string().uuid(),
  prompt: z.string(),
  imageSrc: z.string().optional(),
});

export const questionSchema = z.object({
  id: z.string().uuid(),
  prompt: z.string(),
  options: z.array(optionSchema).min(2).max(4),
});

/*
Start using jsdocs for things. Think of a pattern, just like the hierarchy comment pattern, 
something easy to follow and use everywhere. Check examples and gpt to learn
*/
export const quizTemplateSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string().min(1).max(200),
    description: z.string().min(1).max(500),
    questionPool: z.array(questionSchema),
    questionAmount: z.number().int(),
    design: z.object({
      visual: z.object({
        backdropSrc: z.string(),
        mainColor: z.string(),
        highlightColor: z.string(),
      }),
      sound: z.object({
        trackSrc: z.array(z.string()),
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

// ## Quiz Instance
// ----------------------------------------

export const questionAnswerSchema = z.object({
  questionID: z.string().uuid(),
  answerID: z.string().uuid(),
});

export const quizResultSchema = z
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

export const quizInstanceSchema = z.object({
  templateID: z.string().uuid(),
  owner: userProfileSchema,
  questionList: z.array(questionAnswerSchema),
  leaderboard: z.array(quizResultSchema),
});
