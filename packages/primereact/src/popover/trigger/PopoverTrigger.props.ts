import { PopoverTriggerProps } from '@primereact/types/shared/popover';
import { Button, ButtonProps } from 'primereact/button';

export const defaultTriggerProps: PopoverTriggerProps = {
    ...(ButtonProps.defaultProps as PopoverTriggerProps),
    as: Button,
    onClick: undefined
};
