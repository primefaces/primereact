export * as Popover from './UIPopover.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultCloseProps,
    defaultContentProps,
    defaultPortalProps,
    defaultRootProps,
    defaultTriggerProps,
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverPortal,
    PopoverPositioner,
    PopoverProps,
    PopoverProvider,
    PopoverTrigger,
    usePopoverContext
} from 'primereact/popover';
export { UIPopoverRoot as PopoverRoot } from './root';
