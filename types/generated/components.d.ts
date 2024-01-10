import type { Schema, Attribute } from '@strapi/strapi';

export interface ListPages extends Schema.Component {
  collectionName: 'components_list_pages';
  info: {
    displayName: 'pages';
    icon: 'bulletList';
  };
  attributes: {
    page: Attribute.String;
    page2: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.pages': ListPages;
    }
  }
}
