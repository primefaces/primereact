export * as Card from './UICard.parts';

// Named runtime exports to maximize tree-shaking
export {
    CardBody,
    CardCaption,
    CardContent,
    CardFooter,
    CardHeader,
    CardProps,
    CardProvider,
    CardSubtitle,
    CardTitle,
    defaultBodyProps,
    defaultCaptionProps,
    defaultContentProps,
    defaultFooterProps,
    defaultHeaderProps,
    defaultRootProps,
    defaultSubtitleProps,
    defaultTitleProps,
    useCardContext
} from 'primereact/card';
export { UICardRoot as CardRoot } from './root';
