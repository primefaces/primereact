export * as Select from './UISelect.parts';

// Named runtime exports to maximize tree-shaking
export {
    SelectClearIcon,
    SelectPortal,
    SelectProps,
    SelectProvider,
    defaultClearIconProps,
    defaultEmptyProps,
    defaultFooterProps,
    defaultHeaderProps,
    defaultListProps,
    defaultOptionsProps,
    defaultPortalProps,
    defaultRootProps,
    defaultSelectionProps,
    useSelectContext
} from 'primereact/select';
export { UISelectEmpty as SelectEmpty } from './empty';
export { UISelectFooter as SelectFooter } from './footer';
export { UISelectHeader as SelectHeader } from './header';
export { UISelectList as SelectList } from './list';
export { UISelectOption as SelectOption } from './option';
export { UISelectOptions as SelectOptions } from './options';
export { UISelectRoot as SelectRoot } from './root';
export { UISelectSelection as SelectSelection } from './selection';
