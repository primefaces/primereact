export * as Accordion from './UIAccordion.parts';

// Named runtime exports to maximize tree-shaking
export { AccordionHeader, AccordionProps, AccordionProvider, defaultContentProps, defaultHeaderProps, defaultPanelProps, defaultRootProps, defaultTriggerProps, useAccordionContext } from 'primereact/accordion';
export { UIAccordionContent as AccordionContent } from './content';
export { UIAccordionPanel as AccordionPanel } from './panel';
export { UIAccordionRoot as AccordionRoot } from './root';
export { UIAccordionTrigger as AccordionTrigger } from './trigger';
