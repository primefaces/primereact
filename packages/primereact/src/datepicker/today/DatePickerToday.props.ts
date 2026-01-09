import { DatePickerTodayProps } from '@primereact/types/shared/datepicker';
import { Button, ButtonProps } from 'primereact/button';

export const defaultTodayProps: DatePickerTodayProps = {
    ...(ButtonProps.defaultProps as DatePickerTodayProps),
    as: Button,
    variant: 'text',
    severity: 'secondary',
    size: 'small'
};
