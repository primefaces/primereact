export * as Fieldset from './UIFieldset.parts';

// Named runtime exports to maximize tree-shaking
export { defaultContentProps, defaultLegendProps, defaultRootProps, defaultTitleProps, defaultTriggerProps, FieldsetLegend, FieldsetProps, FieldsetProvider, FieldsetTitle, useFieldsetContext } from 'primereact/fieldset';
export { UIFieldsetContent as FieldsetContent } from './content';
export { UIFieldsetRoot as FieldsetRoot } from './root';
export { UIFieldsetTrigger as FieldsetTrigger } from './trigger';
