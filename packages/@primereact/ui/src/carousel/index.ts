export * as Carousel from './UICarousel.parts';

// Named runtime exports to maximize tree-shaking
export {
    CarouselContent,
    CarouselIndicator,
    CarouselIndicators,
    CarouselItem,
    CarouselNext,
    CarouselPrev,
    CarouselProps,
    CarouselProvider,
    defaultContentProps,
    defaultIndicatorProps,
    defaultIndicatorsProps,
    defaultItemProps,
    defaultNextProps,
    defaultPrevProps,
    defaultRootProps,
    useCarouselContext
} from 'primereact/carousel';
export { UICarouselRoot as CarouselRoot } from './root';
