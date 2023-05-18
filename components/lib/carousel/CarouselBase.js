import { ComponentBase } from '../componentbase/ComponentBase';

export const CarouselBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Carousel',
        id: null,
        value: null,
        page: 0,
        header: null,
        footer: null,
        style: null,
        className: null,
        itemTemplate: null,
        circular: false,
        showIndicators: true,
        showNavigators: true,
        autoplayInterval: 0,
        numVisible: 1,
        numScroll: 1,
        prevIcon: null,
        nextIcon: null,
        responsiveOptions: null,
        orientation: 'horizontal',
        verticalViewPortHeight: '300px',
        contentClassName: null,
        containerClassName: null,
        indicatorsContentClassName: null,
        onPageChange: null,
        children: undefined
    }
});
