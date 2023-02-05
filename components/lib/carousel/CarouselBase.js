import { ObjectUtils } from '../utils/Utils';

export const CarouselBase = {
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
        responsiveOptions: null,
        orientation: 'horizontal',
        verticalViewPortHeight: '300px',
        contentClassName: null,
        containerClassName: null,
        indicatorsContentClassName: null,
        onPageChange: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, CarouselBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, CarouselBase.defaultProps)
};
