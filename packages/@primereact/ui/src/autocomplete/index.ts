export * as AutoComplete from './UIAutoComplete.parts';

// Named runtime exports to maximize tree-shaking
export {
    AutoCompleteButton,
    AutoCompleteClearIcon,
    AutoCompletePortal,
    AutoCompleteProps,
    AutoCompleteProvider,
    defaultButtonProps,
    defaultClearIconProps,
    defaultEmptyProps,
    defaultFooterProps,
    defaultHeaderProps,
    defaultInputProps,
    defaultListProps,
    defaultOptionsProps,
    defaultPortalProps,
    defaultRootProps,
    defaultSelectionProps,
    useAutoCompleteContext
} from 'primereact/autocomplete';
export { UIAutoCompleteEmpty as AutoCompleteEmpty } from './empty';
export { UIAutoCompleteFooter as AutoCompleteFooter } from './footer';
export { UIAutoCompleteHeader as AutoCompleteHeader } from './header';
export { UIAutoCompleteInput as AutoCompleteInput } from './input';
export { UIAutoCompleteList as AutoCompleteList } from './list';
export { UIAutoCompleteOption as AutoCompleteOption } from './option';
export { UIAutoCompleteOptions as AutoCompleteOptions } from './options';
export { UIAutoCompleteRoot as AutoCompleteRoot } from './root';
export { UIAutoCompleteSelection as AutoCompleteSelection } from './selection';
