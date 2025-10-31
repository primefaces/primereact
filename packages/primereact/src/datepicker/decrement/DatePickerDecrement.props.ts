import { DatePickerDecrementProps } from '@primereact/types/shared/datepicker';
import * as Button from 'primereact/button';

export const defaultDecrementProps: DatePickerDecrementProps = {
    ...(Button.defaultProps as DatePickerDecrementProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
