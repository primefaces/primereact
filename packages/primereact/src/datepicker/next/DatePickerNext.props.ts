import { DatePickerNextProps } from '@primereact/types/shared/datepicker';
import { Button, ButtonProps } from 'primereact/button';

export const defaultNextProps: DatePickerNextProps = {
    ...(ButtonProps.defaultProps as DatePickerNextProps),
    as: Button,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
