import * as HeadlessTimeline from '@primereact/headless/timeline';
import type { TimelineProps } from '@primereact/types/shared/timeline';

export const defaultProps: TimelineProps = {
    ...HeadlessTimeline.defaultProps,
    as: 'div',
    align: 'left',
    orientation: 'vertical'
};
