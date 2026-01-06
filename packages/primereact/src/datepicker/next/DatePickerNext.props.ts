import { DatePickerNextProps } from '@primereact/types/shared/datepicker';
import { ButtonProps } from 'primereact/button';

export const defaultNextProps: DatePickerNextProps = {
    ...(ButtonProps.defaults as DatePickerNextProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
