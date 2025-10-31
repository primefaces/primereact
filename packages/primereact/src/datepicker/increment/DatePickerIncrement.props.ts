import { DatePickerIncrementProps } from '@primereact/types/shared/datepicker';
import * as Button from 'primereact/button';

export const defaultIncrementProps: DatePickerIncrementProps = {
    ...(Button.defaultProps as DatePickerIncrementProps),
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
