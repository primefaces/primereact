export * as AutoComplete from './UIAutoComplete.parts';

// Named runtime exports to maximize tree-shaking
export {
    AutoCompleteTrigger,
    AutoCompleteClearIcon,
    AutoCompletePanel,
    AutoCompletePortal,
    AutoCompletePositioner,
    AutoCompleteProps,
    AutoCompleteProvider,
    defaultTriggerProps,
    defaultClearIconProps,
    defaultEmptyProps,
    defaultFooterProps,
    defaultHeaderProps,
    defaultValueProps,
    defaultListProps,
    defaultOptionsProps,
    defaultPanelProps,
    defaultPortalProps,
    defaultPositionerProps,
    defaultRootProps,
    defaultSelectionProps,
    useAutoCompleteContext
} from 'primereact/autocomplete';
export { UIAutoCompleteEmpty as AutoCompleteEmpty } from './empty';
export { UIAutoCompleteFooter as AutoCompleteFooter } from './footer';
export { UIAutoCompleteHeader as AutoCompleteHeader } from './header';
export { UIAutoCompleteValue as AutoCompleteValue } from './value';
export { UIAutoCompleteList as AutoCompleteList } from './list';
export { UIAutoCompleteOption as AutoCompleteOption } from './option';
export { UIAutoCompleteOptions as AutoCompleteOptions } from './options';
export { UIAutoCompleteRoot as AutoCompleteRoot } from './root';
export { UIAutoCompleteSelection as AutoCompleteSelection } from './selection';
