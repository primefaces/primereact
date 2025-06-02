import * as HeadlessScrollArea from '@primereact/headless/scrollarea';
import type { ScrollAreaProps } from '@primereact/types/shared/scrollarea';

export const defaultProps: ScrollAreaProps = {
    ...HeadlessScrollArea.defaultProps,
    as: 'div'
};
