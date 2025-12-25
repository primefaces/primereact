import { PopoverCloseProps } from '@primereact/types/shared/popover';
import { ButtonProps } from 'primereact/button';

export const defaultCloseProps: PopoverCloseProps = {
    ...(ButtonProps.RootDefaults as PopoverCloseProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary',
    onClick: undefined
};
