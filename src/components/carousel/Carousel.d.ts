import * as React from 'react';

interface CarouselProps {
    id?: string;
    value?: any;
    activeIndex?: number,
    header?: any,
    footer?: any,
    style?: object,
    className?: string,
    itemTemplate?: any,
    numVisible?: number,
    numScroll?: number,
    responsive?: any,
    orientation?: string,
    verticalContentHeight?: string,
    contentClassName?: string,
    dotsContentClassName?: string,
    onPageChange(e: { originalEvent: Event, index: number}): void;
}

export class Carousel extends React.Component<CarouselProps,any> {}
