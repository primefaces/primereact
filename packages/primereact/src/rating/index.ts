export * from './Rating.context';
export * as Rating from './Rating.parts';
export * as RatingProps from './Rating.props';

// Named runtime exports to maximize tree-shaking
export { defaultOptionProps, RatingOption } from './option';
export { defaultRootProps, RatingRoot } from './root';
