import { DatePickerPrevProps } from '@primereact/types/shared/datepicker';
import { Button, ButtonProps } from 'primereact/button';

export const defaultPrevProps: DatePickerPrevProps = {
    ...(ButtonProps.defaultProps as DatePickerPrevProps),
    as: Button,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
