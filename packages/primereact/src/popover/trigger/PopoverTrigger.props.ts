import { PopoverTriggerProps } from '@primereact/types/shared/popover';
import { defaultProps as buttonDefaultProps } from 'primereact/button';

export const defaultTriggerProps: PopoverTriggerProps = {
    ...(buttonDefaultProps as PopoverTriggerProps),
    onClick: undefined
};
