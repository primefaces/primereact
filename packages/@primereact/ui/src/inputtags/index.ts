export * as InputTags from './UIInputTags.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultHiddenInputProps,
    defaultInputProps,
    defaultItemProps,
    defaultListProps,
    defaultOptionProps,
    defaultOptionsProps,
    defaultPortalProps,
    defaultRootProps,
    InputTagsHiddenInput,
    InputTagsPortal,
    InputTagsProps,
    InputTagsProvider,
    useInputTagsContext
} from 'primereact/inputtags';
export { UIInputTagsInput as InputTagsInput } from './input';
export { UIInputTagsItem as InputTagsItem } from './item';
export { UIInputTagsList as InputTagsList } from './list';
export { UIInputTagsOption as InputTagsOption } from './option';
export { UIInputTagsOptions as InputTagsOptions } from './options';
export { UIInputTagsRoot as InputTagsRoot } from './root';
