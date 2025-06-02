import { createStyles } from '@primereact/styles/utils';
import type { DividerInstance } from '@primereact/types/shared/divider';
import { style } from '@primeuix/styles/divider';

export const styles = createStyles<DividerInstance>({
    name: 'divider',
    style,
    classes: {
        root: ({ props }) => [
            'p-divider p-component',
            'p-divider-' + props.layout,
            'p-divider-' + props.type,
            { 'p-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left') },
            { 'p-divider-center': props.layout === 'horizontal' && props.align === 'center' },
            { 'p-divider-right': props.layout === 'horizontal' && props.align === 'right' },
            { 'p-divider-top': props.layout === 'vertical' && props.align === 'top' },
            { 'p-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center') },
            { 'p-divider-bottom': props.layout === 'vertical' && props.align === 'bottom' }
        ],
        content: 'p-divider-content'
    },
    inlineStyles: {
        root: ({ props }) => ({
            justifyContent: props.layout === 'horizontal' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : undefined) : undefined,
            alignItems: props.layout === 'vertical' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : undefined) : undefined
        })
    }
});
