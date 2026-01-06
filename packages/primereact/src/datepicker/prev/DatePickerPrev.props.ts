import { DatePickerPrevProps } from '@primereact/types/shared/datepicker';
import { ButtonProps } from 'primereact/button';

export const defaultPrevProps: DatePickerPrevProps = {
    ...(ButtonProps.defaults as DatePickerPrevProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
