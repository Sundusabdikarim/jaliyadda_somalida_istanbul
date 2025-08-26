import type { Schema, Attribute } from '@strapi/strapi';

export interface EventsPageImages extends Schema.Component {
  collectionName: 'components_events_page_images';
  info: {
    displayName: 'images';
    description: '';
  };
  attributes: {};
}

export interface EventsPageImagestex extends Schema.Component {
  collectionName: 'components_events_page_imagestexes';
  info: {
    displayName: 'imagestex';
    description: '';
  };
  attributes: {
    featuredImage: Attribute.Media;
    text: Attribute.String;
  };
}

export interface EventsPageText extends Schema.Component {
  collectionName: 'components_events_page_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    headline: Attribute.String;
    subtitile: Attribute.Text;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'events-page.images': EventsPageImages;
      'events-page.imagestex': EventsPageImagestex;
      'events-page.text': EventsPageText;
    }
  }
}
