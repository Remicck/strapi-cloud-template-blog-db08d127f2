import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedQuestions extends Schema.Component {
  collectionName: 'questions';
  info: {
    name: 'Question';
    description: 'Component to manage questions and their choices.';
    displayName: 'Questions';
  };
  attributes: {
    questionText: Attribute.String & Attribute.Required;
    choise_1: Attribute.String;
    choise_2: Attribute.String;
    choise_3: Attribute.String;
    choise_4: Attribute.String;
    correct_answer: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.questions': SharedQuestions;
    }
  }
}
