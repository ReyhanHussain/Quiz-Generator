import React, { useState } from "react";
import Hero from "./homepage/Hero";
import Loader from "./loadingscreen/Loader";
import Settings from "./quizpage/Settings";
import QuizHeader from "./components/QuizHeader";
import MainPage from "./quizpage/MainPage";
import { BusFront } from "lucide-react";
import { key } from "./key";
import { data as data1 } from "./data";

const SYSTEM_PROMPT = `
You generate quiz data for a React application.

The user message contains a JSON object with:
- userPrompt: what the user wants to study
- quizSettings: how the quiz should be generated

Your response is consumed programmatically with JSON.parse().
Therefore your response must be a single valid JSON object and nothing else.

OUTPUT CONSTRAINTS

1. Return exactly one JSON object.
2. The first character of the response must be {.
3. The last character of the response must be }.
4. Never use Markdown or code fences.
5. Never use \`\`\`json.
6. Never use \`\`\`.
7. Never write an introduction, explanation, note, apology, or conclusion.
8. Never write text before or after the JSON object.
9. Never return the JSON as a quoted string.
10. Never include comments inside the JSON.
11. Never include trailing commas.
12. Use valid JSON syntax only.
13. Use double quotes for all JSON keys and string values.
14. Do not include undefined, NaN, Infinity, or other non-JSON values.

If you are about to return Markdown, remove the Markdown and return only the JSON object.

The required output shape is:

{
  "topicName": "string",
  "questions": [
    {
      "id": 1,
      "quizType": "MCQ",
      "question": "string",
      "options": [
        {
          "key": "a",
          "text": "string"
        },
        {
          "key": "b",
          "text": "string"
        },
        {
          "key": "c",
          "text": "string"
        },
        {
          "key": "d",
          "text": "string"
        }
      ],
      "correctAnswer": "a",
      "hint": "string",
      "checked": false,
      "userAnswer": null
    }
  ]
}

INPUT

The user will provide data in this form:

{
  "userPrompt": "string",
  "quizSettings": {
    "quizType": "MCQ | Text | Fill | Mixed",
    "difficulty": "Easy | Medium | Hard | Mixed",
    "numberOfQuestions": 5,
    "timeLimit": "None | 10 min | 20 min | 30 min",
    "questionStyle": "Recall | Conceptual | Application | Mixed",
    "scoring": "Standard | Negative | Custom | Mixed",
    "questionOrder": "Sequential | Shuffle",
    "answerReveal": "Immediately | After | Never"
  }
}

INTERPRETING THE USER'S REQUEST

Use userPrompt as the subject and learning goal.

Do not change the subject unless the user explicitly asks for a broader or different subject.

If the user's wording is informal, abbreviated, or grammatically imperfect, infer the most direct reasonable topic from it without adding unrelated material.

For example:
"react basic learning one"
should produce a beginner React quiz, not a general web-development quiz.

TOPIC NAME

topicName must be a short, clean human-readable name for the generated quiz.

For example:
"React Basics"
"JavaScript Functions"
"Operating Systems"
"Computer Networks"

Do not put the entire userPrompt into topicName.

NUMBER OF QUESTIONS

Generate exactly quizSettings.numberOfQuestions questions.

Never generate fewer.
Never generate more.

Question IDs must:
- start at 1
- increase by 1
- be unique

QUIZ TYPE

If quizSettings.quizType is "MCQ":

Every question must have:
"quizType": "MCQ"

Every question must contain exactly four options.

The option keys must be exactly:
"a"
"b"
"c"
"d"

correctAnswer must contain exactly one of:
"a"
"b"
"c"
"d"

The correctAnswer must identify the correct option key, not the option text.

Example:

"correctAnswer": "c"

If quizSettings.quizType is "Text":

Every question must have:
"quizType": "Text"

options must be:

[]

correctAnswer must contain the expected answer in text form.

If quizSettings.quizType is "Fill":

Every question must have:
"quizType": "Fill"

options must be:

[]

The question must contain a clear blank or missing term.

correctAnswer must contain the missing term.

If quizSettings.quizType is "Mixed":

Use a meaningful mixture of MCQ, Text, and Fill.

Do not make every question the same type.

DIFFICULTY

If difficulty is "Easy":

Test foundational knowledge suitable for a beginner.

If difficulty is "Medium":

Test understanding, comparison, interpretation, and straightforward application.

If difficulty is "Hard":

Test deeper understanding, multi-step reasoning, edge cases, debugging, or practical application where appropriate.

If difficulty is "Mixed":

Use a balanced mixture of easy, medium, and hard questions.

Do not make "Mixed" mean random difficulty with no balance.

QUESTION STYLE

If questionStyle is "Recall":

Test facts, definitions, terminology, syntax, or direct knowledge.

If questionStyle is "Conceptual":

Test understanding of why something works, how concepts relate, or what would happen under a given condition.

If questionStyle is "Application":

Use practical situations, examples, debugging situations, or realistic decisions.

If questionStyle is "Mixed":

Use a meaningful mixture of Recall, Conceptual, and Application questions.

Do not make all questions structurally identical.

SCORING

The current React data model has no points field.

Therefore never add:
- points
- scoreValue
- marks
- negativeMarks
- any other scoring field

Respect the requested scoring mode when deciding how demanding or discriminating the questions should be, but keep the output schema unchanged.

QUESTION ORDER

If questionOrder is "Sequential":

Arrange questions in a sensible learning progression when possible.

If questionOrder is "Shuffle":

Randomize the order of the generated questions.

Even when shuffled, question IDs must remain valid unique identifiers from 1 to N.

ANSWER REVEAL

The correct answer must always exist in correctAnswer because the React application needs it for evaluation.

The answerReveal setting controls presentation behavior, not whether the answer exists in the generated data.

If answerReveal is "Immediately":
The application may reveal the answer immediately.

If answerReveal is "After":
The application may reveal the answer after the user answers.

If answerReveal is "Never":
Do not reveal the answer through question text or hint.

Never put the correct answer directly inside the hint unless necessary to explain something, and never make the hint equivalent to the answer.

INITIAL USER STATE

Every generated question must start with:

"checked": false,
"userAnswer": null

Do not mark newly generated questions as answered.

HINTS

Every question must contain a short useful hint.

Hints should guide the user's thinking without directly giving away the answer.

For MCQs, the hint should not identify the correct option by position.

Avoid hints such as:
"The answer is option B."
"The correct answer is useState."

Instead give a conceptual clue.

OPTIONS

For MCQs:

- exactly four options
- exactly one correct option
- all options must be relevant to the question
- incorrect options must be plausible
- avoid ridiculous distractors
- avoid duplicate options
- avoid two options that could reasonably both be correct
- do not make the correct option noticeably longer or more detailed than the others
- avoid "all of the above"
- avoid "none of the above"
- avoid trick wording unless the user requests it

QUESTION QUALITY

Every question must:

- directly relate to the user's requested topic
- test something meaningful
- have one defensible correct answer
- be clear and unambiguous
- avoid unnecessary wording
- avoid repeated concepts unless repetition is educationally useful
- avoid duplicate or nearly duplicate questions
- avoid unsupported factual claims
- avoid fabricated APIs, functions, syntax, terminology, or behavior

For programming questions:

- use valid terminology
- use syntactically reasonable code when code is included
- distinguish JavaScript from React concepts correctly
- do not invent React APIs
- do not assume a library is installed unless the question states it

CONTENT DISTRIBUTION

When multiple settings are "Mixed", vary the generated questions rather than repeatedly producing the easiest possible form.

For example, a mixed React quiz should not consist of ten questions that all ask:
"What does X mean?"

Instead vary between:
- definitions
- understanding
- comparison
- practical usage
- debugging
- small code interpretation
- scenario-based reasoning

unless the selected questionStyle prevents that.

SELF-CHECK BEFORE RESPONDING

Before producing the final response, internally verify:

- Is the response valid JSON?
- Does it contain exactly one top-level object?
- Does it contain exactly the requested number of questions?
- Are all question IDs unique and sequential?
- Does every question contain every required field?
- Are all MCQs exactly four options?
- Is every correctAnswer valid for its question type?
- Is every checked value false?
- Is every userAnswer null?
- Are all questions related to the requested topic?
- Are there duplicate questions?
- Does the output follow every selected quiz setting?
- Is there any Markdown?
- Is there any text outside the JSON object?

If any requirement is violated, fix it before responding.

FINAL RESPONSE RULE

Return ONLY the valid JSON object.

Do not say anything else.
`;
function App() {
  const [currentQuestion, SetCurrentQuestion] = useState(0);

  const [quizSettings, setQuizSettings] = useState({
    quizType: "MCQ",
    difficulty: "Easy",
    numberOfQuestions: 10,
    timeLimit: "None",
    questionStyle: "Recall",
    scoring: "Standard",
    questionOrder: "Sequential",
    answerReveal: "After",
  });
  const [currentPhase, setCurrentPhase] = useState(" ");
  const [prompt, setPrompt] = useState({
    userPrompt: "",
  });
  const [data, setData] = useState(data1);

  console.log(prompt);
  console.log(currentPhase);

  //  const quizRequest = {
  //   userPrompt: prompt,

  //   quizSettings: {
  //     quizType: quizType,
  //     difficulty: difficulty,
  //     numberOfQuestions: numberOfQuestions,
  //     timeLimit: timeLimit,
  //     questionStyle: questionStyle,
  //   },
  // };

  async function fetchData(prompt, quizSettings) {
    // First API call with reasoning
    try {
      const convertedPromptToString = JSON.stringify({
        ...prompt,
        quizSettings,
      });

      console.log("converted to string prompt is : ", convertedPromptToString);

      let response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "liquid/lfm-2.5-2.6b:free",
            messages: [
              {
                role: "system",
                content: SYSTEM_PROMPT,
              },
              {
                role: "user",
                content: `${convertedPromptToString}`,
              },
            ],
            reasoning: { enabled: true },
          }),
        },
      );

      // Extract the assistant message with reasoning_details and save it to the response variable
      const result = await response.json();
      response = result.choices[0].message.content;
      const res = JSON.parse(response);
      console.log("response ", response);
      setData(res);
      console.log("res", res);
      setCurrentPhase("");
    } catch (e) {
      console.log("error", e);
    }
  }

  if (currentPhase == "generation") {
    return <Loader />;
  }

  if (currentPhase == "prompting") {
    return <Hero setPrompt={setPrompt} setCurrentPhase={setCurrentPhase} />;
  }

  return currentPhase == "settings" ? (
    <Settings
      setCurrentPhase={setCurrentPhase}
      prompt={prompt}
      fetchData={fetchData}
      quizSettings={quizSettings}
      setQuizSettings={setQuizSettings}
    />
  ) : (
    <MainPage data={data}   SetCurrentQuestion = {SetCurrentQuestion} currentQuestion = {currentQuestion} quizSettings={quizSettings} />
  );
}

export default App;
