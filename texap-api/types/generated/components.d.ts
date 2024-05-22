import type { Schema, Attribute } from '@strapi/strapi';

export interface FeedbackItem extends Schema.Component {
  collectionName: 'components_feedback_items';
  info: {
    displayName: 'item';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    rating: Attribute.Component<'rating.icon', true>;
    feedbackText: Attribute.RichText & Attribute.Required;
  };
}

export interface PartnerImage extends Schema.Component {
  collectionName: 'components_partner_images';
  info: {
    displayName: 'image';
    icon: 'arrowRight';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PricingFeaturesList extends Schema.Component {
  collectionName: 'components_pricing_features_lists';
  info: {
    displayName: 'list';
    icon: 'arrowRight';
  };
  attributes: {
    iconName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'ri-check-line'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PricingPlanItem extends Schema.Component {
  collectionName: 'components_pricing_plan_items';
  info: {
    displayName: 'item';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    price: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Purchase Plan'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/sign-in'>;
    featuresList: Attribute.Component<'pricing-features.list', true>;
    popularTag: Attribute.String;
  };
}

export interface RatingIcon extends Schema.Component {
  collectionName: 'components_rating_icons';
  info: {
    displayName: 'icon';
    icon: 'arrowRight';
  };
  attributes: {
    iconName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'ri-star-fill'>;
  };
}

export interface TopFeaturesItem extends Schema.Component {
  collectionName: 'components_top_features_items';
  info: {
    displayName: 'item';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortText: Attribute.Text & Attribute.Required;
    iconName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'ri-smartphone-line'>;
    iconBgClass: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'feedback.item': FeedbackItem;
      'partner.image': PartnerImage;
      'pricing-features.list': PricingFeaturesList;
      'pricing-plan.item': PricingPlanItem;
      'rating.icon': RatingIcon;
      'top-features.item': TopFeaturesItem;
    }
  }
}
