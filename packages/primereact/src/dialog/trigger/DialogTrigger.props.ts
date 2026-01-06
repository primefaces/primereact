import { DialogTriggerProps } from '@primereact/types/shared/dialog';
import { ButtonProps } from 'primereact/button';

export const defaultTriggerProps: DialogTriggerProps = {
    ...(ButtonProps.defaults as DialogTriggerProps)
};
