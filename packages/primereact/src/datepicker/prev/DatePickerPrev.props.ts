import { DatePickerPrevProps } from '@primereact/types/shared/datepicker';
import * as Button from 'primereact/button';

export const defaultPrevProps: DatePickerPrevProps = {
    ...(Button.defaultProps as DatePickerPrevProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
