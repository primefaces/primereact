import { createStyles } from '@primereact/styles/utils';
import type { CarouselInstance } from '@primereact/types/shared/carousel';

const theme = `
.p-carousel{
position:relative;
}

.p-carousel-viewport{
    overflow: hidden;
}

.p-carousel-content{
    display: flex;
    transform: translate3d(var(--p-swipe-amount-x), var(--p-swipe-amount-y), 0);
    touch-action: pan-y pinch-zoom;
}

.p-carousel-content-horizontal{
    flex-direction: row;
    margin-left: calc(var(--p-spacing) * -1);
}

.p-carousel-content-vertical{
    flex-direction: column;
    margin-top: calc(var(--p-spacing) * -1);
}
    
.p-carousel-item{
    flex: 0 0 var(--p-slide-size);
    min-width: 0;
}

.p-carousel-content-horizontal .p-carousel-item{
padding-left: var(--p-spacing);
}

.p-carousel-content-vertical .p-carousel-item{
padding-top: var(--p-spacing);
}

.p-carousel-indicator-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: dt('carousel.indicator.list.padding');
    gap: dt('carousel.indicator.list.gap');
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: dt('carousel.indicator.background');
    width: dt('carousel.indicator.width');
    height: dt('carousel.indicator.height');
    border: 0 none;
    transition:
        background dt('carousel.transition.duration'),
        color dt('carousel.transition.duration'),
        outline-color dt('carousel.transition.duration'),
        box-shadow dt('carousel.transition.duration');
    outline-color: transparent;
    border-radius: dt('carousel.indicator.border.radius');
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: dt('carousel.indicator.focus.ring.shadow');
    outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');
    outline-offset: dt('carousel.indicator.focus.ring.offset');
}

.p-carousel-indicator-button:hover {
    background: dt('carousel.indicator.hover.background');
}

.p-carousel-indicator-active.p-carousel-indicator-button {
    background: dt('carousel.indicator.active.background');
}
`;

export const styles = createStyles<CarouselInstance>({
    name: 'carousel',
    style: theme,
    classes: {
        root: 'p-carousel p-component',
        viewport: 'p-carousel-viewport',
        content: ({ context }) => ['p-carousel-content', context.orientation === 'vertical' ? 'p-carousel-content-vertical' : 'p-carousel-content-horizontal'],
        item: 'p-carousel-item',
        indicators: 'p-carousel-indicator-list',
        indicator: ({ context }) => ['p-carousel-indicator-button', context.active ? 'p-carousel-indicator-active' : ''],
        prev: ({ context }) => [
            {
                'p-disabled': context.disabled
            }
        ],
        next: ({ context }) => [
            {
                'p-disabled': context.disabled
            }
        ]
    }
});
