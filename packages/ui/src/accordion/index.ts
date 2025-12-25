export * as Accordion from './UIAccordion.parts';

// Named runtime exports to maximize tree-shaking
export {
    AccordionContent,
    AccordionHeader,
    AccordionHeaderIndicator,
    AccordionPanel,
    AccordionProps,
    AccordionProvider,
    defaultContentProps,
    defaultHeaderIndicatorProps,
    defaultHeaderProps,
    defaultPanelProps,
    useAccordionContext
} from 'primereact/accordion';
export { UIAccordionRoot } from './root';
