export * as Knob from './UIKnob.parts';

// Named runtime exports to maximize tree-shaking
export { defaultRangeProps, defaultRootProps, defaultTextProps, defaultValueProps, KnobProps, KnobProvider, KnobRange, KnobText, KnobValue, useKnobContext } from 'primereact/knob';
export { UIKnobRoot as KnobRoot } from './root';
