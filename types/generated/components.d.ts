import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.rich-text': SharedRichText;
    }
  }
}
