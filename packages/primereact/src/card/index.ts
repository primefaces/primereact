export * from './Card.context';
export * as Card from './Card.parts';
export * as CardProps from './Card.props';

// Named runtime exports to maximize tree-shaking
export { CardBody, defaultBodyProps } from './body';
export { CardCaption, defaultCaptionProps } from './caption';
export { CardContent, defaultContentProps } from './content';
export { CardFooter, defaultFooterProps } from './footer';
export { CardHeader, defaultHeaderProps } from './header';
export { CardRoot, defaultRootProps } from './root';
export { CardSubtitle, defaultSubtitleProps } from './subtitle';
export { CardTitle, defaultTitleProps } from './title';
