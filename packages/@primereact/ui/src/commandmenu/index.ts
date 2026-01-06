export * as CommandMenu from './UICommandMenu.parts';

// Named runtime exports to maximize tree-shaking
export {
    CommandMenuEmpty,
    CommandMenuGroup,
    CommandMenuGroupHeading,
    CommandMenuInput,
    CommandMenuItem,
    CommandMenuList,
    CommandMenuProps,
    CommandMenuProvider,
    defaultEmptyProps,
    defaultGroupHeadingProps,
    defaultGroupProps,
    defaultInputProps,
    defaultItemProps,
    defaultListProps,
    defaultRootProps,
    useCommandMenuContext
} from 'primereact/commandmenu';
export { UICommandMenuRoot as CommandMenuRoot } from './root';
