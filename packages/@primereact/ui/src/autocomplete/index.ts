export * as AutoComplete from './UIAutoComplete.parts';

// Named runtime exports to maximize tree-shaking
export {
    AutoCompleteButton,
    AutoCompleteClearIcon,
    AutoCompleteEmpty,
    AutoCompleteFooter,
    AutoCompleteHeader,
    AutoCompleteInput,
    AutoCompleteList,
    AutoCompleteOption,
    AutoCompleteOptions,
    AutoCompletePortal,
    //
    AutoCompleteProps,
    AutoCompleteProvider,
    AutoCompleteSelection,
    defaultButtonProps,
    defaultClearIconProps,
    defaultEmptyProps,
    defaultFooterProps,
    defaultHeaderProps,
    //
    defaultInputProps,
    defaultListProps,
    defaultOptionsProps,
    defaultPortalProps,
    defaultRootProps,
    defaultSelectionProps,
    useAutoCompleteContext
} from 'primereact/autocomplete';

export { UIAutoCompleteRoot as AutoCompleteRoot } from './root';
