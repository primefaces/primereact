import { DatePickerClearProps } from '@primereact/types/shared/datepicker';
import * as Button from 'primereact/button';

export const defaultClearProps: DatePickerClearProps = {
    ...(Button.defaultProps as DatePickerClearProps),
    variant: 'text',
    severity: 'secondary',
    size: 'small'
};
