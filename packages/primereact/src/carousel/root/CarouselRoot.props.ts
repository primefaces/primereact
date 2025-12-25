import * as HeadlessCarousel from '@primereact/headless/carousel';
import type { CarouselRootProps } from '@primereact/types/shared/carousel';

export const defaultRootProps: CarouselRootProps = {
    ...HeadlessCarousel.defaultProps,
    as: 'div'
};
