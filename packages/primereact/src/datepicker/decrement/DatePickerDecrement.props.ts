import { DatePickerDecrementProps } from '@primereact/types/shared/datepicker';
import { Button, ButtonProps } from 'primereact/button';

export const defaultDecrementProps: DatePickerDecrementProps = {
    ...(ButtonProps.defaultProps as DatePickerDecrementProps),
    as: Button,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
