export * as ScrollArea from './UIScrollArea.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultContentProps,
    defaultRootProps,
    defaultThumbXProps,
    defaultThumbYProps,
    defaultViewportProps,
    ScrollAreaContent,
    ScrollAreaProps,
    ScrollAreaProvider,
    ScrollAreaThumbX,
    ScrollAreaThumbY,
    ScrollAreaViewport,
    useScrollAreaContext
} from 'primereact/scrollarea';
export { UIScrollAreaRoot as ScrollAreaRoot } from './root';
