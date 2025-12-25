import { DatePickerClearProps } from '@primereact/types/shared/datepicker';
import { ButtonProps } from 'primereact/button';

export const defaultClearProps: DatePickerClearProps = {
    ...(ButtonProps.RootDefaults as DatePickerClearProps),
    variant: 'text',
    severity: 'secondary',
    size: 'small'
};
