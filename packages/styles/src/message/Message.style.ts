import { createStyles } from '@primereact/styles/utils';
import type { MessageInstance } from '@primereact/types/shared/message';
import { style } from '@primeuix/styles/message';

export const styles = createStyles<MessageInstance>({
    name: 'message',
    style,
    classes: {
        root: ({ props }) => [
            'p-message p-component p-message-' + props.severity,
            {
                'p-message-outlined': props.variant === 'outlined',
                'p-message-simple': props.variant === 'simple',
                'p-message-sm': props.size === 'small',
                'p-message-lg': props.size === 'large'
            }
        ],
        content: 'p-message-content',
        icon: 'p-message-icon',
        text: 'p-message-text',
        closeButton: 'p-message-close-button',
        closeIcon: 'p-message-close-icon'
    }
});
