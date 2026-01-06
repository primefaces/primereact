import { createStyles } from '@primereact/styles/utils';
import type { SplitterRootInstance } from '@primereact/types/shared/splitter';
import { style } from '@primeuix/styles/splitter';

export const styles = createStyles<SplitterRootInstance>({
    name: 'splitter',
    style,
    classes: {
        root: ({ props }) => ['p-splitter p-component', 'p-splitter-' + props.orientation],
        panel: ({ context }) => ['p-splitterpanel', { 'p-splitterpanel-nested': context.isNested }],
        gutter: 'p-splitter-gutter',
        thumb: 'p-splitter-gutter-handle'
    },
    inlineStyles: {
        thumb: ({ props }) => (props.orientation === 'horizontal' ? { width: props.gutterSize } : { height: props.gutterSize })
    }
});
