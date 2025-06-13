import { createStyles } from '@primereact/styles/utils';
import type { DividerInstance } from '@primereact/types/shared/divider';
import { style } from '@primeuix/styles/divider';

export const styles = createStyles<DividerInstance>({
    name: 'divider',
    style,
    classes: {
        root: ({ props }) => [
            'p-divider p-component',
            'p-divider-' + props.orientation,
            'p-divider-' + props.type,
            { 'p-divider-left': props.orientation === 'horizontal' && (!props.align || props.align === 'left') },
            { 'p-divider-center': props.orientation === 'horizontal' && props.align === 'center' },
            { 'p-divider-right': props.orientation === 'horizontal' && props.align === 'right' },
            { 'p-divider-top': props.orientation === 'vertical' && props.align === 'top' },
            { 'p-divider-center': props.orientation === 'vertical' && (!props.align || props.align === 'center') },
            { 'p-divider-bottom': props.orientation === 'vertical' && props.align === 'bottom' }
        ],
        content: 'p-divider-content'
    },
    inlineStyles: {
        root: ({ props }) => ({
            justifyContent: props.orientation === 'horizontal' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : undefined) : undefined,
            alignItems: props.orientation === 'vertical' ? (props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : undefined) : undefined
        })
    }
});
