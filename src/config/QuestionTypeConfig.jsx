const QuestionTypeConfig = {
  "Single Correct Option": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "Questions",
      "OptionsSection",
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
    optionsType: "radio",
  },
  "Multiple Correct Options": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "Questions",
      "OptionsSection",
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
    optionsType: "checkbox",
  },
  "Boolean Type": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "Questions",
      "BooleanOptionsSection",
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
  },
  "Subjective Type": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "Questions",
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
  },
  "Integer Type": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "Questions",
      "IntegerAnswer",
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
  },
  "Typing Para Type": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "TypingParaSection",
      "ReferenceAndSupportMediaSection",
    ],
  },
  "Coding Type": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "CodingTypeSection",
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
  },
  "Multiple Marking Type": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "MultipleMarkingTypeSection",
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
    optionsType: "multiple-marking",
  },
  "Re-arrange Type": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "RearrangeSection",
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
  },
  "Matching Type": {
    sections: [
      "MultilingualSection",
      "IsObservationQuestion",
      "IsParagraphQuestion",
      "MatchingSection", 
      "HintSection",
      "ExplanationSection",
      "ReferenceAndSupportMediaSection",
    ],
  },

  "Fill in the blanks Type": {
    sections: [
      "HintSection",
      "ExplanationSection",
      "FillInTheBlanksSection", 
    ],
  },
};

export default QuestionTypeConfig;
