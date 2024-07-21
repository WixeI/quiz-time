import { z } from "zod";

import * as schemas from "./schemas";

// ----------------------------------------
// # Types
// ----------------------------------------

// ## User Profile
// ----------------------------------------

/** Represents the unique identification of a user */
export type Username = z.infer<typeof schemas.usernameSchema>;

/** Represents the name used for presentation purposes */
export type Nickname = z.infer<typeof schemas.nicknameSchema>;

/** Contains all the user's public information */
export type UserProfile = z.infer<typeof schemas.userProfileSchema>;

// ## Quiz Template
// ----------------------------------------

/** Represents the options for a question  */
export type Option = z.infer<typeof schemas.optionSchema>;

/** Represents one question from a quiz */
export type Question = z.infer<typeof schemas.questionSchema>;

/** Represents the structure of all quizes */
export type QuizTemplate = z.infer<typeof schemas.quizTemplateSchema>;

// ## Quiz Instance
// ----------------------------------------

/** Pairs a questionID and an optionID. It's used both by the quiz creator and the respondant */
export type QuestionAnswer = z.infer<typeof schemas.questionAnswerSchema>;

/** Has the results of all questions of a quiz from an user */
export type QuizResult = z.infer<typeof schemas.quizResultSchema>;

/** Represents the instance of a quiz, created by an user with their responses and with unique IDs. This is what's gonna be shown for other users to answer */
export type QuizInstance = z.infer<typeof schemas.quizInstanceSchema>;
