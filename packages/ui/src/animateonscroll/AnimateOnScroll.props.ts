import * as HeadlessAnimateOnScroll from '@primereact/headless/animateonscroll';
import type { AnimateOnScrollProps } from '@primereact/types/shared/animateonscroll';

export const defaultProps: AnimateOnScrollProps = {
    ...HeadlessAnimateOnScroll.defaultProps,
    as: 'div',
    enterClassName: undefined,
    leaveClassName: undefined
};
