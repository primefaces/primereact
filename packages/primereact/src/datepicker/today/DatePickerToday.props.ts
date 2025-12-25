import { DatePickerTodayProps } from '@primereact/types/shared/datepicker';
import { ButtonProps } from 'primereact/button';

export const defaultTodayProps: DatePickerTodayProps = {
    ...(ButtonProps.RootDefaults as DatePickerTodayProps),
    variant: 'text',
    severity: 'secondary',
    size: 'small'
};
