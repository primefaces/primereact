import { createStyles } from '@primereact/styles/utils';
import type { CarouselRootInstance } from '@primereact/types/shared/carousel';

const theme = `

.p-carousel-content {
    position: relative;
    scrollbar-width: none;
    display: flex;
    gap: var(--spacing-items);
    scroll-snap-type: var(--scroll-snap-type);
}

.p-carousel-content[data-orientation="vertical"] {
    overflow-y: scroll;
    overscroll-behavior-y: contain;
    flex-direction: column;
}

.p-carousel-content[data-orientation="horizontal"] {
    overflow-x: scroll;
    overscroll-behavior-x: contain;
}

.p-carousel-item {
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 0;
    flex-basis: calc(100% / var(--slides-per-page) - var(--spacing-items) * (var(--slides-per-page) - 1) / var(--slides-per-page));
}

.p-carousel-item[data-autosize=""] {
    flex-basis: auto;
}

.p-carousel-item[data-align="start"] {
    scroll-snap-align: start;
}

.p-carousel-item[data-align="center"] {
    scroll-snap-align: center;
}

.p-carousel-item[data-align="end"] {
    scroll-snap-align: end;
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

export const styles = createStyles<CarouselRootInstance>({
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
