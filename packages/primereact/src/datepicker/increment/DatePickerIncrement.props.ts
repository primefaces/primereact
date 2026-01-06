import { DatePickerIncrementProps } from '@primereact/types/shared/datepicker';
import { ButtonProps } from 'primereact/button';

export const defaultIncrementProps: DatePickerIncrementProps = {
    ...(ButtonProps.defaultProps as DatePickerIncrementProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
