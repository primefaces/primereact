import { DialogTriggerProps } from '@primereact/types/shared/dialog';
import * as Button from 'primereact/button';

export const defaultTriggerProps: DialogTriggerProps = {
    ...(Button.defaultProps as DialogTriggerProps)
};
