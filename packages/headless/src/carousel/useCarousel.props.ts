import type { useCarouselProps } from '@primereact/types/shared/carousel';

export const defaultProps: useCarouselProps = {
    orientation: 'horizontal',
    align: 'start',
    loop: false,
    spacing: 16,
    slide: 0,
    onSlideChange: undefined
};
