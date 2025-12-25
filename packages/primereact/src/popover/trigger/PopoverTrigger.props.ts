import { PopoverTriggerProps } from '@primereact/types/shared/popover';
import { ButtonProps } from 'primereact/button';

export const defaultTriggerProps: PopoverTriggerProps = {
    ...(ButtonProps.RootDefaults as PopoverTriggerProps),
    onClick: undefined
};
