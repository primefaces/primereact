import * as HeadlessTimeline from '@primereact/headless/timeline';
import type { TimelineRootProps } from '@primereact/types/shared/timeline';

export const defaultRootProps: TimelineRootProps = {
    ...HeadlessTimeline.defaultProps,
    as: 'div',
    align: 'left',
    orientation: 'vertical'
};
