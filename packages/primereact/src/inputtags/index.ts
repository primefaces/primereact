export * from './InputTags.context';
export * as InputTags from './InputTags.parts';
export * as InputTagsProps from './InputTags.props';

// Named runtime exports to maximize tree-shaking
export { defaultHiddenInputProps, InputTagsHiddenInput } from './hiddeninput';
export { defaultInputProps, InputTagsInput } from './input';
export { defaultItemProps, InputTagsItem } from './item';
export { defaultRootProps, InputTagsRoot } from './root';
