import { DatePickerDecrementProps } from '@primereact/types/shared/datepicker';
import { ButtonProps } from 'primereact/button';

export const defaultDecrementProps: DatePickerDecrementProps = {
    ...(ButtonProps.RootDefaults as DatePickerDecrementProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
