import { PopoverCloseProps } from '@primereact/types/shared/popover';
import { defaultProps as buttonDefaultProps } from 'primereact/button';

export const defaultCloseProps: PopoverCloseProps = {
    ...(buttonDefaultProps as PopoverCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary',
    onClick: undefined
};
