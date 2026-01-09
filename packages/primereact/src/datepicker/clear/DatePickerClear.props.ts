import { DatePickerClearProps } from '@primereact/types/shared/datepicker';
import { Button, ButtonProps } from 'primereact/button';

export const defaultClearProps: DatePickerClearProps = {
    ...(ButtonProps.defaultProps as DatePickerClearProps),
    as: Button,
    variant: 'text',
    severity: 'secondary',
    size: 'small'
};
