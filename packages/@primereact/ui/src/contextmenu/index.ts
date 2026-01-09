export * as ContextMenu from './UIContextMenu.parts';

// Named runtime exports to maximize tree-shaking
export {
    ContextMenuProps,
    ContextMenuProvider,
    ContextMenuTrigger,
    defaultCheckboxGroupProps,
    defaultCheckboxIconProps,
    defaultCheckboxItemProps,
    defaultIconProps,
    defaultItemProps,
    defaultLabelProps,
    defaultListProps,
    defaultPortalProps,
    defaultRadioGroupProps,
    defaultRadioIconProps,
    defaultRadioItemProps,
    defaultRootProps,
    defaultSeparatorProps,
    defaultSubProps,
    defaultTriggerProps,
    useContextMenuContext
} from 'primereact/contextmenu';
export { UIContextMenuCheckboxGroup as ContextMenuCheckboxGroup } from './checkboxgroup';
export { UIContextMenuCheckboxIcon as ContextMenuCheckboxIcon } from './checkboxicon';
export { UIContextMenuCheckboxItem as ContextMenuCheckboxItem } from './checkboxitem';
export { UIContextMenuIcon as ContextMenuIcon } from './icon';
export { UIContextMenuItem as ContextMenuItem } from './item';
export { UIContextMenuLabel as ContextMenuLabel } from './label';
export { UIContextMenuList as ContextMenuList } from './list';
export { UIContextMenuPortal as ContextMenuPortal } from './portal';
export { UIContextMenuRadioGroup as ContextMenuRadioGroup } from './radiogroup';
export { UIContextMenuRadioIcon as ContextMenuRadioIcon } from './radioicon';
export { UIContextMenuRadioItem as ContextMenuRadioItem } from './radioitem';
export { UIContextMenuRoot as ContextMenuRoot } from './root';
export { UIContextMenuSeparator as ContextMenuSeparator } from './separator';
export { UIContextMenuSub as ContextMenuSub } from './sub';
