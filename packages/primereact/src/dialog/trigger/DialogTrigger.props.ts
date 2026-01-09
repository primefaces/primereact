import { DialogTriggerProps } from '@primereact/types/shared/dialog';
import { Button, ButtonProps } from 'primereact/button';

export const defaultTriggerProps: DialogTriggerProps = {
    ...(ButtonProps.defaultProps as DialogTriggerProps),
    as: Button
};
