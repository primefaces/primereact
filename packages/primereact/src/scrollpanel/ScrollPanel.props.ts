import * as HeadlessScrollPanel from '@primereact/headless/scrollpanel';
import type { ScrollPanelProps } from '@primereact/types/shared/scrollpanel';

export const defaultProps: ScrollPanelProps = {
    ...HeadlessScrollPanel.defaultProps,
    __TYPE: 'ScrollPanel'
};
