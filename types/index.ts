// ----------------------------------------
// # Quiz Template -Related
// ----------------------------------------

type QuizTemplate = {
  id: string;
  title: string;
  description: string;
  design: {
    visual: {
      avatarSrc: string;
      backdropSrc: string;
      cardBackgroundSrc: string;
      mainColor: string;
      mainShapeSrc: string;
    };
    sound: {
      trackSrc: string;
      trackFinish: string;
      sfxGenericClickSrc: string;
      sfxCorrectSrc: string;
      sfxIncorrectSrc: string;
      sfxFinishFanfareSrc: string;
      sfxFinishFanfareAllCorrectSrc: string;
      sfxFinishFanfareAllIncorrectSrc: string;
    };
  };
  questionPool: Question[];
  questionAmount: number;
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
