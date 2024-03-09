import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-carousel {
        display: flex;
        flex-direction: column;
    }
    
    .p-carousel-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    
    .p-carousel-prev,
    .p-carousel-next {
        align-self: center;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-carousel-container {
        display: flex;
        flex-direction: row;
    }
    
    .p-carousel-items-content {
        overflow: hidden;
        width: 100%;
    }
    
    .p-carousel-items-container {
        display: flex;
        flex-direction: row;
    }
    
    .p-carousel-indicators {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .p-carousel-indicator > button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    /* Vertical */
    .p-carousel-vertical .p-carousel-container {
        flex-direction: column;
    }
    
    .p-carousel-vertical .p-carousel-items-container {
        flex-direction: column;
        height: 100%;
    }
    
    /* Keyboard Support */
    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }
    
    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
}
`;

const classes = {
    root: ({ isVertical }) =>
        classNames('p-carousel p-component', {
            'p-carousel-vertical': isVertical,
            'p-carousel-horizontal': !isVertical
        }),
    container: 'p-carousel-container',
    content: 'p-carousel-content',
    indicators: 'p-carousel-indicators p-reset',
    header: 'p-carousel-header',
    footer: 'p-carousel-footer',
    itemsContainer: 'p-carousel-items-container',
    itemsContent: 'p-carousel-items-content',
    previousButton: ({ isDisabled }) =>
        classNames('p-carousel-prev p-link', {
            'p-disabled': isDisabled
        }),
    previousButtonIcon: 'p-carousel-prev-icon',
    nextButton: ({ isDisabled }) =>
        classNames('p-carousel-next p-link', {
            'p-disabled': isDisabled
        }),
    nextButtonIcon: 'p-carousel-next-icon',
    indicator: ({ isActive }) =>
        classNames('p-carousel-indicator', {
            'p-highlight': isActive
        }),
    indicatorButton: 'p-link',
    itemCloned: ({ itemProps: props }) =>
        classNames(props.className, 'p-carousel-item', {
            'p-carousel-item-active': props.active,
            'p-carousel-item-start': props.start,
            'p-carousel-item-end': props.end
        }),
    item: ({ itemProps: props }) =>
        classNames(props.className, 'p-carousel-item', {
            'p-carousel-item-active': props.active,
            'p-carousel-item-start': props.start,
            'p-carousel-item-end': props.end
        })
};

const inlineStyles = {
    itemsContent: ({ height }) => ({ height })
};

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
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
