export * as Tooltip from './UITooltip.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultArrowProps,
    defaultContentProps,
    defaultGroupProps,
    defaultPortalProps,
    defaultRootProps,
    defaultTriggerProps,
    TooltipArrow,
    TooltipContent,
    TooltipGroup,
    TooltipPortal,
    TooltipProps,
    TooltipProvider,
    TooltipTrigger,
    useTooltipContext
} from 'primereact/tooltip';
export { UITooltipRoot as TooltipRoot } from './root';
