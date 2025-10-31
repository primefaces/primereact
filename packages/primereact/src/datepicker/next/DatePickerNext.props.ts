import { DatePickerNextProps } from '@primereact/types/shared/datepicker';
import * as Button from 'primereact/button';

export const defaultNextProps: DatePickerNextProps = {
    ...(Button.defaultProps as DatePickerNextProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
