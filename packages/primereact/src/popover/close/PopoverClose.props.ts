import { PopoverCloseProps } from '@primereact/types/shared/popover';
import { Button, ButtonProps } from 'primereact/button';

export const defaultCloseProps: PopoverCloseProps = {
    ...(ButtonProps.defaultProps as PopoverCloseProps),
    as: Button,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary',
    onClick: undefined
};
