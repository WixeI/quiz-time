import { QuestionAnswer, QuizInstance, QuizTemplate, UserProfile } from "@/types/types";
import { v4 as uuidv4 } from "uuid";

// ----------------------------------------
// # Mock & QuizTemplate Creator Tool utilities
// ----------------------------------------

export const QuizList: QuizTemplate[] = [
  {
    id: "16075d92-ff2c-4708-b795-91b321a7bd89",
    title: "Spooky Scary Questions For a Halloween with @user",
    description: "Trick or Treat? What costume would @user wear? Find out by answering this spooky quiz!",
    questionPool: [
      {
        id: "18f336c3-6888-4046-b841-8919ba042631",
        prompt: "@user were visited by some kids they don't know. Trick or Treat?",
        options: [
          {
            id: "2b581f10-2b80-44d2-b9d2-46ce2b478073",
            prompt: "Trick",
          },
          {
            id: "a9172f62-2a91-42ab-8ae6-2f3fe4ac7bf1",
            prompt: "Treat",
          },
        ],
      },
      {
        id: "926fc2ba-3c40-4a4b-899f-0733275444f6",
        prompt: "What costume would @user wear?",
        options: [
          {
            id: "926fc2ba-3c40-4a4b-899f-0733275444f6",
            prompt: "Hot Dog",
            imageSrc: "",
          },
          {
            id: "c7270ed8-44c1-471c-92ef-24ead74a48a8",
            prompt: "Pirate",
            imageSrc: "",
          },
          {
            id: "1c6120d6-536e-47ab-9dfb-4c9e181b2ae3",
            prompt: "Anime",
            imageSrc: "",
          },
          {
            id: "50891e43-af7e-4092-9e2f-b7829018c62d",
            prompt: "Cowboy/Cowgirl",
            imageSrc: "",
          },
        ],
      },
      {
        id: "d2b732c4-e5e7-4521-ba8c-4679e5c2bcdc",
        prompt: "What hot costume would @user wear?",
        options: [
          {
            id: "f9476310-2e40-4ee4-97a8-152f3df5d5a8",
            prompt: "Hot Nurse",
            imageSrc: "",
          },
          {
            id: "a96130eb-9dfe-4f7e-bb18-e457a304f637",
            prompt: "Hot Angel",
            imageSrc: "",
          },
          {
            id: "0e335be0-b15b-4487-98e1-83658ca98e88",
            prompt: "Hot Witch",
            imageSrc: "",
          },
          {
            id: "2fe57ec0-068d-46d6-bdbf-bf87ed937e28",
            prompt: "Hot Clown",
            imageSrc: "",
          },
        ],
      },
      {
        id: "f11d038c-9917-415c-a7d4-fcda517cccc1",
        prompt: "What's @user's favorite Halloween activity?",
        options: [
          {
            id: "711e0c6a-e845-4487-b260-8dcf643940b5",
            prompt: "Trick-or-treating",
            imageSrc: "",
          },
          {
            id: "c7df7e3d-f05d-48d1-90d6-a2bf608c71f2",
            prompt: "Carving pumpkins",
            imageSrc: "",
          },
          {
            id: "a74bd7ee-9618-470a-97c2-9864565c71e8",
            prompt: "Watching scary movies",
            imageSrc: "",
          },
          {
            id: "85d52db2-bf7e-4c98-a669-6f0bd58965ae",
            prompt: "Attending a costume party",
            imageSrc: "",
          },
        ],
      },
      {
        id: "5d098801-2a58-4783-ad6b-7d90888cf2fa",
        prompt: "Which spooky setting does @user prefer?",
        options: [
          {
            id: "4e46833e-9594-4efc-b30d-a26359a94d84",
            prompt: "Haunted house",
            imageSrc: "",
          },
          {
            id: "54d006f5-64c8-4b07-85f3-b1b894225056",
            prompt: "Creepy forest",
            imageSrc: "",
          },
          {
            id: "c45f3b07-b008-4b3f-bb60-0603392ed13d",
            prompt: "Abandoned asylum",
            imageSrc: "",
          },
          {
            id: "fb53dbef-2625-4e84-9f4f-5d579f5dd7be",
            prompt: "Graveyard at midnight",
            imageSrc: "",
          },
        ],
      },
      {
        id: "1aea964a-6617-44d6-b19d-53f0fc3ea17d",
        prompt: "What's @user's preferred Halloween treat?",
        options: [
          {
            id: "0f300ff2-742b-4b94-9e73-f2a84d0e317e",
            prompt: "Candy corn",
            imageSrc: "",
          },
          {
            id: "cd59192a-faeb-4d04-9106-162feeb5644f",
            prompt: "Pumpkin spice everything",
            imageSrc: "",
          },
          {
            id: "7ae19446-96b7-42f1-b7a9-d5a683630d1d",
            prompt: "Chocolate bars",
            imageSrc: "",
          },
          {
            id: "a83fca6f-9da4-42ed-8970-b6cab631e1ff",
            prompt: "Caramel apples",
            imageSrc: "",
          },
        ],
      },
      {
        id: "189460d7-5cbe-410d-b0c6-5082f731f5e0",
        prompt: "Which supernatural creature would @user be?",
        options: [
          {
            id: "ab5c8c03-94b8-4bf7-8fde-5c82d14588c5",
            prompt: "Vampire",
            imageSrc: "",
          },
          {
            id: "b8d972c9-e8f4-4fbf-80da-ae2ddc9e3b88",
            prompt: "Ghost",
            imageSrc: "",
          },
          {
            id: "b6f854e9-4b51-494b-98b0-a8559fb6f952",
            prompt: "Werewolf",
            imageSrc: "",
          },
          {
            id: "fa518db5-a8f0-4f14-9b0c-887a93164b48",
            prompt: "Witch",
            imageSrc: "",
          },
        ],
      },
      {
        id: "abd49929-4860-4112-a017-ba7535f1c521",
        prompt: "How would @user decorate for Halloween?",
        options: [
          {
            id: "423f5ef6-c041-4325-af54-984fa1d8e4a1",
            prompt: "Spooky yard decorations",
            imageSrc: "",
          },
          {
            id: "219a0a98-b471-4d39-9208-57ea99850e97",
            prompt: "Indoor haunted house",
            imageSrc: "",
          },
          {
            id: "f2a821e5-bbc0-486c-bb1f-608b81cf0d5d",
            prompt: "Pumpkin everything",
            imageSrc: "",
          },
          {
            id: "4360879d-ed03-4780-b3c2-2c2df04dbbde",
            prompt: "Elegant Gothic style",
            imageSrc: "",
          },
        ],
      },
      {
        id: "2429df28-291e-4d95-879a-d8af8514659b",
        prompt: "What's @user's ideal Halloween costume?",
        options: [
          {
            id: "72389314-3a3b-4c99-978d-8997d36e78ef",
            prompt: "Classic monster (like Frankenstein or Dracula)",
            imageSrc: "",
          },
          {
            id: "fc502d90-b7c2-4b0c-9115-029c815e6ead",
            prompt: "Pop culture character (like a superhero or villain)",
            imageSrc: "",
          },
          {
            id: "4863bd40-f411-4efb-a8da-1868b8ade0d9",
            prompt: "Lazy idea (like a blanket ghost)",
            imageSrc: "",
          },
          {
            id: "d5a14961-99ea-4d33-b21d-e6841171ac02",
            prompt: "Some random obscure thing (like a character from a book nobody read or a concept)",
            imageSrc: "",
          },
        ],
      },
      {
        id: "64315698-40e0-48e9-9ab2-12119a139775",
        prompt: "Which horror movie genre does @user prefer?",
        options: [
          {
            id: "7f70a332-d546-4a9a-b17b-e7af788e7f28",
            prompt: "Slasher films",
            imageSrc: "",
          },
          {
            id: "b21d47eb-3444-45de-879c-e4c9585f5ab4",
            prompt: "Supernatural horror",
            imageSrc: "",
          },
          {
            id: "fa39a446-4b13-4446-b697-f0378ea7ab20",
            prompt: "Psychological thriller",
            imageSrc: "",
          },
          {
            id: "2ccbb049-b413-4163-8ae4-ea42aa149209",
            prompt: "Horror-comedy",
            imageSrc: "",
          },
        ],
      },
      {
        id: "7d06cb76-35de-48e6-ae79-a809e80d7a96",
        prompt: "What gives @user the creeps the most?",
        options: [
          {
            id: "3f3e5b8e-b776-4393-b114-40aa20b4a8c2",
            prompt: "Clowns",
            imageSrc: "",
          },
          {
            id: "0d4fe0aa-da0b-4ef3-af61-907998e7cd49",
            prompt: "Spiders",
            imageSrc: "",
          },
          {
            id: "501bd30e-42d9-431a-b027-b4d178569f8c",
            prompt: "The inescapable concept of mortality",
            imageSrc: "",
          },
          {
            id: "9aaf06da-1b31-4e30-99ea-c3dc5f140997",
            prompt: "Dolls",
            imageSrc: "",
          },
        ],
      },
      {
        id: "d6507a6d-74c3-400c-a6f8-0986d72b42f7",
        prompt: "How does @user feel about horror stories?",
        options: [
          {
            id: "d8445b49-b276-4540-96c8-0dee8faf21c2",
            prompt: "Love them; I can't get enough!",
            imageSrc: "",
          },
          {
            id: "b6e651c9-29f6-4068-8b88-dfbf25a20744",
            prompt: "They're too scary for me",
            imageSrc: "",
          },
          {
            id: "ab354fb7-7514-499a-a336-9eb94296cfd3",
            prompt: "I'm skeptical but intrigued",
            imageSrc: "",
          },
          {
            id: "2b1cf4e6-b294-49c1-9d83-7e32085b2328",
            prompt: "Too silly",
            imageSrc: "",
          },
        ],
      },
      {
        id: "460649ac-b80b-4403-ad3a-a7d9e222d0bd",
        prompt: "What's @user's favorite Halloween color scheme?",
        options: [
          {
            id: "ce61b785-9fc0-40be-a44a-8f90288d1f5a",
            prompt: "Purple and green",
            imageSrc: "",
          },
          {
            id: "3d136b6f-7690-401b-9755-9f98c95acc38",
            prompt: "Orange and black",
            imageSrc: "",
          },
          {
            id: "8e74622e-946f-4bce-9534-0455d28e17a5",
            prompt: "Red and black",
            imageSrc: "",
          },
          {
            id: "171bb1fb-1273-48dd-8e7b-020c859e97b3",
            prompt: "Pure black",
            imageSrc: "",
          },
        ],
      },
      {
        id: "466af7f3-6dcd-4422-a2d9-a90999a4d7f1",
        prompt: "What's @user's favorite Halloween drink?",
        options: [
          {
            id: "52a1f7e8-e83d-4ebb-b354-586a645dff20",
            prompt: "Pumpkin spice latte",
            imageSrc: "",
          },
          {
            id: "0bdf6f3b-ac60-4437-9a35-0ac65cc4757d",
            prompt: "Hot apple cider",
            imageSrc: "",
          },
          {
            id: "4d5a6a16-f1ef-401b-9724-d4b910798712",
            prompt: "Blood-red punch",
            imageSrc: "",
          },
          {
            id: "cd4741c1-3fff-4415-b4e3-ef28f93650bc",
            prompt: "Never had any",
            imageSrc: "",
          },
        ],
      },
      {
        id: "9a75e573-c1fd-41fa-b249-22f0b02f899b",
        prompt: "Which eery sound does @user find the creepiest?",
        options: [
          {
            id: "272527ce-3256-4192-ae17-053e0ea60264",
            prompt: "Howling wind",
            imageSrc: "",
          },
          {
            id: "9e07a081-df3e-4d79-8214-ea8d234cb593",
            prompt: "Creaking doors",
            imageSrc: "",
          },
          {
            id: "ecccd693-f527-4cb9-aa79-8b51f25f3f2f",
            prompt: "Ghostly whispers",
            imageSrc: "",
          },
          {
            id: "4d59e1e0-98a5-4a88-8aa9-e6481cf6b2d6",
            prompt: "Footsteps in the dark",
            imageSrc: "",
          },
        ],
      },
      {
        id: "2ecfa6d7-fd11-40e2-8787-c3e05b7a0629",
        prompt: "Which Halloween prank would @user most likely play?",
        options: [
          {
            id: "18c7f1be-93ff-4808-8c01-6fc41229a609",
            prompt: "A jump scare",
            imageSrc: "",
          },
          {
            id: "8078e590-a8b6-418e-be22-344d79653064",
            prompt: "A fake spider/cockroach in a surprising place",
            imageSrc: "",
          },
          {
            id: "ab7f4aa8-268a-4d07-a97b-37de6be51a9b",
            prompt: "Playing dead",
            imageSrc: "",
          },
          {
            id: "34f90bc0-da05-4496-838e-795258e77ef7",
            prompt: "Pretend they saw a ghost",
            imageSrc: "",
          },
        ],
      },
      {
        id: "5aabb842-362e-467c-b2e5-bda6f69e2513",
        prompt: "What's @user's favorite spooky TV show?",
        options: [
          {
            id: "0aec7ac0-0827-4e3b-8d40-d8138dc1f41e",
            prompt: "Stranger Things",
            imageSrc: "",
          },
          {
            id: "5f49c4b3-e658-4bc4-927d-8d3df68db113",
            prompt: "American Horror Story",
            imageSrc: "",
          },
          {
            id: "089a7e40-366a-4bf5-9e49-d2cccc53855f",
            prompt: "Goosebumps",
            imageSrc: "",
          },
          {
            id: "88520444-6b94-452f-b9f0-4b5853aa329f",
            prompt: "Chucky",
            imageSrc: "",
          },
        ],
      },
      {
        id: "4e99dd0d-bef5-4b92-92d1-5d2b54da0e6a",
        prompt: "How does @user prefer to spend Halloween night?",
        options: [
          {
            id: "63f0d504-b502-4d1e-a5cc-b742e49a8ca5",
            prompt: "Watching horror movies",
            imageSrc: "",
          },
          {
            id: "36aab29e-7368-4fc9-9b44-40d9714e25dd",
            prompt: "Going to a Halloween party",
            imageSrc: "",
          },
          {
            id: "f7a29aa3-fbfa-4803-a556-adec329c226c",
            prompt: "Eating candy",
            imageSrc: "",
          },
          {
            id: "2db07a00-7b54-4ad6-a123-0cfe82ce6ee4",
            prompt: "Going to horror-themed events",
            imageSrc: "",
          },
        ],
      },
      {
        id: "bffb0de6-0d05-4bed-bfe7-c85cf191c917",
        prompt: "Which eerie location would @user like to explore?",
        options: [
          {
            id: "fc4bf865-c38d-499b-a670-82807c8ade43",
            prompt: "A haunted house",
            imageSrc: "",
          },
          {
            id: "0166b182-c38b-4d47-93c3-73ba3601d1f5",
            prompt: "An abandoned amusement park",
            imageSrc: "",
          },
          {
            id: "546ae181-aef9-4e9f-bfa5-9274b7c00a99",
            prompt: "A cursed island",
            imageSrc: "",
          },
          {
            id: "ddcb90ce-32b5-4d29-89ee-898cafb58f30",
            prompt: "A deserted ghost town",
            imageSrc: "",
          },
        ],
      },
      {
        id: "654fcacc-3734-43a4-ad83-084051199a24",
        prompt: "If @user saw a ghostly figure in their mirror, what would their reaction be?",
        options: [
          {
            id: "e2db0992-f1af-4e27-a587-3ec3e714ef24",
            prompt: "Scream and run away",
            imageSrc: "",
          },
          {
            id: "8581d570-9f8e-4bcc-a45a-69e81ceb5049",
            prompt: "Freeze and helplessly wait",
            imageSrc: "",
          },
          {
            id: "3d8f35f6-71ee-4e9f-992e-0dd697510231",
            prompt: "Take a picture or video",
            imageSrc: "",
          },
          {
            id: "1fe62532-7de1-4657-b8d8-5dbaaca184b8",
            prompt: "Look back and hope nothing's there",
            imageSrc: "",
          },
        ],
      },
      {
        id: "f534325e-bbd4-4176-a5a7-141326b4b24a",
        prompt: "Which movie does @user find the most unsetling?",
        options: [
          {
            id: "bc33b6df-0cfd-4782-a604-326150e2aa4b",
            prompt: "The Exorcist",
            imageSrc: "",
          },
          {
            id: "b926c6c1-a31b-486a-8b9c-f91c2f1b4ce6",
            prompt: "Paranormal Activity",
            imageSrc: "",
          },
          {
            id: "c8afb50e-9c8a-4af2-9d82-12c8b9ff57c9",
            prompt: "The Conjuring",
            imageSrc: "",
          },
          {
            id: "4449e4c2-b98f-4399-9d22-a28ab4e0bf4e",
            prompt: "Hereditary",
            imageSrc: "",
          },
        ],
      },
      {
        id: "d600c0b9-b638-4f61-9044-1ba8bec8d22e",
        prompt: "Which creepy urban legend would @user least want to be true?",
        options: [
          {
            id: "f56bb21d-d483-42a7-acb1-f216ecc94596",
            prompt: "The Slender Man",
            imageSrc: "",
          },
          {
            id: "5261e3e7-26b8-40dc-9b72-b5b0b30b75e4",
            prompt: "The Rake",
            imageSrc: "",
          },
          {
            id: "20796371-b04a-48d8-9470-f88779a0e009",
            prompt: "The Bunnyman",
            imageSrc: "",
          },
          {
            id: "a12fca1c-2ad1-4858-8422-33bf1415a0c1",
            prompt: "The Black-Eyed Children",
            imageSrc: "",
          },
        ],
      },
      {
        id: "26494d93-2826-4a92-89e3-53513eda54e4",
        prompt: "What supernatural event would @user try to debunk?",
        options: [
          {
            id: "0be07bc0-f23a-451c-aec1-bce73a5b3232",
            prompt: "A haunted house",
            imageSrc: "",
          },
          {
            id: "cb9fd648-bfca-426a-8a14-fbdebac934b5",
            prompt: "A UFO sighting",
            imageSrc: "",
          },
          {
            id: "d4ea4a1a-7a5d-4c41-8720-217e7757ab64",
            prompt: "A cryptid encounter",
            imageSrc: "",
          },
          {
            id: "e8d4120e-2e39-4ba8-bfa7-041eab95fa4b",
            prompt: "A possession case",
            imageSrc: "",
          },
        ],
      },
      {
        id: "1d494c31-6c68-48e1-a975-ba9dff003901",
        prompt: "If @user heard strange noises in their attic at night, what would they do?",
        options: [
          {
            id: "f7309990-4d12-471d-833f-5a4608e5bdb9",
            prompt: "Investigate immediately",
            imageSrc: "",
          },
          {
            id: "390e0c24-86d1-46cf-9256-e9d4fe3641c2",
            prompt: "Call a friend for backup",
            imageSrc: "",
          },
          {
            id: "650c1053-88ee-46af-8fbd-52b80685600d",
            prompt: "Ignore it and hope it stops",
            imageSrc: "",
          },
          {
            id: "a47e55fe-faf0-46b5-97c5-d760be7b6fd3",
            prompt: "Leave the house and call a professional",
            imageSrc: "",
          },
        ],
      },
      //24
    ],
    questionAmount: 12,
    design: {
      visual: {
        backdropSrc: "PatternPumpkin",
        mainColor: "slate",
        highlightColor: "orange",
      },
      sound: {
        trackSrc: ["/assets/songs/Spook -by- PeriTune.mp3", "/assets/songs/Spooky Ride -by- Twin Musicom.mp3"],
      },
    },
  },
];

/** Fills all ID fields in a QuizTemplate object. It's used so you don't have to fill it manually. Wrap a console.log, copy the output object and paste in the code in the place of the QuizTemplate that has empty ID fields */
export const generateQuizTemplateIDFields = (quiz: QuizTemplate) => {
  quiz.id = uuidv4();

  quiz.questionPool.map((question) => {
    question.id = uuidv4();

    question.options.map((option) => (option.id = uuidv4()));
  });

  return quiz;
};

// ----------------------------------------
// # Real use utilities
// ----------------------------------------

/** Creates a QuizInstance based on a QuizTemplate. This object is created when the user finishes answering all questions with their preferences to create a QuizInstance off of a QuizTemplate they were seeing */
export const createCompleteQuizTemplate = (
  templateID: string,
  user: UserProfile,
  questionList: QuestionAnswer[]
): QuizInstance => {
  const QuizInstance: QuizInstance = {
    id: uuidv4(),
    templateID: templateID,
    owner: user,
    questionList: questionList,
    leaderboard: [],
  };

  // Return statement
  return QuizInstance;
};

/** Formats the QuizTemplate object to replace any variables in string prompts with their respective values */
export const formatQuiz = (quiz: QuizTemplate, user: UserProfile) => {
  quiz.title = quiz.title.replace("@user", user.nickname);
  quiz.description = quiz.description.replace("@user", user.nickname);

  quiz.questionPool.map((question) => (question.prompt = question.prompt.replace("@user", user.nickname)));
};
