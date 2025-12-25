export * as Rating from './UIRating.parts';

// Named runtime exports to maximize tree-shaking
export { defaultOptionProps, defaultRootProps, RatingOption, RatingProps, RatingProvider, useRatingContext } from 'primereact/rating';
export { UIRatingRoot as RatingRoot } from './root';
