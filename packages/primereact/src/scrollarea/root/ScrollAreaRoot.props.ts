import * as HeadlessScrollArea from '@primereact/headless/scrollarea';
import type { ScrollAreaRootProps } from '@primereact/types/shared/scrollarea';

export const defaultRootProps: ScrollAreaRootProps = {
    ...HeadlessScrollArea.defaultProps,
    as: 'div'
};
