import React, { useState } from "react";
import SettingCard from "../components/SettingCard";

import {
  CircleDot,
  Type,
  FormInput,
  Blend,
  Sprout,
  Gauge,
  Flame,
  ListOrdered,
  Clock3,
  Lightbulb,
  Brain,
  Target,
  SlidersHorizontal,
  Trophy,
  MinusCircle,
  List,
  Shuffle,
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";

function Settings({ quizSettings, setQuizSettings, prompt, setCurrentPhase, fetchData}) {




  const iconMap = {
    quizType: {
      MCQ: <CircleDot />,
      Text: <Type />,
      Fill: <FormInput />,
      Mixed: <Blend />,
    },

    difficulty: {
      Easy: <Sprout />,
      Medium: <Gauge />,
      Hard: <Flame />,
      Mixed: <Blend />,
    },

    numberOfQuestions: <ListOrdered />,

    timeLimit: <Clock3 />,

    questionStyle: {
      Recall: <Lightbulb />,
      Conceptual: <Brain />,
      Application: <Target />,
      Mixed: <Blend />,
    },

    scoring: {
      Standard: <Trophy />,
      Negative: <MinusCircle />,
      Custom: <SlidersHorizontal />,
      Mixed: <Blend />,
    },

    questionOrder: {
      Sequential: <List />,
      Shuffle: <Shuffle />,
    },

    answerReveal: {
      Immediately: <Eye />,
      After: <EyeOff />,
      Never: <Lock />,
    },
  };



  return (
    <div className="loaderOuterContainer">
      <div className="innerSettingsContainer">

        {/* Quiz Type */}
        <SettingCard
          classForCard="cardsInfo"
          header="Quiz Type."
          para="choose appropriate type"
          settingName="quizType"
          value={quizSettings.quizType}
          setQuizSettings={setQuizSettings}
          options={[
            {
              icon: iconMap.quizType.MCQ,
              text: "MCQ",
            },
            {
              icon: iconMap.quizType.Text,
              text: "Text",
            },
            {
              icon: iconMap.quizType.Fill,
              text: "Fill",
            },
            {
              icon: iconMap.quizType.Mixed,
              text: "Mixed",
            },
          ]}
        />

        {/* Difficulty */}
        <SettingCard
          classForCard="cardsInfo"
          header="Difficulty."
          para="how challenging should it be"
          settingName="difficulty"
          value={quizSettings.difficulty}
          setQuizSettings={setQuizSettings}
          options={[
            {
              icon: iconMap.difficulty.Easy,
              text: "Easy",
            },
            {
              icon: iconMap.difficulty.Medium,
              text: "Medium",
            },
            {
              icon: iconMap.difficulty.Hard,
              text: "Hard",
            },
            {
              icon: iconMap.difficulty.Mixed,
              text: "Mixed",
            },
          ]}
        />

        {/* Number of Questions */}
        <SettingCard
          classForCard="cardsInfo"
          header="Number of Questions."
          para="how many questions?"
          settingName="numberOfQuestions"
          value={quizSettings.numberOfQuestions}
          setQuizSettings={setQuizSettings}
          options={[
            {
              icon: iconMap.numberOfQuestions,
              text: 5,
            },
            {
              icon: iconMap.numberOfQuestions,
              text: 10,
            },
            {
              icon: iconMap.numberOfQuestions,
              text: 20,
            },
            {
              icon: iconMap.numberOfQuestions,
              text: 30,
            },
          ]}
        />

        {/* Time Limit */}
        <SettingCard
          classForCard="cardsInfo"
          header="Time Limit."
          para="set a time limit"
          settingName="timeLimit"
          value={quizSettings.timeLimit}
          setQuizSettings={setQuizSettings}
          options={[
            {
              icon: iconMap.timeLimit,
              text: "None",
            },
            {
              icon: iconMap.timeLimit,
              text: "10 min",
            },
            {
              icon: iconMap.timeLimit,
              text: "20 min",
            },
            {
              icon: iconMap.timeLimit,
              text: "30 min",
            },
          ]}
        />

        {/* Question Style */}
        <SettingCard
          classForCard="cardsInfo"
          header="Question Style."
          para="how should questions test you?"
          settingName="questionStyle"
          value={quizSettings.questionStyle}
          setQuizSettings={setQuizSettings}
          options={[
            {
              icon: iconMap.questionStyle.Recall,
              text: "Recall",
            },
            {
              icon: iconMap.questionStyle.Conceptual,
              text: "Conceptual",
            },
            {
              icon: iconMap.questionStyle.Application,
              text: "Application",
            },
            {
              icon: iconMap.questionStyle.Mixed,
              text: "Mixed",
            },
          ]}
        />

        {/* Scoring */}
        <SettingCard
          classForCard="cardsInfo"
          header="Scoring."
          para="how should answers be scored?"
          settingName="scoring"
          value={quizSettings.scoring}
          setQuizSettings={setQuizSettings}
          options={[
            {
              icon: iconMap.scoring.Standard,
              text: "Standard",
            },
            {
              icon: iconMap.scoring.Negative,
              text: "Negative",
            },
            {
              icon: iconMap.scoring.Custom,
              text: "Custom",
            },
            {
              icon: iconMap.scoring.Mixed,
              text: "Mixed",
            },
          ]}
        />

        {/* Question Order */}
        <SettingCard
          classForCard="cardsInfo orderQuestion"
          header="Question Order."
          para="choose question arrangement"
          settingName="questionOrder"
          value={quizSettings.questionOrder}
          setQuizSettings={setQuizSettings}
          options={[
            {
              icon: iconMap.questionOrder.Sequential,
              text: "Sequential",
            },
            {
              icon: iconMap.questionOrder.Shuffle,
              text: "Shuffle",
            },
          ]}
        />

        {/* Answer Reveal */}
        <SettingCard
          classForCard="cardsInfo"
          header="Answer Reveal."
          para="when should answers be shown?"
          settingName="answerReveal"
          value={quizSettings.answerReveal}
          setQuizSettings={setQuizSettings}
          options={[
            {
              icon: iconMap.answerReveal.Immediately,
              text: "Immediately",
            },
            {
              icon: iconMap.answerReveal.After,
              text: "After",
            },
            {
              icon: iconMap.answerReveal.Never,
              text: "Never",
            },
          ]}
        />

        {/* Quiz Summary */}
        <SettingCard
          classForCard="cardsInfo"
          header="Quiz Summary."
          readOnly={true}
          para="review your settings before generating"
          options={[
            {
              icon: iconMap.numberOfQuestions,
              text: `${quizSettings.numberOfQuestions} Questions`,
            },
            {
              icon: iconMap.difficulty[quizSettings.difficulty],
              text: quizSettings.difficulty,
            },
            {
              icon: iconMap.quizType[quizSettings.quizType],
              text: quizSettings.quizType,
            },
            {
              icon: iconMap.timeLimit,
              text: quizSettings.timeLimit,
            },
            {
              icon: iconMap.questionStyle[quizSettings.questionStyle],
              text: quizSettings.questionStyle,
            },
            {
              icon: iconMap.scoring[quizSettings.scoring],
              text: quizSettings.scoring,
            },
            {
              icon: iconMap.questionOrder[quizSettings.questionOrder],
              text: quizSettings.questionOrder,
            },
            {
              icon: iconMap.answerReveal[quizSettings.answerReveal],
              text: quizSettings.answerReveal,
            },
          ]}
        />

        {/* Generate Button */}
        <div className="btnGen">
          <button onClick={()=>{
            fetchData(prompt, quizSettings);
            console.log('prompt from setting', prompt)
            console.log('first', quizSettings);
           return setCurrentPhase('generation')
          }}>
            Generate Quiz
          </button>
        </div>

      </div>
    </div>
  );
}

export default Settings;