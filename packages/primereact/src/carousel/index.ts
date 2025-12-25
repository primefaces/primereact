export * from './Carousel.context';
export * as Carousel from './Carousel.parts';
export * as CarouselProps from './Carousel.props';

// Named runtime exports to maximize tree-shaking
export { CarouselContent, defaultContentProps } from './content';
export { CarouselIndicator, defaultIndicatorProps } from './indicator';
export { CarouselIndicators, defaultIndicatorsProps } from './indicators';
export { CarouselItem, defaultItemProps } from './item';
export { CarouselNext, defaultNextProps } from './next';
export { CarouselPrev, defaultPrevProps } from './prev';
export { CarouselRoot, defaultRootProps } from './root';
