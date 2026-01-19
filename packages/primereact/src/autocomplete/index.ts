export * from './AutoComplete.context';
export * as AutoComplete from './AutoComplete.parts';
export * as AutoCompleteProps from './AutoComplete.props';

// Named runtime exports to maximize tree-shaking
export { AutoCompleteTrigger, defaultTriggerProps } from './trigger';
export { AutoCompleteClearIcon, defaultClearIconProps } from './clearicon';
export { AutoCompleteEmpty, defaultEmptyProps } from './empty';
export { AutoCompleteFooter, defaultFooterProps } from './footer';
export { AutoCompleteHeader, defaultHeaderProps } from './header';
export { AutoCompleteInput, defaultInputProps } from './input';
export { AutoCompleteList, defaultListProps } from './list';
export { AutoCompleteOption, defaultOptionProps } from './option';
export { AutoCompleteOptions, defaultOptionsProps } from './options';
export { AutoCompletePortal, defaultPortalProps } from './portal';
export { AutoCompleteRoot, defaultRootProps } from './root';
export { AutoCompleteSelection, defaultSelectionProps } from './selection';
