import * as HeadlessCarousel from '@primereact/headless/carousel';
import type { CarouselProps } from '@primereact/types/shared/carousel';

export const defaultProps: CarouselProps = {
    ...HeadlessCarousel.defaultProps,
    as: 'div'
};
