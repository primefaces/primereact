export * from './Fieldset.context';
export * as Fieldset from './Fieldset.parts';
export * as FieldsetProps from './Fieldset.props';

// Named runtime exports to maximize tree-shaking
export { defaultContentProps, FieldsetContent } from './content';
export { defaultLegendProps, FieldsetLegend } from './legend';
export { defaultRootProps, FieldsetRoot } from './root';
