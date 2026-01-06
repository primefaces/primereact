import type { useCarouselProps } from '@primereact/types/shared/carousel';

export const defaultProps: useCarouselProps = {
    orientation: 'horizontal',
    align: 'start',
    loop: false,
    snapType: 'mandatory',
    spacing: 16,
    autoSize: false,
    slidesPerPage: 1,
    slide: undefined,
    onSlideChange: undefined,
    defaultPage: 0,
    page: undefined,
    onPageChange: undefined
};
