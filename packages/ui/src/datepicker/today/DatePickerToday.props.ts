import { DatePickerTodayProps } from '@primereact/types/shared/datepicker';
import * as Button from 'primereact/button';

export const defaultTodayProps: DatePickerTodayProps = {
    ...(Button.defaultProps as DatePickerTodayProps),
    variant: 'text',
    severity: 'secondary',
    size: 'small'
};
