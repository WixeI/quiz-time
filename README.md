## Icons

- Outline: Lucide / Tabler
- Solid: Hero / Tabler

## Logic

- Have a JSON/TS file that stores the questions for a quiz template
- Have multiple questions in a quiz template to pick and choose
- Be able to create a quiz instance based on a quiz template
- The quiz instance has a fixed amount of questions in it, that are less then the quiz template has
- After having a quiz created, it will be stored in the account of the user and a link will be provided
- Other users, through the provided link, can access the quiz and answer them
- When they answer, their name and answers will be stored (or just the number) in the quiz instance
- Whenever they answer a question, a request is made to the backend to fetch the response and check

## To-do

- Create the types for the quiz template, instance, results, etc
- Create 2~3 quiz templates
- Create a screen to display the quiz templates
- Create a screen, accessed by the previous one, that starts a quiz instance according to a template
  - Store quiz instance at the end in local storage for now
- Add account support with Supabase, Firebase or Lucia Auth
- Create Login screen (only Google allowed)
- Create dashboard screen (shows created quiz instances & button to go to quiz-templates & create a new instance)
- Adapt quiz instance creation to work with Auth & backend/database storage
- ...

## Possible Needed Stacks

- Lucia Auth
- TamagUI/Tailwind[NativeWind] (UI with Mobile Support)
- Supabase
- Drizzle (ORM)
- Pusher or Soketi (best) (websockets)
- Plausible/Umami (analytics)
- Next Bundle Analyzer
- Electron on Tauri (best) (Native Webview)
