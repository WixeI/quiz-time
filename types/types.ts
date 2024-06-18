import { z } from "zod";
import * as schemas from "./schemas";

// ----------------------------------------
// # Types
// ----------------------------------------

// ## User Profile
// ----------------------------------------

export type Username = z.infer<typeof schemas.usernameSchema>;

export type Nickname = z.infer<typeof schemas.nicknameSchema>;

export type UserProfile = z.infer<typeof schemas.userProfileSchema>;

// ## Quiz Template
// ----------------------------------------

export type Option = z.infer<typeof schemas.optionSchema>;

export type Question = z.infer<typeof schemas.questionSchema>;

export type QuizTemplate = z.infer<typeof schemas.quizTemplateSchema>;

// ## Quiz Instance
// ----------------------------------------

// It's used both by the creator and the respondant
export type QuestionAnswer = z.infer<typeof schemas.questionAnswerSchema>;

export type QuizResult = z.infer<typeof schemas.quizResultSchema>;

export type QuizInstance = z.infer<typeof schemas.quizInstanceSchema>;
