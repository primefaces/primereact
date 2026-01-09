import { DatePickerIncrementProps } from '@primereact/types/shared/datepicker';
import { Button, ButtonProps } from 'primereact/button';

export const defaultIncrementProps: DatePickerIncrementProps = {
    ...(ButtonProps.defaultProps as DatePickerIncrementProps),
    as: Button,
    iconOnly: true,
    variant: 'text',
    rounded: true,
    severity: 'secondary'
};
