export * as Tree from './UITree.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultContentProps,
    defaultEmptyProps,
    defaultFilterProps,
    defaultFooterProps,
    defaultHeaderProps,
    defaultIconProps,
    defaultLabelProps,
    defaultListProps,
    defaultNodeProps,
    defaultRootProps,
    defaultToggleProps,
    TreeContent,
    TreeEmpty,
    TreeFilter,
    TreeFooter,
    TreeHeader,
    TreeIcon,
    TreeLabel,
    TreeList,
    TreeNode,
    TreeProps,
    TreeProvider,
    TreeToggle,
    useTreeContext
} from 'primereact/tree';
export { UITreeRoot as TreeRoot } from './root';
