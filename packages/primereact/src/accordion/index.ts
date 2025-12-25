export * from './Accordion.context';
export * as Accordion from './Accordion.parts';
export * as AccordionProps from './Accordion.props';

// Named runtime exports to maximize tree-shaking
export { AccordionContent, defaultContentProps } from './content';
export { AccordionHeader, defaultHeaderProps } from './header';
export { AccordionHeaderIndicator, defaultHeaderIndicatorProps } from './headerindicator';
export { AccordionPanel, defaultPanelProps } from './panel';
export { AccordionRoot, defaultRootProps } from './root';
